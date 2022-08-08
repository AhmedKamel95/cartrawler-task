import { useLocation } from "react-router";
import VehicleCard from "components/VehicleCard";
import { InterceptedResponseInterface } from "interface";

const VehicleDetails = () => {
  const location = useLocation();
  const vehicleDetails = location.state as InterceptedResponseInterface;

  return <VehicleCard vehicleDetails={vehicleDetails} showActions={false} />;
};

export default VehicleDetails;
