

import express from "express";

import { firebaseAuth } from "../middlewares/firebaseAuth.js";

import express from "express";
import firebaseAuth from "../middlewares/firebaseAuth.js";
import accountAuth from "../middlewares/accountAuth.js";
import { adminAuth } from "../middlewares/adminAuth.js";

import {
  instituteLogin,
  createInstituteProfile,
  getInstituteProfile,
  submitApprovalRequest,
  getInstituteDashboard,
  getInstituteStudents,
  getInstituteBookings,
  listInstitutes,

  createInstituteByAdmin,
  approveInstitute,
  rejectInstitute,


  createInstituteByAdmin,
  approveInstitute,
  rejectInstitute,

  getPendingInstitutes,
  getApprovedInstitutes,
  getRejectedInstitutes,
  getAllInstitutesAdmin,
} from "../controllers/institute.controller.js";

const router = express.Router();

/* =====================================================
   PUBLIC ROUTES

// Public Institutes List
router.get(
  "/",
  listInstitutes
);

/* =====================================================
   ADMIN ROUTES

// Create Institute
router.post(
  "/admin/create",
  adminAuth,
  createInstituteByAdmin
);

// All Institutes
router.get(
  "/admin/all",
  adminAuth,
  getAllInstitutesAdmin
);

// Pending Institutes
router.get(
  "/admin/pending",
  adminAuth,
  getPendingInstitutes
);

// Approved Institutes
router.get(
  "/admin/approved",
  adminAuth,
  getApprovedInstitutes
);

// Rejected Institutes
router.get(
  "/admin/rejected",
  adminAuth,
  getRejectedInstitutes
);

// Approve Institute
router.patch(
  "/admin/:id/approve",
  adminAuth,
  approveInstitute
);

// Reject Institute
router.patch(
  "/admin/:id/reject",
  adminAuth,
  rejectInstitute
);

/* =====================================================
   INSTITUTE ROUTES

// Login
router.post(
  "/login",
  firebaseAuth,
  accountAuth,
  instituteLogin
);

// Create / Update Profile
router.post(
  "/create-profile",
firebaseAuth,
  accountAuth,
  createInstituteProfile
);


const router = express.Router();

/* =====================================================
   PUBLIC ROUTES

// All Approved Institutes
router.get(
  "/",
  listInstitutes
);

/* =====================================================
   ADMIN ROUTES

// Create Institute Directly
router.post(
  "/admin/create",
  adminAuth,
  createInstituteByAdmin
);

// Pending Institutes
router.get(
  "/admin/pending",
  adminAuth,
  getPendingInstitutes
);

// Rejected Institutes
router.get(
  "/admin/rejected",
  adminAuth,
  getRejectedInstitutes
);

// Approve Institute
router.patch(
  "/admin/:id/approve",
  adminAuth,
  approveInstitute
);

// Reject Institute
router.patch(
  "/admin/:id/reject",
  adminAuth,
  rejectInstitute
);

/* =====================================================
   INSTITUTE ROUTES

// Login
router.post(
  "/login",
  firebaseAuth,
  accountAuth,
  instituteLogin
);

// Create Profile
// router.post(
//   "/create-profile",
//   firebaseAuth,
//   accountAuth,
//   createInstituteProfile
// );

router.post(
  "/create-profile",
  createInstituteProfile
);



// Get Profile
router.get(
  "/profile",
  firebaseAuth,
  accountAuth,
  getInstituteProfile
);

// Approval Request
// Submit Approval Request
router.post(
  "/request-approval",
  firebaseAuth,
  accountAuth,
  submitApprovalRequest
);

// Dashboard
router.get(
  "/dashboard",
  firebaseAuth,
  accountAuth,
  getInstituteDashboard
);

// Students
router.get(
  "/students",
  firebaseAuth,
  accountAuth,
  getInstituteStudents
);

// Bookings
router.get(
  "/bookings",
  firebaseAuth,
  accountAuth,
  getInstituteBookings
);

router.get(
  "/admin/approved",
  adminAuth,
  getApprovedInstitutes
);

router.get(
  "/admin/all",
  adminAuth,
  getAllInstitutesAdmin
);

router.get(
  "/admin/all",
  adminAuth,
  getAllInstitutesAdmin
);

router.get(
  "/admin/approved",
  adminAuth,
  getApprovedInstitutes
);

export default router;