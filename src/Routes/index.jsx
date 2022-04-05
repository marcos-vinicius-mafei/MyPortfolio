import { Switch, Route} from "react-router-dom";
import PageAbout from "../pages/PageAbout";
import PageSkills from "../pages/PageSkills";
import Home from "../pages/Home";


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <PageAbout/>
      </Route>
      <Route path="/skills">
        <PageSkills/>
      </Route>
    </Switch>
  );
};

export default Routes;
