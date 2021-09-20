import { Switch, Route, Link, useLocation } from "react-router-dom";
import NewWorkout from "./Components/NewWorkout";
import AllWorkouts from "./Components/AllWorkouts";

function App() {

  const {pathname} = useLocation();

  return (
    <div className="container">
      <h1>Fitness App</h1>

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className={pathname === "/" ? "nav-link active": "nav-link"} to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={pathname === "/new" ? "nav-link active": "nav-link"} to="/new">Add Workout</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/new">
          <NewWorkout />
        </Route>
        <Route exact path="/">
          <AllWorkouts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
