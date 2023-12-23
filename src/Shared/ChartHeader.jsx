// import React, { useState } from "react";

// const ChartHeader = ({ title }) => {
//   const [active, setActive] = useState(12);
//   return (
//     <div className="flex gap-5 flex-wrap justify-between items-center mb-8">
//       <p className="font-bold text-base text-gray-900">{title}</p>
//       <div className="flex items-center">
//         <button
//           onClick={() => setActive(12)}
//           className={`${
//             active === 12
//               ? "text-primary border border-primary rounded-full"
//               : "text-slate-500 border border-transparent"
//           } px-5 py-2 whitespace-nowrap  text-sm font-medium`}
//         >
//           12 Months
//         </button>
//         <button
//           onClick={() => setActive(6)}
//           className={`${
//             active === 6
//               ? "text-primary border border-primary rounded-full"
//               : "text-slate-500 border border-transparent"
//           } px-5 py-2 whitespace-nowrap  text-sm font-medium`}
//         >
//           6 Months
//         </button>
//         <button
//           onClick={() => setActive(30)}
//           className={`${
//             active === 30
//               ? "text-primary border border-primary rounded-full"
//               : "text-slate-500 border border-transparent"
//           } px-5 py-2 whitespace-nowrap  text-sm font-medium`}
//         >
//           30 Days
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChartHeader;


import React, { useState } from "react";

const Button = ({ label, duration, active, onClick }) => (
  <button
    onClick={onClick}
    className={`${
      active === duration
        ? "text-primary border border-primary rounded-full"
        : "text-slate-500 border border-transparent"
    } px-5 py-2 whitespace-nowrap text-sm font-medium`}
  >
    {label}
  </button>
);

const ChartHeader = ({ title }) => {
  const [active, setActive] = useState(12);

  const buttons = [
    { label: "12 Months", duration: 12 },
    { label: "6 Months", duration: 6 },
    { label: "30 Days", duration: 30 },
  ];

  return (
    <div className="flex gap-5 flex-wrap justify-between items-center mb-8">
      <p className="font-bold text-base text-gray-900">{title}</p>
      <div className="flex items-center">
        {buttons.map(({ label, duration }) => (
          <Button
            key={duration}
            label={label}
            duration={duration}
            active={active}
            onClick={() => setActive(duration)}
          />
        ))}
      </div>
    </div>
  );
};

export default ChartHeader;
