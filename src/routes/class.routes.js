


import express from "express";

import  firebaseAuth  from "../middlewares/firebaseAuth.js";
import { accountAuth } from "../middlewares/accountAuth.js";

import {
  createClassByInstitute,
  createClassByTrainer,
  listClasses,
  updateClass,
  deleteClass,
  applyToInstitute,
  addTrainerToInstitute,
  getTrainerApplications,
  respondToTrainerApplication,
  getClassById,
  getClassesByTrainer,
  createClassByAdmin,
} from "../controllers/class.controller.js";

const router = express.Router();

/* =========================================================
   SPECIFIC ROUTES (Must be defined FIRST to avoid conflicts)
========================================================= */

/* ---------------- INSTITUTE ROUTES ---------------- */
router.post(
  "/institute/create",
  firebaseAuth,
  accountAuth,
  createClassByInstitute
);

router.put(
  "/institute/:id",
  firebaseAuth,
  accountAuth,
  updateClass
);

router.delete(
  "/institute/:id",
  firebaseAuth,
  accountAuth,
  deleteClass
);

router.post(
  "/institute/add-trainer",
  firebaseAuth,
  accountAuth,
  addTrainerToInstitute
);

router.get(
  "/institute/trainer-applications",
  firebaseAuth,
  accountAuth,
  getTrainerApplications
);

router.patch(
  "/institute/trainer-applications/:trainerId",
  firebaseAuth,
  accountAuth,
  respondToTrainerApplication
);

/* ---------------- TRAINER ROUTES ---------------- */
router.post(
  "/trainer/create",
  firebaseAuth,
  accountAuth,
  createClassByTrainer
);

router.put(
  "/trainer/:id",
  firebaseAuth,
  accountAuth,
  updateClass
);

router.delete(
  "/trainer/:id",
  firebaseAuth,
  accountAuth,
  deleteClass
);

router.post(
  "/trainer/apply-institute",
  firebaseAuth,
  accountAuth,
  applyToInstitute
);

/* =========================================================
   PUBLIC / GENERIC ROUTES (Must be defined LAST)
========================================================= */

// Get all classes (Public listing)
router.get("/", listClasses);


router.get(
  "/trainer/:trainerId",
  getClassesByTrainer
);

// Get single class by ID (Public detail page)
// NOTE: This is generic, so it must be at the bottom to catch any ID
// that wasn't matched by specific routes above.
router.get("/:id", getClassById);


/* ---------------- ADMIN ROUTES ---------------- */
router.post(
  "/admin/create",
  createClassByAdmin
);

router.put(
  "/admin/:id",
  updateClass
);

router.delete(
  "/admin/:id",
  deleteClass
);

export default router;