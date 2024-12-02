import { Input } from "@nextui-org/input";

export function LoginPage() {
    return (
        <div>
            <div className="px-12 text-start">
            <div>
                Challan System
            </div>
            <div className="font-bold text-2xl mt-8">
                Sign in to your account
            </div>
            <div className="mt-10">
                Email Address
            </div>
            <div>
                <input
                className="mt-1 w-full bg-blue-50 focus:bg-blue-50 select-none outline-none border-none hover:bg-blue-100 rounded-xl px-3 py-2"
                placeholder="hello@example.com" 
                />
            </div>

            <div className="mt-5">
                Password
            </div>
            <div>
                <input
                className="mt-1 w-full bg-blue-50 focus:bg-blue-50 select-none outline-none border-none hover:bg-blue-100 rounded-xl px-3 py-2"
                placeholder="" 
                />
            </div>

            <button
            className="font-bold bg-custom-blue w-full mt-10 py-3 text-white rounded-full">
                Sign In
            </button>

            </div>
        </div>
    )
}