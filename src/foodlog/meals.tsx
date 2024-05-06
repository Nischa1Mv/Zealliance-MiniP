import Fooddata from "./fooddata";

const Meals = () => {
  return (
    <>
      <div className="flex relative py-3 text-lg font-semibold ">
        <div> Breakfast</div>
        <div className="absolute right-7">Targetcalories/calories</div>
      </div>
      <div className="bg-[#f4a261] min-h-[160px] rounded-xl px-10 py-8  flex flex-col gap-4">
        <Fooddata />{" "}
      </div>
    </>
  );
};

export default Meals;
