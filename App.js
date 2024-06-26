import express from 'express'
import mongoose from "mongoose";
import Hello from "./Hello.js"
import Lab5 from './Lab5.js'
import cors from "cors";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import AssignmentsRoutes from './Kanbas/assignments/routes.js';

mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
const app = express()
app.use(cors())
app.use(express.json());
Hello(app)
Lab5(app)
CourseRoutes(app)
ModuleRoutes(app)
AssignmentsRoutes(app)
app.listen(process.env.PORT || 4000);