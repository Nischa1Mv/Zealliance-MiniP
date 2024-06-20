import InputWithLabel from "./assets/custom-componets/inputwithlabel";

const Bmi = () => {
  return (
    <>
      <div className=" rounded-xl py-5 px-8 grid grid-cols-2 gap-10 grid-rows-1 text-black  ">
        
        <div className=" flex flex-col gap-5 items-center bg-white px-6 py-10  border-4  border-black rounded-xl">
          <div className="text-6xl font-extrabold  ">Enter Your Stats</div>{" "}
          <form action="" className="">
            <div className="flex flex-col gap-12 text-3xl font-bold mt-8 ">
              {/* <div className="pl-6">
                <Radiogroup
                  value1="male"
                  value2="female"
                  id1="male"
                  id2="female"
                  label1="Male"
                  label2="Female"
                  name="Gender"
                />
              </div> */}
              <div className="grid grid-cols-2 grid-rows-1 text-center   ">
                {" "}
                <div className=" border-2 border-black rounded-lg ">
                  Male
                </div>{" "}
                <div className=" border-2 border-black rounded-lg">Female</div>
              </div>
              <div className="">
                <InputWithLabel
                  type="Number"
                  placeholder="Age"
                  label="Age"
                  unit="in yrs"
                />
              </div>
              <div className="">
                <InputWithLabel
                  type="number"
                  placeholder="height"
                  label="Height "
                  unit="in ft"
                />
              </div>
              <div className="">
                <InputWithLabel
                  type="number"
                  placeholder="weight"
                  label="Weight"
                  unit="in kgs"
                />
              </div>
              <div className="">
                <input
                  className="border-4 border-black rounded-full py-3 w-full h-full "
                  type="submit"
                  placeholder="Submit"
                />
              </div>
            </div>
          </form>
        </div>
        <div className=" bg-white border-4  border-black rounded-xl px-6 py-10 font-semibold text-xl">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </>
  );
};

export default Bmi;
