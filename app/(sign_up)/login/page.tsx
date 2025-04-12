"use client"

export default function LogIn() {

    return (
        <div className="w-full h-screen scroll-auto flex flex-col justify-center items-center">
            <div className="w-1/3 h-fit flex flex-col justify-center items-center gap-4 border-1 border-indigo-400 rounded-lg py-7">
                <p className="text-3xl font-semibold">Log In</p>

                <form action="POST" className="w-4/5 flex flex-col justify-center items-start gap-2">

                    <div className="w-full flex flex-col justify-start items-start gap-1">
                        <label className="tracking-wide text-lg">E-Mail</label>

                        <input type="email" className="border-2 border-zinc-500 rounded-lg w-full text-white outline-none px-2 py-1"/>
                    </div>

                    <div className="w-full flex flex-col justify-start items-start gap-1">
                        <label className="tracking-wide text-lg">Password</label>

                        <input type="password" className="border-2 border-zinc-500 rounded-lg w-full text-white outline-none px-2 py-1"/>
                    </div>

                    <div className="w-full h-fit flex justify-center items-center pt-5 gap-3">
                        <button className="px-6 py-2 border-1 border-indigo-400 rounded-lg bg-indigo-950 font-semibold text-indigo-300 cursor-pointer hover:bg-indigo-400 hover:text-indigo-950 duration-200">
                            Lets Go
                        </button>

                        <a  href="/signup" className="px-6 py-2 font-semibold text-amber-300 cursor-pointer">
                            Sign Up
                        </a>
                    </div>

                </form>
            </div>
        </div>
    )
}