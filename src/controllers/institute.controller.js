
// import {
//   instituteLoginService,
//   createInstituteService,
//   instituteCompleteProfileService,
//   getInstituteProfileService,
//   listInstitutesService,
//   getInstituteTrainersService,
//   updateTrainerApprovalService,
// } from "../services/institute.service.js";

// export const instituteLogin = async (req, res) => {
//   try {
//     const result = await instituteLoginService(req.firebaseUser);

//     return res.json({
//       success: true,
//       message: "Institute login successful",
//       data: result,
//     });
//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

// export const createInstitute = async (req, res) => {
//   try {
//     const accountId = req.account?.id;

//     if (!accountId) {
//       return res.status(401).json({
//         success: false,
//         message: "Unauthorized",
//       });
//     }

//     const institute = await createInstituteService(accountId, req.body);

//     return res.json({
//       success: true,
//       message: "Institute created successfully",
//       data: institute,
//     });
//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

// export const instituteCompleteProfile = async (req, res) => {
//   try {
//     const accountId = req.account?.id;

//     const result = await instituteCompleteProfileService(accountId, req.body);

//     return res.json({
//       success: true,
//       data: result,
//     });
//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

// export const getInstituteProfile = async (req, res) => {
//   try {
//     const accountId = req.account?.id;

//     const result = await getInstituteProfileService(accountId);

//     return res.json({
//       success: true,
//       data: result,
//     });
//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

// export const listInstitutes = async (req, res) => {
//   try {
//     const result = await listInstitutesService(req.query);

//     return res.json({
//       success: true,
//       data: result,
//     });
//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

// export const getInstituteTrainers = async (req, res) => {
//   try {
//     const instituteId = req.params.id;

//     const trainers = await getInstituteTrainersService(instituteId);

//     return res.json({
//       success: true,
//       data: trainers,
//     });
//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

// export const updateTrainerApproval = async (req, res) => {
//   try {
//     const instituteAccountId = req.account?.id;
//     const { trainerId } = req.params;
//     const { status, reason } = req.body;

//     const result = await updateTrainerApprovalService(
//       instituteAccountId,
//       trainerId,
//       status,
//       reason
//     );

//     return res.json({
//       success: true,
//       data: result,
//     });
//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };


// import {
//   instituteLoginService,
//   createInstituteService,
//   instituteCompleteProfileService,
//   getInstituteProfileService,
//   listInstitutesService,
//   getInstituteTrainersService,
//   updateTrainerApprovalService,

//   updateInstituteService,
//   deleteInstituteService,
//   updateInstituteApprovalService,
// } from "../services/institute.service.js";

// import { uploadToS3 } from "../middlewares/s3Upload.js";
// /* =========================
//    LOGIN
// ========================= */

// export const instituteLogin = async (req, res) => {
//   try {
//     const result = await instituteLoginService(
//       req.firebaseUser
//     );

//     return res.json({
//       success: true,
//       message: "Institute login successful",
//       data: result,
//     });
//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

// /* =========================
//    CREATE
// ========================= */
// // export const createInstitute = async (req, res) => {
// //   try {
// //     const accountId = req.account?.id;

// //     if (!accountId) {
// //       return res.status(401).json({
// //         success: false,
// //         message: "Unauthorized",
// //       });
// //     }

// //     const image_url = req.file
// //       ? await uploadToS3(
// //           req.file,
// //           "institutes"
// //         )
// //       : null;

// //     const payload = {
// //       ...req.body,
// //       image_url,
// //     };

// //     const institute =
// //       await createInstituteService(
// //         accountId,
// //         payload
// //       );

// //     return res.status(201).json({
// //       success: true,
// //       message:
// //         "Institute created successfully",
// //       data: institute,
// //     });
// //   } catch (err) {
// //     return res.status(500).json({
// //       success: false,
// //       message: err.message,
// //     });
// //   }
// // };


// export const createInstitute = async (
//   req,
//   res
// ) => {
//   try {

//     // TEMP TESTING
//     const accountId = 31;

//     const image_url = req.file
//       ? await uploadToS3(
//           req.file,
//           "institutes"
//         )
//       : null;

//     const payload = {
//       ...req.body,
//       image_url,
//     };

//     const institute =
//       await createInstituteService(
//         accountId,
//         payload
//       );

//     return res.status(201).json({
//       success: true,
//       message:
//         "Institute created successfully",
//       data: institute,
//     });

//   } catch (err) {
//     console.error(err);

//     return res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };






