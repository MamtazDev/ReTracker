import React, { useRef, useState } from "react";
import AuthTitle from "../../Shared/AuthTitle";
import PrimaryBtn from "../../Shared/PrimaryBtn";
import OutLineBtn from "../../Shared/OutLineBtn";
import StepLines from "../../Shared/StepLines";
import imgGrp from "../../assets/img-grp.png";
import { RxCross2 } from "react-icons/rx";

const StepThree = ({ stepper, setStepper }) => {
  const fileRef = useRef();
  const [selectedImages, setSelectedImages] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const imagesArray = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setSelectedImages((prevImages) => [...prevImages, ...imagesArray]);
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const imagesArray = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setSelectedImages((prevImages) => [...prevImages, ...imagesArray]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleRemoveImage = (index) => {
    event.preventDefault();
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };
  return (
    <div className="pb-28 pt-p_153 max-w-authWidth mx-auto">
      <StepLines />

      <p className="text-primary font-bold text-sm mb-3">Step 03</p>
      <AuthTitle>Upload Image </AuthTitle>

      <form>
        <input
          ref={fileRef}
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
          multiple
        />
        <div
          onClick={() => fileRef.current.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="border rounded-xl border-dashed border-[#E5E7EB] text-center py-16 mt-10 mb-4"
        >
          <img className="mx-auto mb-5" src={imgGrp} alt="" />
          <p className="text-base font-medium text-[#1F2937] mb-1">
            Drop your files here or <span className="text-primary">browse</span>
          </p>
          <p className="text-[#9CA3AF] text-sm font-normal">
            Maximum size: 2MB
          </p>
        </div>
        <div className="img_box grid grid-cols-4 gap-4">
          {selectedImages.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                height={120}
                alt={`Selected ${index + 1}`}
                className="w-full  object-cover rounded-3xl"
              />
              <button
                onClick={() => handleRemoveImage(index)}
                className="absolute top-2 right-2 icon z-10"
              >
                <RxCross2 />
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div onClick={() => setStepper(4)} className="w-full">
            <PrimaryBtn>Continue</PrimaryBtn>
          </div>
          <div onClick={() => setStepper(2)} className="w-full">
            <OutLineBtn>Go Back</OutLineBtn>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StepThree;
