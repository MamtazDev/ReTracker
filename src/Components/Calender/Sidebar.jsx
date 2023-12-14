import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";
import ActivityDetails from "./ActivityDetails";
export default function Sidebar({ open, setOpen }) {
  return (
    <>
      {open && (
        <aside className="border flex-shrink-0 w-[384px] bg-white">
          {/* <CreateEventButton />
      <SmallCalendar />
      <Labels /> */}

          <ActivityDetails setOpen={setOpen} />
        </aside>
      )}
    </>
  );
}
