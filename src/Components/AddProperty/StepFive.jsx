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
      <AuthTitle>Invite Coworkers </AuthTitle>
      <p className="text-secondary font-normal text-base mt-3 mb-5 lg:mb-10">
        If you have coworkers, you add them to collaborate on this property.
      </p>
      <form>
        <div className="mb-5 lg:mb-10 relative">
          <label>Copy this link and share with your workers</label>
          <div className="flex items-center justify-between bg-slate-50 rounded-full p-3 lg:py-1 lg:pr-1 lg:pl-4">
            <label
              ref={labelRef}
              className="mb-0 text-ellipsis overflow-hidden ..."
            >
              https://www.retracker.com/coworker_invite
            </label>
            <button
              onClick={copyToClipboard}
              type="button"
              className="hidden lg:block border border-primary text-primary rounded-full py-2 px-4"
            >
              Copy Link
            </button>
          </div>
          {isTooltipVisible && (
            <div className="absolute -bottom-5 right-0">
              Link copied to clipboard!
            </div>
          )}
          <button
            onClick={copyToClipboard}
            type="button"
            className="mt-2 block lg:hidden border w-full border-primary text-primary rounded-full py-2 px-4"
          >
            Copy Link
          </button>
        </div>
        <div className="mb-2">
          <label>
            Invite by email <span>(Comma Separated)</span>{" "}
          </label>
          <input type="email" />
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap items-start justify-start gap-2 mb-5 lg:mb-10">
          {[1, 2].map((data, index) => (
            <div
              key={index}
              className="flex items-center rounded-full gap-3 bg-violet-50 py-1 px-3"
            >
              <p className="text-xs font-medium">name{index + 1}@example.com</p>
              <button type="button" className="h-8 w-8 icon flex-shrink-0">
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