// /* =========================
//    COMPLETE PROFILE
// ========================= */

// export const instituteCompleteProfile =
//   async (req, res) => {
//     try {
//       const accountId = req.account?.id;

//       const result =
//         await instituteCompleteProfileService(
//           accountId,
//           req.body
//         );

//       return res.json({
//         success: true,
//         data: result,
//       });
//     } catch (err) {
//       return res.status(500).json({
//         success: false,
//         message: err.message,
//       });
//     }
//   };

// /* =========================
//    GET PROFILE
// ========================= */

// export const getInstituteProfile =
//   async (req, res) => {
//     try {
//       const accountId = req.account?.id;

//       const result =
//         await getInstituteProfileService(
//           accountId
//         );

//       return res.json({
//         success: true,
//         data: result,
//       });
//     } catch (err) {
//       return res.status(500).json({
//         success: false,
//         message: err.message,
//       });
//     }
//   };

// /* =========================
//    LIST ALL INSTITUTES
// ========================= */

// export const listInstitutes = async (
//   req,
//   res
// ) => {
//   try {
//     const result =
//       await listInstitutesService(
//         req.query
//       );

//     return res.json({
//       success: true,
//       data: result,
//     });
//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

// /* =========================
//    GET TRAINERS
// ========================= */

// export const getInstituteTrainers =
//   async (req, res) => {
//     try {
//       const instituteId =
//         req.params.id;

//       const trainers =
//         await getInstituteTrainersService(
//           instituteId
//         );

//       return res.json({
//         success: true,
//         data: trainers,
//       });
//     } catch (err) {
//       return res.status(500).json({
//         success: false,
//         message: err.message,
//       });
//     }
//   };

// /* =========================
//    TRAINER APPROVAL
// ========================= */

// export const updateTrainerApproval =
//   async (req, res) => {
//     try {
//       const instituteAccountId =
//         req.account?.id;

//       const { trainerId } =
//         req.params;

//       const { status, reason } =
//         req.body;

//       const result =
//         await updateTrainerApprovalService(
//           instituteAccountId,
//           trainerId,
//           status,
//           reason
//         );

//       return res.json({
//         success: true,
//         data: result,
//       });
//     } catch (err) {
//       return res.status(500).json({
//         success: false,
//         message: err.message,
//       });
//     }
//   };

// /* =========================
//    UPDATE INSTITUTE
// ========================= */
// export const updateInstitute = async (
//   req,
//   res
// ) => {
//   try {
//     const { id } = req.params;

//     const image_url = req.file
//       ? await uploadToS3(
//           req.file,
//           "institutes"
//         )
//       : undefined;

//     const payload = {
//       ...req.body,
//       ...(image_url && {
//         image_url,
//       }),
//     };

//     const result =
//       await updateInstituteService(
//         id,
//         payload
//       );

//     return res.json({
//       success: true,
//       message:
//         "Institute updated successfully",
//       data: result,
//     });
//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
// /* =========================
//    DELETE INSTITUTE
// ========================= */

// export const deleteInstitute =
//   async (req, res) => {
//     try {
//       const { id } = req.params;

//       await deleteInstituteService(
//         id
//       );

//       return res.json({
//         success: true,
//         message:
//           "Institute deleted successfully",
//       });
//     } catch (err) {
//       return res.status(500).json({
//         success: false,
//         message: err.message,
//       });
//     }
//   };

// /* =========================
//    APPROVE / REJECT
// ========================= */

// export const updateInstituteApproval =
//   async (req, res) => {
//     try {
//       const { id } = req.params;

//       const {
//         approval_status,
//       } = req.body;

//       const result =
//         await updateInstituteApprovalService(
//           id,
//           approval_status
//         );

//       return res.json({
//         success: true,
//         data: result,
//       });
//     } catch (err) {
//       return res.status(500).json({
//         success: false,
//         message: err.message,
//       });
//     }
//   };

// export const createInstituteByAdmin =
//   async (req, res) => {
//     try {
//       const adminId = req.admin?.id;

//       if (!adminId) {
//         return res.status(401).json({
//           success: false,
//           message: "Admin unauthorized",
//         });
//       }

//       const image_url = req.file
//         ? await uploadToS3(
//             req.file,
//             "institutes"
//           )
//         : null;

//       const payload = {
//         ...req.body,
//         image_url,
//       };

//       const institute =
//         await createInstituteService(
//           adminId,
//           payload
//         );

