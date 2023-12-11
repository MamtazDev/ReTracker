import React from "react";

const ActivityDetails = () => {
  return (
    <div>
      <p>Activity Details</p>
      <div
        style={{ height: "120px", width: "120px" }}
        className="icon flex flex-col"
      >
        <p>9</p>
        <p>Hours Spent</p>
      </div>
      <div className="flex justify-between gap-16 items-center">
        <div>
          <p>Information</p>
          <p>Category</p>
          <p>Subcategory</p>
          <p>Date</p>
          <p>Start Time</p>
          <p>End Time</p>
          <p>Status</p>
        </div>
        <div>
          <p>Locked</p>
          <p>Repairs</p>
          <p>Plumbing</p>
          <p>Dec 01, 2023</p>
          <p>9:00 AM</p>
          <p>6:00 PM</p>
          <p>Completed</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetails;
