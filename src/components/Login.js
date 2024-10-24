import Header from "./Header";
import { useState } from "react";

const Login = () => {
    const [isSignIn, setSignIn] = useState(true)
    const toggleSignIn = () => {
        setSignIn(!isSignIn);
    }
    return (
        <div >
            <Header />
            <div className="flex justify-center">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg" />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-black">
                <form className="flex flex-col items-center space-y-4 text-white bg-black bg-opacity-80 p-4  rounded shadow-lg">
                    <h1 className="font-bold text-3xl">{isSignIn ? "Sign In" : "Sign up"}</h1>
                    {!isSignIn &&  <input
                        type="Name"
                        placeholder="Full Name"
                        className="p-2 border border-black rounded w-64 bg-gray-500 bg-opacity-70"                    />}
                    <input
                        type="text"
                        placeholder="Email Address"
                        className="p-2 border border-black rounded w-64 bg-gray-500 bg-opacity-70"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="p-2 border border-black rounded w-64 bg-gray-500 bg-opacity-70"
                    />

                    <button
                        type="submit"
                        className="bg-red-500 text-white p-2 rounded w-64"
                    >
                        {isSignIn ? "Sign In" : "Sign up"}
                    </button>
                    <h1 className="font-bold text-lg text-white" onClick={toggleSignIn}>{isSignIn ?  "New To Netflix Sign up":"Alrady user Sign In" }</h1>


                </form>

            </div>
        </div>
    )
}

export default Login;