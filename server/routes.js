const { ActivityController, WorkoutController} = require('./controllers');

module.exports = app => {
    app.get("/api/activities", ActivityController.getAll);
    app.post("/api/activities", ActivityController.create);
    app.get("/api/workouts", WorkoutController.getAll);
    app.post("/api/workouts", WorkoutController.create);
}