import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { useState } from "react";
const Header = () => {
  const user = auth.currentUser;
  const currentDate = new Date();
  const [isloggedin, setIsloggedin] = useState(false);

  console.log(user);

  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  const Logout = async (a) => {
    a.preventDefault();
    auth.signOut().then(() => {
      console.log("signed out");
      setIsloggedin(true);
    });
  };

  const longDateString = `${day} ${month} ${year}`;
  return (
    <>
      <nav
        id="nav"
        className="text-xl  font-semibold   bg-[#16171b]  w-full flex items-center  z-50 px-6 border-[#464646] sticky top-0 py-6 "
      >
        <div className="order-1   ">{longDateString} </div>
        <div className="grow order-1"></div>
        <div className="text-4xl font-bold order-2 ">
          <Link to="/">Zeallience</Link>
        </div>
        <div className="grow order-3"></div>
        <div className=" order-3 px-4 mx-2">
          <Link className="underline-animation" to="/workoutinfo">
            Workout Plans
          </Link>{" "}
        </div>
        <div className=" order-4  px-4 mx-2 ">
          {" "}
          <Link className="underline-animation" to="/workoutlog">
            Workout Log
          </Link>{" "}
        </div>
        <div className=" order-5 px-4 mx-2">
          <Link className="underline-animation" to="/foodlog">
            Food Log
          </Link>
        </div>
        {user && !isloggedin ? (
          <>
            <div className="order-6  flex justify-center items-center rounded-full border-2 border-[#464646]">
              <img
                src="https://i.pinimg.com/564x/e3/92/1a/e3921a9e19d508c55dd3c217b9d68db2.jpg"
                alt=""
                width="40"
                className="rounded-full  border-[#464646]"
              />
            </div>
            <div className="order-7 ml-3 rounded-xl border-[#464646]   border-2 px-2 py-1   hover:bg-gray-600">
              {" "}
              <button onClick={Logout}>Logout</button>
            </div>
          </>
        ) : (
          <>
            <div
              className="order-6   rounded-xl border-[#464646]   border-2 px-2 py-1   hover:bg-gray-600
            "
            >
              <button>
                <Link to="/login">Login</Link>
              </button>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Header;
