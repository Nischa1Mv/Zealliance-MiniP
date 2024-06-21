import InputWithLabel from "./assets/custom-componets/inputwithlabel";
import { useState } from "react";

const Bmi = () => {
  const [isMale, setIsMale] = useState(false);
  const [isFemale, setIsFemale] = useState(false);

  const handleMaleClick = () => {
    setIsMale(true);
    setIsFemale(false);
  };

  const handleFemaleClick = () => {
    setIsMale(false);
    setIsFemale(true);
  };

  return (
    <>
      <div className="rounded-xl py-5 px-8 grid grid-cols-2 gap-10 grid-rows-1 text-black mt-8">
        <div className="flex flex-col gap-5 items-center bg-white px-6 py-10 border-4 rounded-xl">
          <div className="text-6xl font-extrabold">Enter Your Stats</div>
          <form action="Submit">
            <div className="flex flex-col gap-12 text-3xl font-bold mt-8">
              <div className="grid grid-cols-2 grid-rows-1 text-center">
                <div
                  className={`border-2 border-black rounded-lg py-2 cursor-pointer  transition duration-200  ${
                    isMale ? "bg-blue-400 text-white" : ""
                  }`}
                  onClick={handleMaleClick}
                >
                  Male
                </div>
                <div
                  className={`border-2 border-black rounded-lg py-2 cursor-pointer  transition duration-200 ${
                    isFemale ? "bg-yellow-400 text-white" : "bg-transparent"
                  }`}
                  onClick={handleFemaleClick}
                >
                  Female
                </div>
              </div>

              <div>
                <InputWithLabel
                  type="number"
                  placeholder="Age"
                  label="Age"
                  unit="in yrs"
                />
              </div>
              <div>
                <InputWithLabel
                  type="number"
                  placeholder="Height"
                  label="Height"
                  unit="in ft"
                />
              </div>
              <div>
                <InputWithLabel
                  type="number"
                  placeholder="Weight"
                  label="Weight"
                  unit="in kgs"
                />
              </div>
              <div>
                <input
                  className="border-4 border-black rounded-full py-3 w-full hover:bg-[#c27a50] hover:text-white"
                  type="submit"
                  placeholder="Submit"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="bg-white border-4 border-black rounded-xl px-6 py-10 font-semibold text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </>
  );
};

export default Bmi;
