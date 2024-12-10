import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginState, setLoginState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <form className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <h3 className="text-2xl font-semibold">
          {loginState === "Sign Up" ? "Create Account" : "Login"}
        </h3>
        <p>
          Please {loginState === "Sign Up" ? "sign up" : "log in"} to book
          appointment
        </p>
        {loginState === "Sign Up" && (
          <div className="w-full flex flex-col">
            <label htmlFor="">Full name</label>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}

        <div className="w-full flex flex-col">
          <label htmlFor="">Email</label>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className=" w-full flex flex-col">
          <label htmlFor="">Password</label>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="w-full bg-primary text-white py-2 rounded-md text-base">
          {loginState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        {loginState === "Sign Up" ? (
          <p>
            Already have an account?
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => setLoginState("Login")}>
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create an new Account?
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => setLoginState("Sign Up")}>
              Register Here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};
export default Login;
