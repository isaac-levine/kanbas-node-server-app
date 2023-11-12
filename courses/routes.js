import Database from "../Database/index.js";
function CourseRoutes(app) {
  // get all courses
  app.get("/api/courses", (req, res) => {
    const courses = Database.courses;
    res.send(courses);
  });

  // route for creating a new course
  app.post("/api/courses", (req, res) => {
    const course = { ...req.body, _id: new Date().getTime().toString() };
    Database.courses.push(course);
    res.send(course);
  });

  // delete a course
  app.delete("/api/courses/:courseId", (req, res) => {
    const courseId = req.params.courseId;
    const index = Database.courses.findIndex(
      (course) => course._id === courseId
    );

    if (index !== -1) {
      Database.courses.splice(index, 1);
      res.send({ message: `Course with ID ${courseId} deleted successfully.` });
    } else {
      res.status(404).send({ error: `Course with ID ${courseId} not found.` });
    }
  });

  // update a course
  app.put("/api/courses/:courseId", (req, res) => {
    const courseId = req.params.courseId;
    const updatedCourse = req.body;

    const index = Database.courses.findIndex(
      (course) => course._id === courseId
    );

    if (index !== -1) {
      Database.courses[index] = updatedCourse;
      res.send(updatedCourse);
    } else {
      res.status(404).send({ error: `Course with ID ${courseId} not found.` });
    }
  });

  // get a course by ID
  app.get("/api/courses/:courseId", (req, res) => {
    const courseId = req.params.courseId;
    const course = Database.courses.find((c) => c._id === courseId);

    if (course) {
      res.send(course);
    } else {
      res.status(404).send({ error: `Course with ID ${courseId} not found.` });
    }
  });
}
export default CourseRoutes;
