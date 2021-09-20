import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const NewWorkout = props => {

  const [allActivities, setAllActivities] = useState([]);
  const [activityIndex, setActivityIndex] = useState(-1);
  const [activity, setActivity] = useState({});
  const [duration, setDuration] = useState(0);
  const [day, setDay] = useState("");
  const history = useHistory();

  useEffect( () => {
    axios.get("/api/activities")
      .then(res => setAllActivities(res.data))
      .catch(err => console.error(err));
  }, []);

  const addWorkout = e => {
    e.preventDefault();
    const caloriesBurned = activity.calories * duration;
    const workout = {duration, day: new Date(day+"T24:00:00Z"), activity, caloriesBurned};
    axios.post("/api/workouts", workout)
      .then(res => {
        console.log(res);
        history.push("/");
      }).catch(err => console.error(err));
  }

  useEffect( () => {
    setActivity(allActivities[activityIndex]);
  }, [activityIndex]);

  return (
    <form onSubmit={addWorkout}>
      <div className="form-group my-3">
        <label>Activity</label>
        <select className="form-control" onChange={e => setActivityIndex(e.target.value)} value={activityIndex}>
          <option disabled value={-1}>select an option</option>
          {allActivities.map((a, i) => 
            <option key={i} value={i}>{a.activityType}</option> )}
        </select>
      </div>
      <div className="form-group my-3">
        <label>Duration</label>
        <input 
          type="text"
          className="form-control" 
          value={duration} 
          onChange={e => setDuration(e.target.value)} 
        />
      </div>
      <div className="form-group my-3">
        <label>Date</label>
        <input 
          type="date"
          className="form-control" 
          onChange={e => setDay(e.target.value)} 
        />
      </div>
      <input type="submit" value="Add Workout" className="btn btn-primary" />
    </form>
  );
}

export default NewWorkout;