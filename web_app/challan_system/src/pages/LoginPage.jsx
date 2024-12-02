import { Input } from "@nextui-org/input";
import { useState } from "react";
import { EyeFilledIcon } from "../components/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../components/EyeSlashFilledIcon";
import { Button } from "@nextui-org/react";

export function LoginPage() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="h-screen w-screen ">
        
    <div className="md:grid md:grid-cols-2 h-screen">
      <div className="h-full text-start pb-10 pr-36 pl-24">
        <div className="mt-8 flex gap-2 font-extrabold" >
          <img width="24" height="24" src="https://img.icons8.com/fluency-systems-filled/24/ledger.png" alt="ledger"/>
          Challan System
        </div>
        <div className="text-4xl mt-6" >Get Started Now</div>
        <div className="font-semibold text-xl mt-2">Sign in to your account</div>

        <div className="mt-10">Email Address</div>

        <div className="mt-3">
          <Input placeholder="hello@example.com" variant="bordered"></Input>
        </div>

        <div className="mt-8">Password</div>
        <div className="mt-3">
          <Input
            variant="bordered"
            placeholder="Enter your password"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
                aria-label="toggle password visibility"
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
          />
        </div>
        <Button
          color="primary"
          className="mt-10 w-full rounded-full text-md font-semibold"
        >
          Sign In
        </Button>
      
      </div>
      <div className="max-h-screen bg-custom-blue my-3 mr-3 rounded-2xl">
            <div className="pt-16 px-16">
            <div className="text-3xl text-slate-50 pr-20">
                The simplest way to manage your workplace bills
            </div>
            <div className="text-slate-200 mt-2">
                Enter your credtential to get into your account
            </div>
            </div>
            <div className="mx-16 mt-8 rounded-2xl  bg-red-500">
            <img className="rounded-2xl" src="/public/dashboard.png"/>
            </div>
      </div>
    </div>
    
    </div>
  );
}
