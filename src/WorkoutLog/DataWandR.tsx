import Justinput from "./JustInput";
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

export default DataWandR;
