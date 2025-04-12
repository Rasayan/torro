export default function Navbar() {
    return (
        <nav className="fixed w-screen h-fit flex justify-around items-center py-3">
            <div className="w-[25%] flex justify-center items-center">
                <a href="#" className="font-semibold text-lg tracking-wider">Torro</a>
            </div>

            <div className="w-[50%] flex justify-center items-center gap-5">
                <a href="#" className="font-normal hover:text-emerald-300 tracking-wide duration-500">About</a>
                <a href="#" className="font-normal hover:text-emerald-300 tracking-wide duration-500">Docs</a>
                <a href="#" className="font-normal hover:text-emerald-300 tracking-wide duration-500">Connect</a>
            </div>

            <div className="w-[25%] flex justify-center items-center">
                <a href="/login" className="font-normal tracking-wider rounded-full border-2 border-amber-900 text-amber-400 hover:bg-amber-900 hover:text-amber-400 px-6 duration-200">
                    Log In
                </a>
            </div>
        </nav>
    )
}