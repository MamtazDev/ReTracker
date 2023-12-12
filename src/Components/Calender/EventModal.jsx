import React, { useContext, useRef, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import close from "../../assets/close.png";
import imgGrp from "../../assets/img-grp.png";
import "../../Styles/Auth.css";
const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];

export default function EventModal() {
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
  const [isChecked, setChecked] = useState(false);
  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } =
    useContext(GlobalContext);

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [startTime, setStartTime] = useState(
    selectedEvent ? selectedEvent.startTime : ""
  );
  const [endTime, setEndTime] = useState(
    selectedEvent ? selectedEvent.endTime : ""
  );
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      startTime,
      endTime,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }

    setShowEventModal(false);
  }
  return (
    <div className="h-screen w-full fixed z-10 left-0 top-0 flex justify-center items-center hour_spent ">
      <form className="bg-white rounded-3xl p-6 border max-w-[400px]">
        <header className="flex justify-between items-center mb-2">
          <p className="text-xl font-medium text-slate-950">Add Hours Spent</p>

          {/* {selectedEvent && (
              <span
                onClick={() => {
                  dispatchCalEvent({
                    type: "delete",
                    payload: selectedEvent,
                  });
                  setShowEventModal(false);
                }}
                className="material-icons-outlined text-gray-400 cursor-pointer"
              >
                delete
              </span>
            )} */}
          <button onClick={() => setShowEventModal(false)}>
            <img src={close} alt="" />
          </button>
        </header>
        <p className="text-slate-500 text-base mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sit
          senectus.
        </p>

        <form>
          <div className="mb-4">
            <label>Select Category</label>
            <select>
              <option>Repairs</option>
              <option>Repairs 2</option>
            </select>
          </div>
          <div className="mb-4">
            <label>
              Select Subcategory <span> (Optional)</span>
            </label>
            <select>
              <option>Plumbing</option>
              <option>Plumbing 2</option>
            </select>
          </div>
          <div className="mb-4">
            <label>Total Cost</label>
            <input type="number" placeholder="0.00" />
          </div>
          <div className="mb-4">
            <label>Select Date</label>
            <input type="date" />
          </div>
          <div className="flex items-center gap-4 mb-4 ">
            <div className="w-full">
              <label>Start Time </label>
              <input type="time" />
            </div>
            <div className="w-full">
              <label>End Time </label>
              <input type="time" />
            </div>
          </div>
          <label
            style={{ display: "flex" }}
            className="flex items-center gap-4 mb-4"
          >
            <input
              className="hidden"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span
              className={`${
                isChecked && "bg-slate-200"
              } border  border-slate-200 rounded-sm h-[18px] w-[18px] flex items-center justify-center`}
            >
              {isChecked ? "✔" : ""}
            </span>
            <p>Currently Working</p>
          </label>
          <div>
            <label>
              Upload Attachment <span> (Optional)</span>
            </label>
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
              className="cursor-pointer border rounded-xl border-dashed border-[#E5E7EB] text-center p-6"
            >
              <img className="mx-auto mb-5" src={imgGrp} alt="" />
              <p className="text-base font-medium text-[#1F2937] mb-1">
                Drop your files here or{" "}
                <span className="text-primary">browse</span>
              </p>
              <p className="text-[#9CA3AF] text-sm font-normal">
                Maximum size: 2MB
              </p>
            </div>
          </div>
        </form>

        {/* <div className="p-3">
          <div className="grid items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setTitle(e.target.value)}
            />
            <div>
              <label>Start Time</label>
              <input
                type="text"
                name="star_time"
                placeholder="Start Time"
                value={startTime}
                required
                className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>
            <div>
              <label>End Time</label>
              <input
                type="text"
                name="end_time"
                placeholder="End Time"
                value={endTime}
                required
                className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
            <span className="material-icons-outlined text-gray-400">
              schedule
            </span>
            <p>{daySelected.format("dddd, MMMM DD")}</p>
            <span className="material-icons-outlined text-gray-400">
              segment
            </span>
            <input
              type="text"
              name="description"
              placeholder="Add a description"
              value={description}
              required
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setDescription(e.target.value)}
            />
            <span className="material-icons-outlined text-gray-400">
              bookmark_border
            </span>
            <div className="flex gap-x-2">
              {labelsClasses.map((lblClass, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(lblClass)}
                  className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selectedLabel === lblClass && (
                    <span className="material-icons-outlined text-white text-sm">
                      check
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div> */}
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}
