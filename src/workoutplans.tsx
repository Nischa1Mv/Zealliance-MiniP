import { useState } from "react";
const Paragraphguy = () => {
  return (
    <div
      id="paragraph"
      className="flex flex-col  gap-5 text-pretty  border-black mt-6"
    >
      <div className="font-bold text-5xl">Calisthenics</div>
      <div>
        The term calisthenics comes from the Greek words ‘Kalos’ meaning beauty
        and ‘Stenos’ which translates as strength.{" "}
      </div>
      <div className="mb-4">
        {" "}
        Calisthenics is a form of strength training that utilizes an
        individual's body weight as resistance to perform multi-joint, compound
        movements with little or no equipment
      </div>
    </div>
  );
};

function Workoutnames() {
  const [isInfo, setIsInfo] = useState(true);

  return isInfo ? (
    <div className="px-4 py-3 border-2 flex xl:w-[20%] relative rounded-[8px] mb-3 w-fit ml-6">
      <div className="font-semibold text-xl">workout name Push</div>

      <div
        className="absolute right-4 bottom-3 cursor-pointer"
        onClick={() => setIsInfo(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#e8eaed"
        >
          <path d="M480-360 280-560h400L480-360Z" />
        </svg>
      </div>
    </div>
  ) : (
    <Workoutnamesinfo setIsInfo={setIsInfo} />
  );
}

const Workoutnamesinfo = ({ setIsInfo }) => {
  return (
    <div className="px-4 py-3 border-2 flex flex-col w-[90%] relative rounded-[8px] mb-2 mx-6">
      <div className="font-semibold text-xl my-2 ">Push </div>
      <Excersicename />
      <Excersicename />
      <Excersicename />
      <Excersicename />
      <Excersicename />

      <div className="relative mt-4 w-full  ">
        <svg
          className=" absolute right-0 bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
          fill="#e8eaed"
          onClick={() => setIsInfo(true)}
        >
          <path d="m280-400 200-200 200 200H280Z" />
        </svg>
      </div>
    </div>
  );
};

const Excersicename = () => {
  return (
    <div className="px-8 py-2  font-medium text-lg ">
      <div className="flex gap-4 items-center">
        1. Push-Ups
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#e8eaed"
          >
            <path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const Workoutinfo = () => {
  return (
    <>
      <div>
        <Paragraphguy />
      </div>
      <div className="mt-5 gap-4 py-6 overflow-y-auto h-[62%] border flex flex-col  border-white">
        <Workoutnames />
        <Workoutnames />
        <Workoutnames />
        <Workoutnames />
        <Workoutnames />
        <Workoutnames />
        <Workoutnames />
        <Workoutnames />
      </div>
    </>
  );
};

export default Workoutinfo;
