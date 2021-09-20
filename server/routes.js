const { ActivityController, WorkoutController} = require('./controllers');

module.exports = app => {
    app.get("/activities", ActivityController.getAll);
    app.post("/activities", ActivityController.create);
    app.get("/workouts", WorkoutController.getAll);
    app.post("/workouts", WorkoutController.create);
}