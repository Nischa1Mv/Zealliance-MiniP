import { useState, ChangeEvent, useEffect } from "react";

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

enum ActivityLevel {
  Sedentary = "sedentary",
  LightlyActive = "lightlyActive",
  ModeratelyActive = "moderatelyActive",
  VeryActive = "veryActive",
  ExtraActive = "extraActive",
}

interface UserParams {
  age: number;
  gender: "male" | "female";
  weight: number; // in kg
  height: number; // in cm
  activityLevel: ActivityLevel;
}

interface CalorieNeeds {
  maintenanceCalories: number;
  mildWeightLossCalories: number;
  mildWeightGainCalories: number;
}

function calculateCalories({
  age,
  gender,
  weight,
  height,
  activityLevel,
}: UserParams): CalorieNeeds {
  let BMR: number;
  if (gender === "male") {
    BMR = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    BMR = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  const activityFactors: Record<ActivityLevel, number> = {
    sedentary: 1.2,
    lightlyActive: 1.375,
    moderatelyActive: 1.55,
    veryActive: 1.725,
    extraActive: 1.9,
  };

  const factor = activityFactors[activityLevel];
  const TDEE = BMR * factor;

  const mildWeightLoss = Math.round(TDEE - TDEE * 0.15);
  const mildWeightGain = Math.round(TDEE + TDEE * 0.15);

  return {
    maintenanceCalories: Math.round(TDEE),
    mildWeightLossCalories: mildWeightLoss,
    mildWeightGainCalories: mildWeightGain,
  };
}

//Main
const Bmi = () => {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [bmi, setBmi] = useState<string | null>("input your data to check BMI");
  const [bmiCategory, setBmiCategory] = useState("Unknown");
  const [activity, setActivity] = useState<ActivityLevel>(
    ActivityLevel.Sedentary
  );
  const [added, setAdded] = useState(false);
  const [calorieNeeds, setCalorieNeeds] = useState<CalorieNeeds | null>(null);

  useEffect(() => {
    if (height && weight && age && gender) {
      const calorieNeeds = calculateCalories({
        age: parseFloat(age),
        gender,
        weight: parseFloat(weight),
        height: parseFloat(height),
        activityLevel: activity,
      });
      setCalorieNeeds(calorieNeeds);
      // console.log(calorieNeeds);
    }
  }, [activity, height, weight, age, gender]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const activityLevel = event.target.value as ActivityLevel;
    setActivity(activityLevel);
  };

  const handleGenderClick = (selectedGender: "male" | "female") => {
    setGender(selectedGender);
  };

  const calBmi = (event: React.FormEvent<HTMLFormElement>) => {
    setAdded(true);
    event.preventDefault();
    if (height && weight && age) {
      const heightInMeters = parseFloat(height) / 100;
      const calBmi = parseFloat(weight) / (heightInMeters * heightInMeters);
      setBmi(calBmi.toFixed(1));

      const intbmi = parseFloat(calBmi.toFixed(1));
      setBmiCategory(
        intbmi < 18.5
          ? "Underweight"
          : intbmi < 24.9
          ? "Normal Weight"
          : intbmi < 29.9
          ? "Overweight"
          : "Obese"
      );
    }
  };

  // Effect to recalculate calories whenever relevant state changes

  return (
    <>
      <div className="flex justify-center items-center   ">
        <div className="rounded-xl py-2 px-2 md:px-8 md:flex-row flex flex-col text-black md:gap-4 gap-2 w-full overflow-y-auto    ">
          {/* left */}
          <div className="flex flex-col items-center  px-2 py-2 md:px-6 md:py-10 md:w-[50%] w-full  bg-[#dadee2]   ">
            <div className="text-6xl font-extrabold">Enter Your Stats</div>
            <form action="Submit" onSubmit={calBmi}>
              <div className="flex flex-col gap-7  text-3xl font-bold mt-8">
                <div className="grid grid-cols-2 grid-rows-1 text-center">
                  <div
                    className={`border-2 border-black rounded-lg py-2 cursor-pointer  transition duration-200  ${
                      gender == "male"
                        ? "bg-blue-500 text-white"
                        : "bg-transparent"
                    }`}
                    onClick={() => handleGenderClick("male")}
                  >
                    Male
                  </div>
                  <div
                    className={`border-2 border-black rounded-lg py-2 cursor-pointer  transition duration-200 ${
                      gender == "female"
                        ? "bg-red-400 text-white"
                        : "bg-transparent"
                    }`}
                    onClick={() => handleGenderClick("female")}
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

          {/* right */}
          <div className="md:bg-[#dadee2] bg-transparent  md:text-black text-white border-2 border-none md:border  rounded-xl md:px-8 md:py-10 font-semibold px-2 py-2 text-xl md:w-[50%]   ">
            {!added ? (
              <>
                <div className="relative w-full h-full hidden md:block">
                  <div className="absolute inset-0 bg-[url('https://images2.alphacoders.com/133/1335809.png')] bg-cover bg-center transform scale-x-[-1]"></div>

                  <div className=" hidden absolute inset-0 md:flex justify-center items-center bg-black bg-opacity-50 text-white  text-4xl">
                    <span>Enter The Details to View the Info</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex gap-2 flex-col mb-4 ">
                  <div className="flex gap-1 md:flex-row md:gap-4  flex-col">
                    <div className="text-nowrap">
                      Gender = <span className="font-bold">{gender} </span>
                    </div>
                    <div className="text-nowrap">
                      Age = {age}{" "}
                      <span className="text-base font-bold">Yrs</span>
                    </div>
                    <div className="text-nowrap">
                      Height = {height}
                      <span className="text-base font-bold"> Cm</span>
                    </div>
                    <div className="text-nowrap">
                      Weight = {weight}
                      <span className="text-base font-bold"> Kgs</span>{" "}
                    </div>
                  </div>
                  <div>
                    {" "}
                    Body Mass Index ={" "}
                    <span className="bg-yellow-200 px-2 font-bold  text-black ">
                      {bmi}{" "}
                    </span>
                  </div>
                  <div>
                    {" "}
                    According to the BMI you are{" "}
                    <span className="bg-yellow-200 font-bold px-2  text-black ">
                      {bmiCategory}
                    </span>
                  </div>
                </div>
                <div className="border-t-2 md:border-black flex flex-col gap-4">
                  <div>Calorie Calculator</div>
                  <div>
                    <label>Activity : </label>{" "}
                    <select
                      className="text-white md:text-black  bg-transparent  md:w-fit border-2 md:border-black w-full bg-black "
                      name="Activity"
                      id="Activity"
                      value={activity}
                      onChange={handleSelectChange}
                      required
                    >
                      <option value="sedentary" className="bg-transparent">
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
                  <div className="grid grid-cols-2 md:grid-rows-1 grid-rows-2 md:grid-cols-3   border-white ">
                    <div className="flex flex-col ">
                      <div className="border  px-2 md:border-black">
                        Maintaince
                      </div>
                      <div className="border border-t-0 border-r-0  px-2 md:border-black font-mono">
                        {calorieNeeds.maintenanceCalories}
                        <span className="ml-1">calories</span>
                      </div>
                    </div>
                    <div className="text-nowrap">
                      <div className="border border-l-0 px-2 md:border-black  ">
                        Mild weight loss
                      </div>
                      <div className=" border border-t-0  px-2 md:border-black font-mono">
                        {calorieNeeds.mildWeightLossCalories}
                        <span className="ml-1">calories</span>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 text-nowrap">
                      <div className="border md:border-l-0 px-2 md:border-black ">
                        Mild Weight Gain
                      </div>
                      <div className="border md:border-l-0 md:border-t-0 px-2 md:border-black font-mono">
                        {calorieNeeds.mildWeightGainCalories}
                        <span className="ml-1">calories</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Bmi;
