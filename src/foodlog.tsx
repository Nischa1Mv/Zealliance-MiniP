const Foodbrowse = () => {
  return (
    <div className="border-black border-4  bg-white px-10 py-6 flex flex-col gap-6 rounded-[8px]">
      <div className="flex rounded-[8px]  px-2 py-1 border-black border-4 ">
        <input
          className="  focus:outline-none px-2 w-full py-2"
          type="text"
          placeholder="food..."
        />
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
          </svg>
        </div>
      </div>
      <div className="border-4 border-black h-[740px] px-14 py-10 flex flex-col gap-4 rounded-xl">
        <Fooddata /> <Fooddata /> <Fooddata /> <Fooddata /> <Fooddata />
      </div>
    </div>
  );
};

const Fooddata = () => {
  return (
    <div className="px-4  outline outline-[3px] bg-white rounded-[6px] font-bold text-lg py-2 flex relative">
      <div>Oats</div>
      <div className="absolute right-5 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
        </svg>
      </div>
    </div>
  );
};

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

const Caloriesfood = () => {
  return (
    <div className=" bg-white rounded-[8px] py-2 px-4 border-black border-4 ">
      <Meals />
      <Meals />
      <Meals />
      <Meals />
    </div>
  );
};

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
