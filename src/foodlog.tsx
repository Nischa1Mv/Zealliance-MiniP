const Foodbrowse = () => {
  var setisx = false;
  return (
    <div
      id="right"
      className="border-[#464646] border-4 px-10 py-6 flex flex-col gap-6 rounded-[8px]"
    >
      <div className="flex rounded-[8px]  px-2 py-1 border-[#464646] border-2 ">
        <input
          className=" text-white bg-transparent focus:outline-none px-2 w-full py-2 "
          type="text"
          placeholder="food..."
        />
        <div className=" flex justify-center items-center">
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#cfcfcf"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
        </div>
      </div>
      <div className=" h-full flex flex-col gap-6 rounded-xl">
        <Fooddata name="Oats" isx={setisx} />
        <Fooddata name="Rice" isx={setisx} />
        <Fooddata name="Milk" isx={setisx} />
        <Fooddata name="Chicken" isx={setisx} />
        <Fooddata name="Eggs" isx={setisx} />
      </div>
    </div>
  );
};
interface FProps {
  isx: boolean;
  name: string;
}

const Fooddata = ({ isx, name }: FProps) => {
  return (
    <div className="px-4  rounded-[6px] font-bold text-lg py-2 flex relative border-2 boder-[#cfcfcf]">
      <div>{name}</div>
      {isx && (
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
      )}
    </div>
  );
};

interface MProps {
  meal: string;
  cal: string;
  tcal: string;
  namex: string;
}
const Meals = ({ meal, cal, tcal, namex }: MProps) => {
  const setisx = true;
  return (
    <>
      <div className="flex relative py-3 text-lg font-semibold ">
        <div> {meal}</div>
        <div className="absolute right-7">
          {tcal}/{cal}
        </div>
      </div>
      <div className="border min-h-[200px] pt-4">
        <div className="rounded-xl px-8  flex flex-col gap-4 my-2 ">
          <Fooddata name={namex} isx={setisx} />{" "}
        </div>
      </div>
    </>
  );
};

const Caloriesfood = () => {
  return (
    <div
      id="left"
      className="rounded-[8px] py-2 px-4 border-[#464646] border-4"
    >
      <Meals namex="Oats" meal="Breakfast" cal="450" tcal="500" />
      <Meals namex="Rice" meal="Lunch" cal="450" tcal="500" />
      <Meals namex="Milk" meal="Dinner" cal="450" tcal="500" />
      <Meals namex="Eggs" meal="Snacks" cal="450" tcal="500" />
    </div>
  );
};

const Foodlog = () => {
  return (
    <div className="flex gap-14 my-10">
      <div className="w-[48%] h-full">
        <Caloriesfood />
      </div>
      <div className="w-[48%] h-full">
        <Foodbrowse />
      </div>
    </div>
  );
};

export default Foodlog;
