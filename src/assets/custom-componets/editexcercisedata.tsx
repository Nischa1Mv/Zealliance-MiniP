import Excersiseinput from "./excersiseinput";
function Editexcercisedata() {
  return (
    <div className=" flex flex-col gap-6 bg-white w-full mt-6 py-5 px-4 rounded-lg text-xl font-bold  ">
      <div className="flex gap-20 relative">
        <div className="flex jusitfy-center items-center">Exercise Name </div>{" "}
        <div className="flex bg-gray-200 border border-black w-fit py-2 px-5 gap-4">
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
            <img src="../images/pencil.png" alt="edit" />
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

export default Editexcercisedata;
