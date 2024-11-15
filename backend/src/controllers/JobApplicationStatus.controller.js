
import { JobApplication } from  "../models/jobApplication.model.js";


const getUserJobApplications = async (req, res) => {
  try {
    const userId = req.user.id;
    console.log("userId",userId) // Assuming user ID is available in `req.user` after authentication
    const applications = await JobApplication.find({ userId: userId })
      .populate("jobId", "job_title company_name location") // Populate job details
      .sort({ appliedAt: -1 });
console.log("applications",applications)
    res.status(200).json({
      success: true,
      data: applications,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export {
    getUserJobApplications
}
