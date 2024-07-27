import { useState, ChangeEvent } from "react";

interface Props {
  placeholder: string;
  label: string;
  type: string;
  unit: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputWithLabel: React.FC<Props> = ({
  placeholder,
  label,
  type,
  unit,
  value,
  onChange,
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
          value={value}
          onChange={onChange}
          required
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
  const [height, setHeight] = useState("");
  const [fheight, setfHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [fweight, setfWeight] = useState("");
  const [age, setAge] = useState("");
  const [fage, setfAge] = useState("");
  const [bmi, setBmi] = useState("input your data to check BMI");
  const [bmiCategory, setBmiCategory] = useState("idk");
  const [gender, setGender] = useState("");

  const handleMaleClick = () => {
    setIsMale(true);
    setIsFemale(false);
  };

  const handleFemaleClick = () => {
    setIsMale(false);
    setIsFemale(true);
  };

  const [added, setAdded] = useState(false);

  const calBmi = (event: React.FormEvent<HTMLFormElement>) => {
    setAdded(true);
    event.preventDefault();
    if (height && weight) {
      const heightInMeters = parseFloat(height) / 100;
      const calBmi = parseFloat(weight) / (heightInMeters * heightInMeters);
      setBmi(calBmi.toFixed(1));

      const intbmi = parseFloat(calBmi.toFixed(1));

      if (intbmi < 18.5) {
        setBmiCategory("underWeight");
      } else if (intbmi >= 18.5 && intbmi < 24.9) {
        setBmiCategory("Normal Weight");
      } else if (intbmi >= 25 && intbmi <= 29.9) {
        setBmiCategory("OverWeight Weight");
      } else {
        setBmiCategory("Obese");
      }
    } else {
      setBmi(null);
    }
    setfHeight(height);
    setfWeight(weight);
    setfAge(age);
    if (isMale) {
      setGender("Male");
    } else {
      setGender("Female");
    }
  };

  return (
    <>
      <div className="rounded-xl py-5 px-8 flex  text-black mt-8 gap-4">
        <div className="flex flex-col gap-5 items-center bg-white px-6 py-10 border-4 rounded-xl w-[50%]   ">
          <div className="text-6xl font-extrabold">Enter Your Stats</div>
          <form action="Submit" onSubmit={calBmi}>
            <div className="flex flex-col gap-12 text-3xl font-bold mt-8">
              <div className="grid grid-cols-2 grid-rows-1 text-center">
                <div
                  className={`border-2 border-black rounded-lg py-2 cursor-pointer  transition duration-200  ${
                    isMale ? "bg-blue-500 text-white" : "bg-transparent"
                  }`}
                  onClick={handleMaleClick}
                >
                  Male
                </div>
                <div
                  className={`border-2 border-black rounded-lg py-2 cursor-pointer  transition duration-200 ${
                    isFemale ? "bg-red-400 text-white" : "bg-transparent"
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
                  value={age}
                  onChange={(event) => setAge(event.target.value)}
                />
              </div>
              <div>
                <InputWithLabel
                  type="number"
                  placeholder="Height"
                  label="Height"
                  unit="in cm"
                  value={height}
                  onChange={(event) => setHeight(event.target.value)}
                />
              </div>
              <div>
                <InputWithLabel
                  type="number"
                  placeholder="Weight"
                  label="Weight"
                  unit="in kgs"
                  value={weight}
                  onChange={(event) => setWeight(event.target.value)}
                />
              </div>
              <div>
                <button
                  className="border-4 border-black rounded-full py-3 w-full hover:bg-[#c27a50] hover:text-white"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="bg-white  rounded-xl px-8 py-10 font-semibold text-xl w-[50%]   ">
          {!added ? (
            <>
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-[url('https://images2.alphacoders.com/133/1335809.png')] bg-cover bg-center transform scale-x-[-1]"></div>

                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-4xl">
                  <span>Enter The Details to View the Info</span>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex gap-2 flex-col mb-4">
                <div className="flex gap-4">
                  <div>
                    Gender = <span className="font-bold">{gender} </span>
                  </div>
                  <div>
                    Age = {fage}{" "}
                    <span className="text-base font-bold">Yrs</span>
                  </div>

                  <div>
                    Height = {fheight}
                    <span className="text-base font-bold"> Cm</span>
                  </div>
                  <div>
                    Weight = {fweight}
                    <span className="text-base font-bold"> Kgs</span>{" "}
                  </div>
                </div>
                <div>
                  {" "}
                  Body Mass Index ={" "}
                  <span className="bg-yellow-200 px-2 font-bold ">{bmi} </span>
                </div>
                <div>
                  {" "}
                  According to the BMI you are{" "}
                  <span className="bg-yellow-200 font-bold px-2">
                    {bmiCategory}
                  </span>
                </div>
              </div>
              <div className="border-t-2 border-black flex flex-col gap-4">
                <div>Calorie Calculator</div>
                <div>
                  <label>Activity : </label>{" "}
                  <select name="Activity" id="Activity">
                    <option value="sedentary">
                      Sedentary Little or No excersice
                    </option>
                    <option value="lightlyActive">
                      Light Excersice 1-3 times/week
                    </option>
                    <option value="moderatelyActive">
                      Moderate excersice 4-5 times/week
                    </option>
                    <option value="veryActive">
                      intense or dialy Excersice 3-4 times/week
                    </option>
                    <option value="extraActive">
                      intense Excersice 6-7 times/week
                    </option>
                  </select>
                </div>
                <div>Do You Want To Loose Weight or Gain?</div>
                <div className="grid grid-cols-4 border border-black  ">
                  <div className="flex flex-col">
                    <div className="border-b border-r border-black px-2">
                      Maintaince
                    </div>
                    <div className="border-r border-black px-2">data</div>
                  </div>
                  <div>
                    <div className="border-b border-r border-black px-2">
                      Mild weight
                    </div>
                    <div className="border-r border-black px-2">data</div>
                  </div>
                  <div>
                    <div className="border-b border-r border-black px-2">
                      Weight
                    </div>
                    <div className="border-r border-black px-2">data</div>
                  </div>
                  <div>
                    {" "}
                    <div className="border-b border-black px-2">
                      Fast Weight
                    </div>
                    <div className="px-2">data</div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Bmi;
