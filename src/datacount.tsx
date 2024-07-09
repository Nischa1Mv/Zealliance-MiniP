import { useState } from "react";

const Datacount = () => {
  const [info, setInfo] = useState(true);

  return (
    <>
      {info ? (
        <Excercisedata setInfo={setInfo} />
      ) : (
        <Editexcercisedata setInfo={setInfo} />
      )}
    </>
  );
};

export default Datacount;

//---------------------------------------------------Excercise Data-------------------------------------------------------------------->

// interface Props {
//   Name: String;
//   w1: String;
//   w2: String;
//   w3: String;
//   r1: String;
//   r2: String;
//   r3: String;
//   prw: string;
//   prr: string;
//  }
// function Excercisedata(props: Props) {
//   const { Name, w1, w2, w3, r1, r2, r3, prw, prr } = props;

function Excercisedata({ setInfo }) {
  const handleClick = () => {
    setInfo((prev) => !prev);
  };
  return (
    <div className=" relative flex border-2 border-[#000000] w-full my-6 py-5 px-4 rounded-xl text-xl font-bold  ">
      <div>Name : ww / rr , ww / rr , ww / rr , PR: ww / rr</div>
      <div className=" absolute right-5">
        {" "}
        <img
          onClick={handleClick}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAcUlEQVR4nO2Q0QmAMAxEXxcpxQ38cf8JdAIpnUQRIkiJhWr6l/cVyHG5HDjOaIKRRmUGNmBqaCKwAkuveRDzA8hAUjRJdodouz+50u1iUKpPWrvfR6KVuVZFrmatuk/ER2qz5G9Hygjzm2RZi+M42HACwpMfy6qL1P4AAAAASUVORK5CYII="
          alt="My Image"
        />
      </div>
    </div>
  );
}

//---------------------------------------------------Excercise Data Info-------------------------------------------------------------------->
function Editexcercisedata({ setInfo }) {
  const handleClick = () => {
    setInfo((prev) => !prev);
  };
  return (
    <div className=" flex flex-col gap-6  w-full mt-6 py-5 px-4 rounded-lg text-xl font-bold  ">
      <div className="flex gap-20 relative">
        <div className="flex jusitfy-center items-center">Exercise Name </div>{" "}
        <div className="flex border border-black w-fit py-2 px-5 gap-4">
          <div> PR </div>
          <div>
            {" "}
            <input className="w-[100px]" type="number" placeholder="weight" />
          </div>
          <div>
            <input className="w-[100px]" type="number" placeholder="reps" />
          </div>
        </div>
        <div className="absolute right-0 flex">
          <div className="border border-black px-3 py-1">Save</div>
          <div>
            <img onClick={handleClick} src="../images/pencil.png" alt="edit" />
          </div>
        </div>
      </div>
      <div className="flex gap-20">
        <Excersiseinput />
        <Excersiseinput />
        <Excersiseinput />
      </div>
    </div>
  );
}

const Excersiseinput = () => {
  var Isreadonly = false;
  return (
    <div className="flex border border-black w-fit py-2 px-4 gap-4">
      <div>
        {" "}
        <div className="flex flex-col w-[100px] gap-2 ">
          {" "}
          <input className="w-full px-3" type="number" placeholder="weight" />
          <div className="">Weight</div>
        </div>
      </div>
      <div>
        <div className="flex flex-col w-[100px] gap-2  ">
          <input
            className="w-full px-3"
            type="number"
            placeholder="reps"
            readOnly={Isreadonly}
          />
          <div className="">Reps</div>
        </div>
      </div>
    </div>
  );
};