//       return res.status(201).json({
//         success: true,
//         message:
//           "Institute created successfully",
//         data: institute,
//       });
//     } catch (err) {
//       return res.status(500).json({
//         success: false,
//         message: err.message,
//       });
//     }
//   };





// /* =========================
//    CREATE PROFILE
// ========================= */
// export const createInstituteProfile =
//   async (req, res) => {
//     return instituteCompleteProfile(
//       req,
//       res
//     );
//   };

// /* =========================
//    SEND APPROVAL REQUEST
// ========================= */
// export const submitApprovalRequest =
//   async (req, res) => {
//     try {
//       const accountId = req.account?.id;

//       const result =
//         await getInstituteProfileService(
//           accountId
//         );

//       if (!result) {
//         return res.status(404).json({
//           success: false,
//           message:
//             "Institute profile not found",
//         });
//       }

//       return res.json({
//         success: true,
//         message:
//           "Approval request submitted successfully",
//       });

//     } catch (err) {
//       return res.status(500).json({
//         success: false,
//         message: err.message,
//       });
//     }
//   };

// /* =========================
//    DASHBOARD
// ========================= */
// export const getInstituteDashboard =
//   async (req, res) => {
//     try {
//       const accountId = req.account?.id;

//       const profile =
//         await getInstituteProfileService(
//           accountId
//         );

//       return res.json({
//         success: true,
//         data: {
//           profile,
//           total_classes: 0,
//           total_trainers: 0,
//           total_students: 0,
//           total_bookings: 0,
//         },
//       });

//     } catch (err) {
//       return res.status(500).json({
//         success: false,
//         message: err.message,
//       });
//     }
//   };

// /* =========================
//    STUDENTS
// ========================= */
// export const getInstituteStudents =
//   async (req, res) => {
//     try {

//       return res.json({
//         success: true,
//         data: [],
//       });

//     } catch (err) {
//       return res.status(500).json({
//         success: false,
//         message: err.message,
//       });
//     }
//   };

// /* =========================
//    BOOKINGS
// ========================= */
// export const getInstituteBookings =
//   async (req, res) => {
//     try {

//       return res.json({
//         success: true,
//         data: [],
//       });

//     } catch (err) {
//       return res.status(500).json({
//         success: false,
//         message: err.message,
//       });
//     }
//   };

// /* =========================
//    PENDING INSTITUTES
// ========================= */
// export const getPendingInstitutes =
//   async (req, res) => {
//     try {

//       const result =
//         await listInstitutesService(
//           req.query
//         );

//       const pending =
//         result.filter(
//           (item) =>
//             item.approval_status ===
//             "PENDING"
//         );

//       return res.json({
//         success: true,
//         data: pending,
//       });

//     } catch (err) {
//       return res.status(500).json({
//         success: false,
//         message: err.message,
//       });
//     }
//   };

// /* =========================
//    APPROVED INSTITUTES
// ========================= */
// export const getApprovedInstitutes =
//   async (req, res) => {
//     try {

//       const result =
//         await listInstitutesService(
//           req.query
//         );

//       const approved =
//         result.filter(
//           (item) =>
//             item.approval_status ===
//             "APPROVED"
//         );

//       return res.json({
//         success: true,
//         data: approved,
//       });

//     } catch (err) {
//       return res.status(500).json({
//         success: false,
//         message: err.message,
//       });
//     }
//   };

// /* =========================
//    APPROVE
// ========================= */
// export const approveInstitute =
//   async (req, res) => {

//     req.body.approval_status =
//       "APPROVED";

//     return updateInstituteApproval(
//       req,
//       res
//     );
//   };

// /* =========================
//    REJECT
// ========================= */
// export const rejectInstitute =
//   async (req, res) => {

//     req.body.approval_status =
//       "REJECTED";

//     return updateInstituteApproval(
//       req,
//       res
//     );
//   };
  


import {
  instituteLoginService,
  createInstituteService,
  instituteCompleteProfileService,
  getInstituteProfileService,
  listInstitutesService,
  getAllInstitutesAdminService,
  updateInstituteApprovalService,
  getInstituteDashboardService,
  getInstituteStudentsService,
  getInstituteBookingsService,


} from "../services/institute.service.js";

