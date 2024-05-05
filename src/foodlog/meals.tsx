import Fooddata from "./fooddata";

const Meals = () => {
  return (
    <>
      <div className="flex relative py-3 text-lg font-semibold ">
        <div> Breakfast</div>
        <div className="absolute right-7">Targetcalories/calories</div>
      </div>
      <div className="bg-[#f4a261] min-h-[100px] rounded-xl px-4 py-8  flex flex-col gap-4">
        {" "}
        <Fooddata />
        <Fooddata />
        <Fooddata />
        <Fooddata />
        <Fooddata />
      </div>
    </>
  );
};

export default Meals;
