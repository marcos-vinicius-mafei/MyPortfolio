import { Switch, Route } from "react-router-dom";
import PageAbout from "../pages/PageAbout";
import PageSkills from "../pages/PageSkills";
import PageProjects from "../pages/PageProjects";
import Home from "../pages/Home";
import { motion } from "framer-motion";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <motion.div
          initial={{ opacity: 0, scaleX: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Home />
        </motion.div>
      </Route>
      <Route path="/about">
        <PageAbout />
      </Route>
      <Route path="/skills">
        <PageSkills />
      </Route>
      <Route path="/projects">
        <PageProjects />
      </Route>
    </Switch>
  );
};

export default Routes;
