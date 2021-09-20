const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
    activityType: {
        type: String,
        required: [true, "Activity type is required"]
    },
    units: {
        type: String,
        required: [true, "Units are required"]
    },
    calories: {
        type: Number,
        required: [true, "Calories per unit of exercise are required"]
    }
});

const WorkoutSchema = new mongoose.Schema({
    activity: ActivitySchema,
    duration: {
        type: Number,
        required: [true, "Duration is required"]
    },
    day: Date,
    caloriesBurned: Number
}, {timestamps: true});

module.exports.Activity = mongoose.model("Activity", ActivitySchema);
module.exports.Workout = mongoose.model("Workout", WorkoutSchema);