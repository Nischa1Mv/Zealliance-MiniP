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

  const handleMaleClick = () => {
    setIsMale(true);
    setIsFemale(false);
  };

  const handleFemaleClick = () => {
    setIsMale(false);
    setIsFemale(true);
  };

  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [bmi, setBmi] = useState<string | null>(null);
  const [bmiCategory, setBmiCategory] = useState<string | null>(null);

  const calBmi = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (height && weight) {
      const heightInMeters = parseFloat(height) / 100;
      const calBmi = parseFloat(weight) / (heightInMeters * heightInMeters);
      setBmi(calBmi.toFixed(1));
    } else {
      setBmi(null);
    }

    const intbmi = parseInt(bmi, 10);
    if (intbmi < 18.5) {
      setBmiCategory("underWeight");
    } else if (intbmi >= 18.5 && intbmi < 24.9) {
      setBmiCategory("Normal Weight");
    } else if (intbmi >= 25 && intbmi <= 29.9) {
      setBmiCategory("OverWeight Weight");
    } else {
      setBmiCategory("Obesity");
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
        <div className="bg-white  rounded-xl px-6 py-10 font-semibold text-xl w-[50%]   ">
          BMI = {bmi}
          Nigga you are {bmiCategory}
        </div>
      </div>
    </>
  );
};

export default Bmi;
