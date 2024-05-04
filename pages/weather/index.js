import MapHeat from "@/components/mapbox/map-heat";
import Temperature from "@/components/temperature";
import Navibar from "../../components/navbar/index";

const Weather = () => {
  return (
    <div>
      <Navibar />
      <MapHeat />
      <Temperature/>
    </div>
  );
};

export default Weather;
