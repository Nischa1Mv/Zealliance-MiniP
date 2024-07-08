import { Link, BrowserRouter } from "react-router-dom";
function Header() {
  const currentDate = new Date();

  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  const longDateString = `${day} ${month} ${year}`;
    return(
    <>
        <div
          id="nav"
          className="bg-[#212121] w-full flex items-center gap-6 py-2 border-b-2 border-x-0 border-t-0 z-50 px-10 pr-6 border-[#464646] sticky top-0 "
        >
          <div className="text-xl  font-semibold  order-1 my-6  ">
            {longDateString}{" "}
          </div>
          <div className="grow order-1"></div>
          <div className="text-4xl font-bold order-2  my-3">
            <Link  to="/">Zeallience</Link>
          </div>
          <div className="grow order-3"></div>
          <div className="text-xl font-semibold order-3 my-6 px-4 ">
            <Link className="underline-animation" to="/workoutinfo">Workout Info</Link>{" "}
          </div>
          <div className="text-xl font-semibold order-4 my-6 px-4  ">
            {" "}
            <Link className="underline-animation" to="/workoutlog">Workout Log</Link>{" "}
          </div>
          <div className="text-xl font-semibold order-5 my-6 px-4">
            <Link className="underline-animation" to="/foodlog">Food Log</Link>
          </div>

          <div className="order-6  mx-auto flex justify-center items-center rounded-full border-4 border-[#464646]">
            <img
              src="https://i.pinimg.com/564x/e3/92/1a/e3921a9e19d508c55dd3c217b9d68db2.jpg"
              alt=""
              width="70"
              className="rounded-full  border-[#464646]"
            />
          </div>
        </div>
        </>
        );
}
export default Header;