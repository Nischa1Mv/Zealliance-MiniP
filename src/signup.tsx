import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  return (
    <div className="">
      <form action="submit">
        <div>
          <input type="email" placeholder="email" />
        </div>
        <div>
          <input type="password" placeholder="password" />
        </div>
        <div>
          <input type="password" placeholder="confirm password" />
        </div>
        <div>
          <input type="checkbox" />{" "}
          <span>i agree to the terms and conditions</span>
        </div>
        <div>
          <button type="submit">Sign up</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
