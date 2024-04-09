import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import Navbox from "../custom-componets/nav_div";
import InputWithLabel from "../custom-componets/inputwithlabel";
import Submit from "../custom-componets/submit";
import Radiogroup from "../custom-componets/radiogroup";

function Home() {
  return (
    <>
      <div id="body" className=" min-h-screen w-screen flex flex-col">
        <div
          id="nav"
          className="flex gap-6 bg-[#f4a261] w-screen h-[80px] border border-b-4 border-[#0E131F]"
        >
          <div className=" p-4  ml-4 my-2 text-4xl font-bold">AppName</div>
          <div className="grow"></div>
          <Navbox name="Workout Plans" link="#"></Navbox>
          <Navbox name="Workoutlog" link="#"></Navbox>
          <Navbox name="FoodLog" link="#"></Navbox>
          <div className="">
            <Avatar>
              <AvatarImage
                className="h-[50px] w-[50px] my-4 mr-4 outline outline-2 rounded-[50%]"
                src="https://www.github.com/Nischa1Mv.png"
              ></AvatarImage>
              {/* <AvatarFallback>Profile</AvatarFallback> */}
            </Avatar>
          </div>
        </div>
        <div className=" grow  flex flex-col-reverse w-screen text-white sm:flex-row">
          <div className="border-t-2 text-white  sm:hidden  block">
            <div className="mt-4 pl-2"> About us</div>
            <div className="pl-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <div
            id="left"
            className=" p-6 border border-r-2 border-[#0E131F] grow"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <div
            id="right"
            className=" font-semibold pt-3 grow 
             border border-l-2 border-[#0E131F]"
          >
            <form action="" className="">
              <div className=" grid  grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="pl-6 ">
                  <InputWithLabel
                    type="Number"
                    placeholder="Age"
                    label="Age"
                    unit=""
                  />
                </div>
                <div className="pl-6">
                  <InputWithLabel
                    type="number"
                    placeholder="height"
                    label="Height "
                    unit="in ft"
                  />
                </div>
                <div className="pl-6">
                  <InputWithLabel
                    type="number"
                    placeholder="weight"
                    label="Weight"
                    unit="in kgs"
                  />
                </div>
                <div className="pl-6">
                  <Radiogroup
                    value1="male"
                    value2="female"
                    id1="male"
                    id2="female"
                    label1="Male"
                    label2="Female"
                    name="Gender"
                  />
                </div>
              </div>
              <div className="px-6 my-4">
                <Submit type="submit" placeholder="Submit" />
              </div>
            </form>
            <div className="border-t-2  hidden sm:block">
              <div className="mt-4 pl-2"> About us</div>
              <div className="pl-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
