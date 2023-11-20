import db from "../Database/index.js";

function AssignmentRoutes(app) {
  // route for getting all assignments
  app.get("/api/assignments", (req, res) => {
    res.send(Database.assignments);
  });

  // route for creating a new assignment
  app.post("/api/courses/:cid/assignments", (req, res) => {
    const assignment = { ...req.body, _id: new Date().getTime().toString() };
    Database.assignments.push(assignment);
    res.send(assignment);
  });

  // route for getting all assignments of this course
  app.get("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const assignments = Database.assignments.filter(
      (assignment) => assignment.course === cid
    );
    res.send(assignments);
  });

  // route for getting a specific assignment
  app.get("/api/courses/:cid/assignments/:aid", (req, res) => {
    const { aid } = req.params;
    const assignment = Database.assignments.find(
      (assignment) => assignment._id === aid
    );
    if (!assignment) {
      res.status(404).send("Assignment not found");
      return;
    }
    res.send(assignment);
  });

  // route for deleting an assigment
  app.delete("/api/courses/:cid/assignments/:aid", (req, res) => {
    const { aid } = req.params;
    Database.assignments = Database.assignments.filter(
      (assignment) => assignment._id !== aid
    );
    res.sendStatus(200);
  });

  // route for updating an assigment
  app.put("/api/courses/:cid/assignments/:aid", (req, res) => {
    const { aid } = req.params;
    const assignmentIndex = Database.assignments.findIndex(
      (assignment) => assignment._id === aid
    );
    Database.assignments[assignmentIndex] = {
      ...Database.assignments[assignmentIndex],
      ...req.body,
    };
    res.sendStatus(204);
  });
}
export default AssignmentRoutes;
