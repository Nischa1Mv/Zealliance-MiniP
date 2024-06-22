import { useState } from "react";

const Paragraphguy = () => {
  return (
    <div
      id="paragraph"
      className="flex flex-col  gap-5 text-pretty  h-[35vh] mt-6"
    >
      <div className="font-bold text-7xl ">Calisthenics</div>

      <div className="text-3xl mt-4 ">
        The term calisthenics comes from the Greek words ‘Kalos’ meaning beauty
        and ‘Stenos’ which translates as strength.{" "}
      </div>
      <div className="mb-4 text-3xl">
        {" "}
        Calisthenics is a form of strength training that utilizes an
        individual's body weight as resistance to perform multi-joint, compound
        movements with little or no equipment
      </div>
    </div>
  );
};

function Workoutnames({ Title, NameArr }) {
  const [isInfo, setIsInfo] = useState(true);

  return isInfo ? (
    <>
      <div
        className="px-4 py-3  border-b-1 border-t-0 border-l-0  border border-r-1  flex w-[15%] h-fit cursor-pointer justify-center items-center "
        onClick={() => setIsInfo(false)}
      >
        <div className="font-semibold text-xl flex  whitespace-nowrap  ">
          {Title}
        </div>

        {/* <div className="cursor-pointer" onClick={() => setIsInfo(false)}>
          {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#e8eaed"
        >
          <path d="M480-360 280-560h400L480-360Z" />
        </svg> */}
        {/* </div> */}
      </div>
    </>
  ) : (
    // Should NOT Replace the div but should make te text excersise details appear if set info true then excersiedata appear
    <Workoutnamesinfo setIsInfo={setIsInfo} NameArr={NameArr} Title={Title} />
  );
}

const Workoutnamesinfo = ({ setIsInfo, NameArr, Title }) => {
  return (
    <div className="">
      <div className="px-5 py-3 flex flex-col gap-2 h-fit rounded-[8px]  mb-2 mx-6">
        <div className="font-semibold text-xl my-2  ">{Title} </div>

        <div className="flex">
          {NameArr.map((ename, index) => (
            <Excersicename key={index} Name={ename} />
          ))}

          <div className=" mt-4 w-full  ">
            <svg
              className=" "
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
      </div>
    </div>
  );
};
interface ExcersicenameProps {
  Name: string;
}

const Excersicename: React.FC<ExcersicenameProps> = ({ Name }) => {
  return (
    <div className="">
      <div className=" boder-2 border-r-0  border-[#464646]">
        <div className="px-8 py-2 flex   font-medium text-lg ">
          <div className="flex gap-4">
            <div className="whitespace-nowrap">{Name}</div>
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
      </div>
      <div className="border-2 border-t-0 h-[20vh] min-w-[15vw] px-8 py-2 border-white">
        {/* change dis data when clicked  */}
        <div className="flex flex-cols gap-4">
          <span>Step-1:</span>
          <span>Step-2</span>
          <span>Step-3</span>
        </div>
      </div>
    </div>
  );
};
import { workoutinfoArr } from "./workoutinfo";

const Workoutinfo = ({ IsInfo }) => {
  return (
    <>
      <div>
        <Paragraphguy />
      </div>
      <div className="border-2 border-white flex flex-col h-[49vh]">
        <div className=" items-center   rounded-xl flex  overflow-auto max-h-full">
          {workoutinfoArr.map((workout, Index) => (
            <Workoutnames
              key={Index}
              Title={workout.Title}
              NameArr={workout.NameArr}
            />
          ))}
        </div>
        <div className="h-[30vh] px-10 py-10 flex flex-col">
          {/* display the Excersicename here when selected ,display them in colums and play icon plays when clicked */}
        </div>
      </div>
    </>
  );
};

export default Workoutinfo;
