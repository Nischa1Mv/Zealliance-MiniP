import { useState } from "react";

const Datacount = () => {
  return (
    <>
      <Excercisedata />
      <Excercisedata />
      <Excercisedata />
      <Excercisedata />
      <Excercisedata />
    </>
  );
};

export default Datacount;

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

function Excercisedata({}) {
  var Isreadonly = false;
  const [info, setInfo] = useState(true);
  const handleClick = () => {
    setInfo((prev) => !prev);
  };
  return (
    <>
      {/*---------------------------------------------------Excercise Data-------------------------------------------------------------------->*/}
      <div
        className={`relative flex border-2 w-full my-6 py-5 px-4 rounded-xl text-xl font-bold gap-2 ${
          info ? "  border-[#464646]" : "border-amber-300"
        }`}
      >
        {info ? (
          <>
            {" "}
            <div>Name : ww / rr , ww / rr , ww / rr , PR: ww / rr</div>
            <div className="absolute right-5">
              <svg
                onClick={handleClick}
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
              </svg>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="flex gap-20  ">
              <div className="flex jusitfy-center items-center">
                Exercise Name{" "}
              </div>{" "}
              <div className="flex  w-fit py-2 px-5 gap-4">
                <div> PR </div>
                <div className="w-[100px]">
                  <Justinput
                    type="number"
                    placeholder="Weight"
                    readonly={Isreadonly}
                  />
                </div>
                <div className="w-[100px]">
                  <Justinput
                    type="number"
                    placeholder="Reps"
                    readonly={Isreadonly}
                  />
                </div>
              </div>
              <div className="absolute right-16 flex">
                <div className=" px-3 py-1 bg-blue-500">Save</div>
                <div>
                  <svg
                    className="absolute bottom-0 "
                    onClick={handleClick}
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    viewBox="0 -960 960 960"
                    width="30spx"
                    fill="#e8eaed"
                  >
                    <path d="m280-400 200-200 200 200H280Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex gap-6 ">
              <div className="flex ">
                <h1 className="mt-3">Set-1</h1>
                <DataWandR />
              </div>
              <div className="flex ">
                <h1 className="mt-3">Set-2</h1>
                <DataWandR />
              </div>{" "}
              <div className="flex ">
                <h1 className="mt-3">Set-3</h1>
                <DataWandR />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

const DataWandR = () => {
  var Isreadonly = false;
  return (
    <div className="flex w-fit py-2 px-4 gap-4 ">
      <div>
        {" "}
        <div className="flex flex-col w-[100px] gap-2 ">
          {" "}
          <Justinput type="number" placeholder="Weight" readonly={Isreadonly} />
          <div className="">Weight</div>
        </div>
      </div>
      <div>
        <div className="flex flex-col w-[100px] gap-2  ">
          <Justinput type="number" placeholder="Reps" readonly={Isreadonly} />
          <div className="">Reps</div>
        </div>
      </div>
    </div>
  );
};

interface Props {
  type: string;
  placeholder: string;
  readonly: boolean;
}
const Justinput = ({ type, placeholder, readonly }: Props) => {
  return (
    <>
      <input
        className="w-full py-1 text-lg font-medium px-4 placeholder:font-medium placeholder:text-lg focus:outline-none text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        type={type}
        placeholder={placeholder}
        readOnly={readonly}
      />
    </>
  );
};
