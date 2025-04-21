// backend/models/Project.js

const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tech: [{ type: String, required: true }],
  github: { type: String, required: false },
  demo: { type: String, required: false },
});

const Project =
  mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema, "projects");

module.exports = Project;
