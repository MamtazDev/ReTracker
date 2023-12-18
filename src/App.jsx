import { RouterProvider } from "react-router-dom";
import "./App.css";
import "aos/dist/aos.css";
import { router } from "./Routes/Router";
import { useState } from "react";
import { getMonth } from "./Utils/DayMatrix";

function App() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  // console.log("currenMonth:", currenMonth)


  return <RouterProvider router={router} />;
}

export default App;
