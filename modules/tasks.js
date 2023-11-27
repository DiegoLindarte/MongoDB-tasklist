const mongoose = require('mongoose');

const tasksModel = mongoose.model("Task", {
    nameT: String,
    descriptionT: String,
    completeT: Boolean,
});

module.exports = tasksModel;

