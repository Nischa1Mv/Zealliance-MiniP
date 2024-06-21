import Footer from "./footer";
import Home from "./home";

function App() {
  const currentDate = new Date();

  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  const longDateString = `${day} ${month} ${year}`;

  return (
    <>
      <div id="body" className=" flex flex-col gap-5   bg-[#212121] text-white">
        <div className="h-screen">
          <div
            id="nav"
            className="flex items-center gap-6 bg-transparent h-[12vh] border border-b-2 border-x-0 border-t-0 px-10 pr-6 border-gray relative "
          >
            <div className="text-xl  font-semibold  order-1 my-6 ">
              {longDateString}{" "}
            </div>
            <div className="grow order-1"></div>
            <div className="text-5xl font-bold order-2  my-3">Zeallience</div>
            <div className="grow order-3"></div>
            <div className="text-xl font-semibold order-3 my-6 px-4">
              Workout Plans
            </div>
            <div className="text-xl font-semibold order-4 my-6 px-4  ">
              {" "}
              Workoutlog{" "}
            </div>
            <div className="text-xl font-semibold order-5 my-6 px-4">
              FoodLog{" "}
            </div>

            <div className="order-6  mt-4 ">
              <img
                className="   rounded-full"
                src="https://i.pinimg.com/564x/c3/9a/c5/c39ac5ebf279969584e8e12b7622c556.jpg"
                alt="Profile"
                width="50"
              />
            </div>
          </div>
          <div className=" mx-10 h-full">
            <Home />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
