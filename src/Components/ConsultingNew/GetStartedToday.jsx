
const GetStartedToday = () => {
  return (
    <section className="GetStartedToday py-16 overflow-hidden">
      <div className="container">
        <div className="getStarTedCard bg-slate-950 p-16 rounded-3xl">
          <div className="card_content text-center">
            <h2 className="text-5xl font-bold text-white mb-12">
              Get Started Today
            </h2>
            <div className="card_btn flex flex-wrap justify-center gap-6">
              <button className="btnGradientClr border border-primary hover:border-white hover:bg-white py-3 px-9 rounded-full text-base font-bold text-white hover:text-primary transition-all duration-300">
                REGISTER FOR STR COURSES
              </button>

              <button className="border border-white hover:border-primary hover:bg-primary bg-transparent py-3 px-9 rounded-full text-base font-bold text-white transition-all duration-300">
                REGISTER FOR STR COURSES
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedToday;
