import Caloriesfood from "./foodlog/caloriesfood";
import Foodbrowse from "./foodlog/foodbrowse";

const Foodlog = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-4 p-4 pt-8 bg-[#f4a261]  ">
      <div className=" ">
        <Caloriesfood />
      </div>
      <div className="">
        <Foodbrowse />
      </div>
    </div>
  );
};

export default Foodlog;
