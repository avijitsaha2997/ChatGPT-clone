/** @format */
"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className='bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center'>
      <Image
        className='mb-10'
        src='https://assets.stickpng.com/images/63c52af590250dd34bd6a9ab.png'
        width={150}
        height={150}
        alt='logo'
      />
      <button
        className='text-black font-bold text-3xl animate-pulse'
        onClick={() => signIn("google")}>
        Sign In to use ChatGPT
      </button>
    </div>
  );
}

export default Login;
