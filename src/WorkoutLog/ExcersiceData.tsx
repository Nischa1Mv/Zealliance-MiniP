import { useState } from "react";
import Justinput from "./JustInput";
import DataWandR from "./DataWandR";

function Excercisedata({}) {
  var Isreadonly = false;
  const [info, setInfo] = useState(true);
  const handleClick = () => {
    setInfo((prev) => !prev);
  };
  return (
    <>
      {/*---------------------------------------------------Excercise Data-------------------------------------------------------------------->*/}
      <div
        className={`relative flex border-2 w-full my-6 py-5 px-4 rounded-xl text-xl font-bold gap-2 ${
          info ? "  border-[#464646]" : "border-amber-300"
        }`}
      >
        {info ? (
          <>
            {" "}
            <div>Name : ww / rr , ww / rr , ww / rr , PR: ww / rr</div>
            <div className="absolute right-5">
              <svg
                onClick={handleClick}
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
              </svg>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-3">
              {" "}
              <div className="flex jusitfy-center items-center text-nowrap ">
                Exercise Name{" "}
              </div>
              {""}
              <div className="absolute right-20  flex ">
                <div className=" px-3 py-1 bg-blue-500 cursor-pointer">
                  Save
                </div>
                <div>
                  <svg
                    className="absolute bottom-0 "
                    onClick={handleClick}
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    viewBox="0 -960 960 960"
                    width="30spx"
                    fill="#e8eaed"
                  >
                    <path d="m280-400 200-200 200 200H280Z" />
                  </svg>
                </div>
              </div>
              <div className="flex  ">
                <div className="flex w-[20%]">
                  <h1 className="mt-3 text-nowrap">Set-1</h1>
                  <DataWandR />
                </div>
                <div className="flex w-[20%] ">
                  <h1 className="mt-3 text-nowrap">Set-2</h1>
                  <DataWandR />
                </div>{" "}
                <div className="flex w-[20%] ">
                  <h1 className="mt-3 text-nowrap">Set-3</h1>
                  <DataWandR />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Excercisedata;
