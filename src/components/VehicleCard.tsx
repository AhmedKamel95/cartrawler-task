import { Link } from "react-router-dom";
import {
  Tooltip,
  Typography,
  Card,
  CardMedia,
  Grid,
  Stack,
  Box,
  CardActions,
  Button,
} from "@mui/material";
import {
  getVehicleName,
  extractSimilar,
  getVendorLogo,
} from "utilities/utilityFunctions";
import { explanations } from "utilities/contants";
import snowFlakeIcon from "assets/Icons/snowflake.svg";
import transmissionIcon from "assets/Icons/transmission.svg";
import personIcon from "assets/Icons/person.svg";
import doorIcon from "assets/Icons/door.svg";
import bagIcon from "assets/Icons/bag.svg";
import fuelIcon from "assets/Icons/fuel.svg";
import { Image } from "assets/styles/styledComponents";
import styles from "assets/styles/VehicleCard.module.scss";
import { InterceptedResponseInterface } from "interface";

interface Props {
  vehicleDetails: InterceptedResponseInterface;
  showActions?: boolean;
}

const VehicleCard = ({
  vehicleDetails,
  showActions = true,
}: Props): JSX.Element => (
  <Card>
    <Grid container className={styles.card_container}>
      <Grid item xs={12} md={5}>
        <CardMedia
          component="img"
          image={vehicleDetails.Vehicle.PictureURL}
          alt="random"
        />
      </Grid>

      <Grid
        item
        container
        direction="column"
        xs={6}
        md={4}
        className={styles.details_container}
      >
        <div>
          <Typography className={styles.vehicle_name}>
            {getVehicleName(vehicleDetails.Vehicle.VehMakeModel["@Name"])}
          </Typography>{" "}
          <Tooltip title={explanations.orSimilar} placement="top" arrow>
            <Typography className={styles.similar}>
              {extractSimilar(vehicleDetails.Vehicle.VehMakeModel["@Name"])}
            </Typography>
          </Tooltip>
        </div>

        <Stack spacing={1}>
          {vehicleDetails.Vehicle["@AirConditionInd"] === "true" && (
            <Box className={styles.vehicle_feature}>
              <Image src={snowFlakeIcon} alt="aircondition" />
              <Typography variant="caption">Air Conditioning</Typography>
            </Box>
          )}
          {vehicleDetails.Vehicle["@TransmissionType"] && (
            <Box className={styles.vehicle_feature}>
              <Image src={transmissionIcon} alt="transmission" />
              <Typography variant="caption">
                {vehicleDetails.Vehicle["@TransmissionType"]}
              </Typography>
            </Box>
          )}
          {vehicleDetails.Vehicle["@FuelType"] && (
            <Box className={styles.vehicle_feature}>
              <Image src={fuelIcon} alt="transmission" />
              <Typography variant="caption">
                {vehicleDetails.Vehicle["@FuelType"]}
              </Typography>
            </Box>
          )}

          {vehicleDetails.Vehicle["@PassengerQuantity"] && (
            <Box className={styles.vehicle_feature}>
              <Image src={personIcon} alt="seats" />
              <Typography variant="caption">
                {vehicleDetails.Vehicle["@PassengerQuantity"]} seats
              </Typography>
            </Box>
          )}
          {vehicleDetails.Vehicle["@DoorCount"] && (
            <Box className={styles.vehicle_feature}>
              <Image src={doorIcon} alt="doors" />
              <Typography variant="caption">
                {vehicleDetails.Vehicle["@DoorCount"]} doors
              </Typography>
            </Box>
          )}
          {vehicleDetails.Vehicle["@BaggageQuantity"] && (
            <Box className={styles.vehicle_feature}>
              <Image src={bagIcon} alt="bags" />
              <Typography variant="caption">
                {vehicleDetails.Vehicle["@BaggageQuantity"]} bags
              </Typography>
            </Box>
          )}
        </Stack>
      </Grid>

      <Grid
        item
        container
        direction="column"
        justifyContent="space-between"
        alignItems="end"
        xs={6}
        md={3}
      >
        <Image
          src={getVendorLogo(vehicleDetails.Vendor["@Code"])}
          alt="vendor-logo"
          width="100px"
        />

        <div>
          <Typography component="p" variant="caption" align="right">
            Price per day:
          </Typography>
          <Typography variant="h5">
            {`${vehicleDetails.TotalCharge["@CurrencyCode"]} ${vehicleDetails.TotalCharge["@RateTotalAmount"]}`}
          </Typography>
        </div>
      </Grid>
    </Grid>

    {showActions && (
      <CardActions className={styles.card_actions_container}>
        <Button
          component={Link}
          variant="contained"
          to="/vehicle-details"
          state={vehicleDetails}
        >
          Book
        </Button>
        <Button component={Link} to="#" variant="outlined">
          Save
        </Button>
      </CardActions>
    )}
  </Card>
);

export default VehicleCard;
