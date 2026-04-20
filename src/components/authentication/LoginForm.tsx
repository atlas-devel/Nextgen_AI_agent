import React from "react";
import type { JSX } from "react";

function LoginForm(): JSX.Element {
  return (
    <div className="h-screen flex items-center justify-center text-white ">
      <form className="border border-white/15 rounded-md p-4 space-y-4 bg-[#171717]">
        <div>
          <h1 className="font-semibold">Login to your account</h1>
          <p className="text-gray-400 mt-4">
            Enter your email below to login to your account
          </p>
        </div>
        <div>
          <label htmlFor="email"></label>
          <input name="email" placeholder="example@gmail.com" type="email" />
        </div>
        <div>
          <label htmlFor="name"></label>
          <input name="password" type="password" />
        </div>

        <div>
          <button>Login</button>
          <p>Don't have an account? Sign up</p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
