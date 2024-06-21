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
            className="flex items-center gap-6 bg- h-[12vh] border-b-2 border-x-0 border-t-0 px-10 pr-6 border-[#464646] relative "
          >
            <div className="text-xl  font-semibold  order-1 my-6 ">
              {longDateString}{" "}
            </div>
            <div className="grow order-1"></div>
            <div className="text-5xl font-bold order-2  my-3">
              <a href="">Zeallience</a>
            </div>
            <div className="grow order-3"></div>
            <div className="text-xl font-semibold order-3 my-6 px-4">
              <a href="">Workout Plans</a>
            </div>
            <div className="text-xl font-semibold order-4 my-6 px-4  ">
              {" "}
              <a href="">Workoutlog</a>{" "}
            </div>
            <div className="text-xl font-semibold order-5 my-6 px-4">
              <a href="">FoodLog</a>{" "}
            </div>

            <div className="order-6 mx-auto flex justify-center items-center rounded-full border-4 border-[#464646] circle-container">
              <img
                src="https://i.pinimg.com/564x/e3/92/1a/e3921a9e19d508c55dd3c217b9d68db2.jpg"
                alt=""
                width="70"
                className="rounded-full  border-[#464646]"
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
