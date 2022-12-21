import express from "express";
import { authenticateToken } from "../Middleware/authenticateToken";
import { checkIdExists } from "../Middleware/checkIdExists";
import {
  getEmployees,
  getEmployeeById,
  addEmployee,
  applyForLeave,
  deleteEmployee,
  updateSSCDetails,
  getEmployeesByDepartment,
  getEmployeesWithLeaves,
  approveLeaveByHod,
  approveLeaveByPrincipal,
  getEmployeesWithUpcomingLeaves,
} from "./employee.controller";

// Path: /employees
const employeeRouter = express.Router();

employeeRouter.get("/", authenticateToken, getEmployees);
employeeRouter.get("/byId", authenticateToken, checkIdExists, getEmployeeById);
employeeRouter.get(
  "/byDepartment",
  authenticateToken,
  getEmployeesByDepartment
);
employeeRouter.get("/withLeaves", authenticateToken, getEmployeesWithLeaves);
employeeRouter.get(
  "/withUpcomingLeaves",
  authenticateToken,
  getEmployeesWithUpcomingLeaves
);

employeeRouter.post("/", authenticateToken, addEmployee);
employeeRouter.post(
  "/apply-leave",
  authenticateToken,
  checkIdExists,
  applyForLeave
);

employeeRouter.put("/qualification", authenticateToken, updateSSCDetails);
employeeRouter.put(
  "/approve-leave/byHod",
  authenticateToken,
  approveLeaveByHod
);
employeeRouter.put(
  "/approve-leave/byPrincipal",
  authenticateToken,
  approveLeaveByPrincipal
);

employeeRouter.delete("/", authenticateToken, checkIdExists, deleteEmployee);

export default employeeRouter;
