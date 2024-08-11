import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
function Login() {
  // const auth = getAuth();
  // signInWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     const user = userCredential.user;
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //   });
  return (
    <>
      {" "}
      <div className="w-full h-screen bg-[rgb(0,0,0,0.7)] ">
        <form
          action=""
          className="flex flex-col justify-center items-center h-full  "
        >
          <div className="font-bold text-4xl mb-5">Login</div>
          <div className="flex flex-col gap-4 w-[20%]  text-black">
            <div className="">
              <input
                className="focus:outline-none rounded-lg px-1 w-full"
                type="email"
                placeholder="email"
              />
            </div>
            <div>
              <input
                className="focus:outline-none  px-1 rounded-lg w-full"
                type="password"
                placeholder="password"
              />
            </div>
            <div className=" text-white px-2 py-1 justify-center flex  w-full">
              <button className="w-[50%] border-2 rounded-xl border-white">
                Login
              </button>
            </div>
            <div className="mt-4 border-dotted border-t-2 flex justify-center pt-2">
              <span className="text-white mr-1">Dont Have an Account ? </span>{" "}
              <span className="text-yellow-200">
                <Link to="/signup"> Register</Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
