import { useState } from "react";

interface Props {
  placeholder: string;
  label: string;
  type: string;
  unit: string;
}

const InputWithLabel: React.FC<Props> = ({
  placeholder,
  label,
  type,
  unit,
}) => {
  return (
    <div className="flex w-full max-w-sm  gap-5  ">
      <label
        className="w-[40%] flex justify-center items-center"
        htmlFor={label}
      >
        {label}
      </label>
      <div className="  relative w-full border-black border-2 ">
        <input
          className="  py-1 px-4 rounded-lg w-full placeholder:text-lg text-lg placeholder:font-semibold focus:outline-none  bg-background     [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          type={type}
          placeholder={placeholder}
        />
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-xl font-semibold text-gray-500">
          {" "}
          {unit}{" "}
        </span>
      </div>
    </div>
  );
};
//Main
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
      <div className="rounded-xl py-5 px-8 flex  text-black mt-8 gap-4">
        <div className="flex flex-col gap-5 items-center bg-white px-6 py-10 border-4 rounded-xl w-[50%]   ">
          <div className="text-6xl font-extrabold">Enter Your Stats</div>
          <form action="Submit">
            <div className="flex flex-col gap-12 text-3xl font-bold mt-8">
              <div className="grid grid-cols-2 grid-rows-1 text-center">
                <div
                  className={`border-2 border-black rounded-lg py-2 cursor-pointer  transition duration-200  ${
                    isMale ? "bg-blue-400 text-white" : "bg-transparent"
                  }`}
                  onClick={handleMaleClick}
                >
                  Male
                </div>
                <div
                  className={`border-2 border-black rounded-lg py-2 cursor-pointer  transition duration-200 ${
                    isFemale ? "bg-red-200 text-white" : "bg-transparent"
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
        <div className="bg-white  rounded-xl px-6 py-10 font-semibold text-xl w-[50%]  ">
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
