import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "./Chart";

const AllWorkouts = props => {
  
  const [workouts, setWorkouts] = useState([]);

  useEffect( () => {
    axios.get("/api/workouts")
      .then(res => setWorkouts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="row">
      <div className="col-sm-8">
        <Chart workouts={workouts} />
      </div>
      <div className="col-sm-4">
        {workouts.map(w => 
          <div key={w._id} className="card my-3">
            <div className="card-header bg-dark text-light">Workout on {new Date(w.day).toLocaleDateString()}</div>
            <div className="card-body">
              <p><strong>{w.activity.activityType}</strong> for {w.duration} {w.activity.units}
              <br/>{w.caloriesBurned} Calories burned</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )

}

export default AllWorkouts;