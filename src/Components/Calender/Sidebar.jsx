import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";
import ActivityDetails from "./ActivityDetails";
export default function Sidebar() {
  return (
    <aside className="border p-5 w-64">
     {/*  <SmallCalendar />
      <Labels /> */}

      <ActivityDetails />
    </aside>
  );
}
