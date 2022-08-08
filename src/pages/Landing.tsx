import { useEffect, useState } from "react";
import moment from "moment";
import {
  Grid,
  FormControl,
  Select,
  MenuItem,
  Box,
  Typography,
  SelectChangeEvent,
} from "@mui/material";

import useFetch from "hooks/useFetch";
import VehicleCard from "components/VehicleCard";
import { URL, STATIC_API_RESPONSE } from "utilities/contants";
import { createUniqueId } from "utilities/utilityFunctions";
import "assets/styles/Landing.scss";
import {
  ResponseInterface,
  InterceptedResponseInterface,
  VehRentalCore,
  VehVendorAvail,
} from "interface";

const Landing = () => {
  const { data } = useFetch<ResponseInterface[]>(URL);

  const [carsList, setCarsList] = useState<InterceptedResponseInterface[]>([]);
  const [rentalInfo, setRentalInfo] = useState<VehRentalCore>();
  const [sortBy, setSortBy] = useState("low-high");

  const responseInterceptor = (data: ResponseInterface) => {
    let cars: InterceptedResponseInterface[] = [];
    data.VehAvailRSCore.VehVendorAvails.map((vehVendorAvail: VehVendorAvail) =>
      vehVendorAvail.VehAvails.map((car) =>
        cars.push({
          ...car,
          Price: parseFloat(car.TotalCharge["@RateTotalAmount"]),
          Id: createUniqueId(),
          Vendor: vehVendorAvail.Vendor,
        })
      )
    );
    cars = cars.sort((a, b) => a.Price - b.Price);
    setCarsList(cars);
    setRentalInfo(data.VehAvailRSCore.VehRentalCore);
  };

  useEffect(() => {
    if (data) responseInterceptor(data[0]);
    else responseInterceptor(STATIC_API_RESPONSE[0]);
  }, [data]);

  const handleSort = (event: SelectChangeEvent) => {
    let sortedList = carsList;
    setSortBy(event.target.value as string);
    switch (event.target.value) {
      case "high-low":
        sortedList = carsList.sort((a, b) => b.Price - a.Price);
        break;

      default:
        sortedList = carsList.sort((a, b) => a.Price - b.Price);
        break;
    }

    setCarsList(sortedList);
  };

  return (
    <>
      <div className="sortby-dropdown">
        <span>Sort:</span>
        <Box>
          <FormControl size="small">
            <Select value={sortBy} onChange={handleSort}>
              <MenuItem value="low-high">Price (low-high)</MenuItem>
              <MenuItem value="high-low">Price (high-low)</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      <Grid container justifyContent="space-between" spacing={2}>
        <Grid item xs={12} lg={3}>
          <Box className="rental-information">
            <Typography component="p" className="rental-information__title">
              Rental Informarion
            </Typography>
            <div>
              <Typography>Pick up</Typography>
              <Typography variant="body2">
                {rentalInfo?.PickUpLocation["@Name"]}
              </Typography>
              <Typography variant="caption">
                {moment(rentalInfo && rentalInfo["@PickUpDateTime"]).format(
                  "YYYY-MM-DD HH:mm"
                )}
              </Typography>
              <Typography>Return</Typography>
              <Typography variant="body2">
                {rentalInfo?.ReturnLocation["@Name"]}
              </Typography>
              <Typography variant="caption">
                {moment(rentalInfo && rentalInfo["@ReturnDateTime"]).format(
                  "YYYY-MM-DD HH:mm"
                )}
              </Typography>
            </div>
          </Box>
        </Grid>

        <Grid item container xs={12} lg={9} spacing={2}>
          {carsList.map((obj) => (
            <Grid item key={obj.Id} xs={12}>
              <VehicleCard vehicleDetails={obj} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Landing;
