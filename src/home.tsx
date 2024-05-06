// import Bmi from "./bmi";
// import Diary from "./diary";
// import Foodlog from "./foodlog";
import Footer from "./footer";

function Home() {
  const currentDate = new Date();

  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  const longDateString = `${day} ${month} ${year}`;

  return (
    <>
      <div id="body" className=" h-screen flex flex-col gap-5 mx-12 my-5 ">
        <div
          id="nav"
          className="flex gap-6 bg-[#f4a261]  h-[80px] border border-b-4 px-10 pr-6 border-[#0E131F] relative rounded-xl"
        >
          <div className="text-xl font-semibold  order-1 my-6 ">
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
        <div className="w-ful h-fit border-x-4 border  border-black rounded-xl  ">
          {/* <Diary /> */}
          {/* <Foodlog /> */}
        </div>
        {/* <Bmi /> */}
      </div>
      <Footer />
    </>
  );
}

export default Home;
