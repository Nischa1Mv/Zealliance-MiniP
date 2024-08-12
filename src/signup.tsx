import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useState } from "react";
import { set } from "firebase/database";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const signupAuth = async (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      alert("passwords do not match");
      setPassword("");
      setCpassword("");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
  };
  return (
    <>
      {" "}
      <div className="w-full h-screen bg-[rgb(0,0,0,0.7)] ">
        <form
          onSubmit={signupAuth}
          className="flex flex-col justify-center items-center h-full  "
        >
          <div className="font-bold text-4xl mb-5">Sign Up</div>
          <div className="flex flex-col gap-4 w-[20%]  text-black">
            <div className="">
              <input
                required
                className="focus:outline-none rounded-lg px-1 w-full"
                type="email"
                placeholder="email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div>
              <input
                required
                className="focus:outline-none  px-1 rounded-lg w-full"
                type="password"
                placeholder="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div>
              <input
                required
                className="focus:outline-none rounded-lg px-1 w-full"
                type="password"
                placeholder="confirm password"
                onChange={(event) => setCpassword(event.target.value)}
              />
            </div>
            <div className="text-white">
              <input className="focus:outline-none" type="checkbox" />{" "}
              <span className="text-orange-200">
                i agree to the terms and conditions
              </span>
            </div>
            <div className="    text-white px-2 py-1 justify-center flex  w-full">
              <button
                type="submit"
                className="w-[50%] border-2 rounded-xl border-white"
              >
                Sign up
              </button>
            </div>{" "}
            <div className="mt-4 border-t-2 border-dotted pt-2 flex justify-center items-center ">
              <span className="text-white mr-1">
                Already Have an Account ?{" "}
              </span>{" "}
              <span className="text-yellow-200">
                <Link to="/login">Login</Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
