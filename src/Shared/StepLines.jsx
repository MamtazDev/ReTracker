const StepLines = () => {
  return (
    <div className="flex gap-4 items-center mb-10">
      {[1, 2, 3, 4].map((index) => (
        <p className="w-24 h-2 rounded-2xl bg-[#E7E5E4]" key={index}></p>
      ))}
    </div>
  );
};

export default StepLines;
