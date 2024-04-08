import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import Navbox from "../custom-componets/nav_div";
import InputWithLabel from "../custom-componets/inputwithlabel";
import Switchgen from "../custom-componets/switchgen";

function Home() {
  return (
    <>
      <div id="body" className="bg-[#0E131F] h-screen w-screen">
        <div
          id="nav"
          className="flex gap-6 bg-[#f4a261] w-screen h-[80px] border border-b-2 border-cyan"
        >
          <div className=" p-4  ml-4 my-2  text-4xl font-bold">AppName</div>
          <div className="grow"></div>
          <Navbox name="Workout Plans" link="#"></Navbox>
          <Navbox name="Workoutlog" link="#"></Navbox>
          <Navbox name="FoodLog" link="#"></Navbox>
          <div className="h-[50px] w-[50px] my-4 mr-4 border border-White rounded-[50%] ">
            <Avatar>
              <AvatarImage src="https://www.github.com/Nischa1Mv.png"></AvatarImage>
              <AvatarFallback>Profile</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className=" grid grid-cols-2 w-screen h-[680px] text-white">
          <div id="left" className=" p-6 border border-r-1 border-cyan">
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
          <div id="right" className=" p-6 border border-l-1 border-cyan">
            <div className=" w-[100px]">
              <Switchgen name="Gender" />
            </div>
            <div className=" w-[200px]">
              <InputWithLabel placeholder="Age" input="Age" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
