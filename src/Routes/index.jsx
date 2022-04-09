import { Switch, Route} from "react-router-dom";
import PageAbout from "../pages/PageAbout";
import PageSkills from "../pages/PageSkills";
import PageProjects from "../pages/PageProjects";
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
      <Route path="/projects">
        <PageProjects/>
      </Route>
    </Switch>
  );
};

export default Routes;
