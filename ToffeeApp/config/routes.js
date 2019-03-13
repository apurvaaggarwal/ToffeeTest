import Loader from "../screens/Loader";
import Details from "../screens/Details";
import ParentDetails from "../screens/ParentDetails";
import HomeScreen from "../screens/HomeScreen";

// export list of routes.

export default (routes = {
  Loader: { screen: Loader },
  Home: {
    screen: HomeScreen
  },
  Detail: {
    screen: Details
  },
  Parent: {
    screen: ParentDetails
  }
});
