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

function Excercisedata() {
  return (
    <div className=" relative flex border-4 border-[#f4a261] w-full mt-6 py-5 px-4 rounded-xl text-xl font-bold  ">
      <div>Name : ww / rr , ww / rr , ww / rr , PR: ww / rr</div>
      <div className=" absolute right-5">
        {" "}
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAcUlEQVR4nO2Q0QmAMAxEXxcpxQ38cf8JdAIpnUQRIkiJhWr6l/cVyHG5HDjOaIKRRmUGNmBqaCKwAkuveRDzA8hAUjRJdodouz+50u1iUKpPWrvfR6KVuVZFrmatuk/ER2qz5G9Hygjzm2RZi+M42HACwpMfy6qL1P4AAAAASUVORK5CYII="></img>
      </div>
      {/* {Name} {w1} / {r1} , {w2} / {r2} , {w3} / {r3} , PR- {prw} / {prr}{" "} */}
    </div>
  );
}

export default Excercisedata;