/* LOGIN */
export const instituteLogin = async (req, res) => {
  try {
    const result = await instituteLoginService(req.firebaseUser);

    return res.json({
      success: true,
      data: result,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/* PROFILE */
export const createInstituteProfile = async (req, res) => {
   
  console.log("BODY =", req.body);
  console.log("ACCOUNT =", req.account);

  try {
    const result = await instituteCompleteProfileService(
      req.account?.id,
      req.body
    );

    return res.json({
      success: true,
      data: result,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const getInstituteProfile = async (req, res) => {
  try {
    const result = await getInstituteProfileService(
      req.account?.id
    );

    return res.json({
      success: true,
      data: result,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/* APPROVAL REQUEST */
export const submitApprovalRequest = async (req, res) => {
  try {
    return res.json({
      success: true,
      message: "Approval request submitted",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/* DASHBOARD */
export const getInstituteDashboard = async (
  req,
  res
) => {
  try {

    console.log(
      "ACCOUNT =",
      req.account
    );

    const dashboard =
      await getInstituteDashboardService(
        req.account.id
      );

    return res.json({
      success: true,
      data: dashboard,
  try {
    return res.json({
      success: true,
      message: "Approval request submitted",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/* STUDENTS */
export const getInstituteStudents = async (
  req,
  res
) => {
  try {

    const students =
      await getInstituteStudentsService(
        req.account.id
      );

    return res.json({
      success: true,
      data: students,
/* DASHBOARD */
export const getInstituteDashboard = async (req, res) => {
  try {
    return res.json({
      success: true,
      data: {
        total_classes: 5,
        total_trainers: 8,
        total_students: 125,
        total_bookings: 43,
      },
    });

  } catch (err) {

    return res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};

/* BOOKINGS */
export const getInstituteBookings = async (
  req,
  res
) => {
  try {

    const bookings =
      await getInstituteBookingsService(
        req.account.id
      );
/* STUDENTS */
export const getInstituteStudents = async (req, res) => {
  return res.json({
    success: true,
    data: [],
  });
};

/* BOOKINGS */
export const getInstituteBookings = async (req, res) => {
  return res.json({
    success: true,
    data: [],
  });
};

/* ADMIN CREATE */
export const createInstituteByAdmin = async (req, res) => {
  try {
    const institute = await createInstituteService(
      req.admin?.id || 1,
      req.body
    );

    return res.status(201).json({
      success: true,
      data: bookings,
      data: institute,
    });

  } catch (err) {

    return res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};




/* =========================
   LIST INSTITUTES
========================= */
export const listInstitutes = async (
  req,
  res
) => {
  try {
    const result =
      await listInstitutesService(
        req.query
      );

    return res.json({
      success: true,
      data: result,
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};


  /* =========================
   ALL INSTITUTES (ADMIN)
========================= */
export const getAllInstitutesAdmin =
  async (req, res) => {
    try {
      const institutes =
        await getAllInstitutesAdminService();

      return res.json({
        success: true,
        data: institutes,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  };

// /* =========================
//    PENDING INSTITUTES
// ========================= */
export const getPendingInstitutes =
  async (req, res) => {
    try {
      const institutes =
        await getAllInstitutesAdminService();

      return res.json({
        success: true,
        data: institutes.filter(
          (i) =>
            i.approval_status ===
            "PENDING"
        ),
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  };

/* =========================
   APPROVED INSTITUTES
========================= */
export const getApprovedInstitutes =
  async (req, res) => {
    try {
      const institutes =
        await getAllInstitutesAdminService();

      return res.json({
        success: true,
        data: institutes.filter(
          (i) =>
            i.approval_status ===
            "APPROVED"
        ),
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  };

/* =========================
   REJECTED INSTITUTES
========================= */
export const getRejectedInstitutes =
  async (req, res) => {
    try {
      const institutes =
        await getAllInstitutesAdminService();

      return res.json({
        success: true,
        data: institutes.filter(
          (i) =>
            i.approval_status ===
            "REJECTED"
        ),
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  };

/* =========================
   APPROVE INSTITUTE
========================= */
export const approveInstitute =
  async (req, res) => {
    try {
      const result =
        await updateInstituteApprovalService(
          req.params.id,
          "APPROVED"
        );

      return res.json({
        success: true,
        data: result,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  };

/* =========================
   REJECT INSTITUTE
========================= */
export const rejectInstitute =
  async (req, res) => {
    try {
      const result =
        await updateInstituteApprovalService(
          req.params.id,
          "REJECTED"
        );

      return res.json({
        success: true,
        data: result,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  };

  export const createInstituteByAdmin =
  async (req, res) => {
    try {
      const institute =
        await createInstituteService(
          req.admin?.id || 1,
          req.body
        );

      return res.status(201).json({
        success: true,
        data: institute,
      });

    } catch (err) {

      return res.status(500).json({
        success: false,
        message: err.message,
      });

    }
};
  };
