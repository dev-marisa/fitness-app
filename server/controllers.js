const { Activity, Workout } = require('./models');

class ActivityController {
    getAll(req, res) {
        Activity.find()
            .then(activities => res.json(activities))
            .catch(err => res.json(err));
    }
    create(req, res) {
        Activity.create(req.body)
            .then(activity => res.json(activity))
            .catch(err => res.json(err));
    }
}

class WorkoutController {
    getAll(req, res) {
        Workout.find().sort({'day': -1}).exec()
            .then(workouts => res.json(workouts))
            .catch(err => res.json(err));
    }
    create(req, res) {
        Workout.create(req.body)
            .then(workout => res.json(workout))
            .catch(err => res.json(err));
    }
}

module.exports.ActivityController = new ActivityController();
module.exports.WorkoutController = new WorkoutController();
