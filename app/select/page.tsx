export default function Select() {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="md:w-1/2 w-1/2 flex justify-center items-center gap-7">
                <div className="w-[30%] h-[70%] flex flex-col justify-center items-start border-2 border-indigo-400 rounded-lg px-2 py-2">
                    <h2 className="w-1/2 font-medium font-sans tracking-wider text-3xl">MODEL TRAINER.</h2>

                    <p className="font-sans my-2">If you are looking forward to train your AI model(s) with the available encrypted data.</p>

                    <a href="#" className="rounded-lg bg-indigo-950 border-2 border-indigo-400 text-indigo-300 px-5 py-1 mt-3">select</a>
                </div>

                <div className="w-[30%] h-[70%] flex flex-col justify-center items-start border-2 border-emerald-400 rounded-lg px-2 py-2">
                    <h2 className="w-1/2 font-medium font-sans tracking-wider text-3xl">DATA LENDER.</h2>

                    <p className="font-sans my-2">If you want to lend encrypted data for organizations to use and train their models.</p>

                    <a href="/lend" className="rounded-lg bg-emerald-950 border-2 border-emerald-400 text-emerald-300 px-5 py-1 mt-3">select</a>
                </div>
            </div>
        </div>
    )
}