import React, { useContext } from "react";
import PrimaryBtn from "../../Shared/PrimaryBtn";
import OutLineBtn from "../../Shared/OutLineBtn";
import download from "../../assets/download.png";
import pdf from "../../assets/pdf.png";
import user from "../../assets/user.png";
import back from "../../assets/back.png";
import GlobalContext from "../../context/GlobalContext";

const ActivityDetails = ({ setOpen }) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(
        "https://www.africau.edu/images/default/sample.pdf"
      );
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "downloaded_file.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <div>
      <div className="px-6 py-4 flex items-center gap-3 border-b border-slate-200">
        <button className="cursor-pointer" onClick={() => setOpen(false)}>
          <img src={back} alt="" />
        </button>
        <p className="text-[#161736] text-lg font-semibold  ">
          Activity Details
        </p>
      </div>
      <div className="p-6">
        <div className="icon h-[120px] w-[120px]  flex flex-col mx-auto mb-6">
          <p className="text-4xl font-bold mb-1">9</p>
          <p className="text-xs font-medium">Hours Spent</p>
        </div>
        <div className="flex justify-between gap-16 items-center mb-6">
          <div className="flex flex-col gap-4 text-slate-500 text-sm font-medium">
            <p className="text-slate-950 text-sm font-semibold">Information</p>
            <p>Category</p>
            <p>Subcategory</p>
            <p>Date</p>
            <p>Start Time</p>
            <p>End Time</p>
            <p>Status</p>
          </div>
          <div className="flex flex-col gap-4 items-end text-slate-950 text-sm font-normal">
            <button className="bg-slate-950 flex items-center  gap-[2px] px-2 py-[2px] text-xs font-normal text-white rounded-full">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M9.75 3.75H8.25V2.625C8.25 2.02826 8.01295 1.45597 7.59099 1.03401C7.16903 0.612053 6.59674 0.375 6 0.375C5.40326 0.375 4.83097 0.612053 4.40901 1.03401C3.98705 1.45597 3.75 2.02826 3.75 2.625V3.75H2.25C2.05109 3.75 1.86032 3.82902 1.71967 3.96967C1.57902 4.11032 1.5 4.30109 1.5 4.5V9.75C1.5 9.94891 1.57902 10.1397 1.71967 10.2803C1.86032 10.421 2.05109 10.5 2.25 10.5H9.75C9.94891 10.5 10.1397 10.421 10.2803 10.2803C10.421 10.1397 10.5 9.94891 10.5 9.75V4.5C10.5 4.30109 10.421 4.11032 10.2803 3.96967C10.1397 3.82902 9.94891 3.75 9.75 3.75ZM4.5 2.625C4.5 2.22718 4.65804 1.84564 4.93934 1.56434C5.22064 1.28304 5.60218 1.125 6 1.125C6.39782 1.125 6.77936 1.28304 7.06066 1.56434C7.34196 1.84564 7.5 2.22718 7.5 2.625V3.75H4.5V2.625Z"
                    fill="white"
                  />
                </svg>
              </span>{" "}
              Locked
            </button>
            <p className="flex items-center gap-2">
              <span className="bg-emerald-500 w-3 h-3 rounded-full block"></span>
              Repairs
            </p>
            <p>Plumbing</p>
            <p>Dec 01, 2023</p>
            <p>9:00 AM</p>
            <p>6:00 PM</p>
            <button className="bg-emerald-50 px-2 py-[2px] rounded-full text-emerald-500 text-xs font-medium">
              Completed
            </button>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-950 mb-4">
            Attachments
          </p>
          <div className="mb-6 flex flex-col gap-4">
            <div className="border border-slate-200 rounded-xl p-4 flex items-center gap-3 justify-between">
              <div className="flex items-center gap-3">
                <img src={pdf} alt="" />
                <div>
                  <p className="text-[#323539] text-sm font-medium">
                    Invoice002.pdf
                  </p>
                  <p className="text-[#858C95] text-xs font-normal">500 kb</p>
                </div>
              </div>
              <button onClick={handleDownload}>
                <img src={download} alt="" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <OutLineBtn>Delete</OutLineBtn>
            <div className="w-full" onClick={() => setShowEventModal(true)}>
              <PrimaryBtn>Edit</PrimaryBtn>
            </div>
          </div>
        </div>
      </div>
      <button className="icon h-16 w-16 fixed bottom-2 right-2">
        <img src={user} alt="" />
      </button>
    </div>
  );
};

export default ActivityDetails;
