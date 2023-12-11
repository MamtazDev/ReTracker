import React, { useRef, useState } from "react";
import PrimaryBtn from "../../Shared/PrimaryBtn";
import AuthTitle from "../../Shared/AuthTitle";
import { RxCross2 } from "react-icons/rx";

const StepFive = () => {
  const labelRef = useRef(null);
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const copyToClipboard = () => {
    const tempInput = document.createElement("input");
    tempInput.value = labelRef.current.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    setTooltipVisible(true);
    setTimeout(() => {
      setTooltipVisible(false);
    }, 1500);
  };
  return (
    <div>
      <p className="text-primary font-bold text-sm mb-3">Step 05</p>
      <AuthTitle>Invite Coworkers </AuthTitle>
      <p className="text-secondary font-normal text-base mt-3 mb-10">
        If you have coworkers, you add them to collaborate on this property.
      </p>
      <form>
        <div className="mb-10 relative">
          <label>Copy this link and share with your workers</label>
          <div className="flex items-center justify-between bg-slate-50 rounded-full py-1 pr-1 pl-4">
            <label ref={labelRef} className="mb-0">
              https://www.retracker.com/coworker_invite
            </label>
            <button
              onClick={copyToClipboard}
              type="button"
              className="border border-primary text-primary rounded-full py-2 px-4"
            >
              Copy Link
            </button>
          </div>
          {isTooltipVisible && (
            <div className="absolute -bottom-5 right-0">
              Link copied to clipboard!
            </div>
          )}
        </div>
        <div className="mb-2">
          <label>
            Invite by email <span>(Comma Separated)</span>{" "}
          </label>
          <input type="email" />
        </div>
        <div className="flex items-center gap-2 mb-10">
          {[1, 2].map((data, index) => (
            <div
              key={index}
              className="flex items-center rounded-full gap-3 bg-violet-50 py-1 px-3"
            >
              <p className="text-xs font-medium">name{index + 1}@example.com</p>
              <button type="button" className="icon flex-shrink-0">
                {" "}
                <RxCross2 />
              </button>
            </div>
          ))}
        </div>
        <PrimaryBtn type="button">Send Invites</PrimaryBtn>
        <button className="text-primary font-bold text-base  text-center mt-4 w-full">
          Skip for now
        </button>
      </form>
    </div>
  );
};

export default StepFive;
