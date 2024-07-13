const Foodbrowse = () => {
  var setisx = false;
  return (
    <div
      id="right"
      className="border-[#464646] border-4 px-10 py-6 flex flex-col gap-6 rounded-[8px] w-[48%] h-full"
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
    <div
      draggable="true"
      className="px-4  rounded-[6px] font-bold text-lg py-2 flex relative border-2  "
    >
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

const Caloriesfood = () => {
  const tcal = 5000;
  const setisx = false;
  return (
    <div
      id="left"
      className="rounded-[8px] py-2 px-4 border-[#464646] border-4 w-[48%] "
    >
      <div className="flex relative py-3 text-lg font-semibold  ">
        <div> Food</div>
        <div className="grow"></div>
        <div className=" flex  border justify-center items-center">
          <span className=""> {tcal}/</span>{" "}
          <Justinput type="Number" placeholder="000" />
        </div>
      </div>
      <div className=" min-h-[200px] pt-4">
        <div className="rounded-xl px-8  flex flex-col gap-4 my-2 ">
          <Fooddata name="Eggs" isx={setisx} />{" "}
        </div>
      </div>
    </div>
  );
};

const Foodlog = () => {
  return (
    <div className="flex gap-14 my-10 min-h-[82vh]">
      <Caloriesfood />
      <Foodbrowse />
    </div>
  );
};

export default Foodlog;

interface Props {
  type: string;
  placeholder: string;
}
const Justinput = ({ type, placeholder }: Props) => {
  return (
    <>
      <input
        className=" py-1 w-[50%] text-lg font-medium px-2 bg-transparent border border-amber-100 text-white placeholder:font-medium placeholder:text-lg focus:outline-none  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};
