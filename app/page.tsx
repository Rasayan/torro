// import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="md:w-1/2 w-1/2 flex justify-center items-center flex-col gap-7">
        <button className="border-2 rounded-full px-3 py-1">v 0.0.1</button>
        <h2 className="text-6xl text-center font-serif">Contribute your data for training AI models without revealing it.</h2>

        <div className="flex justify-center items-center gap-4">
          <a href="#" className="rounded-full border-2 border-blue-400 bg-blue-400 px-7 py-1.5 font-semibold text-blue-950 hover:bg-blue-950 hover:text-blue-400 duration-200">
            Try Torro
          </a>

          <a href="#" className="rounded-full border-2 border-blue-400 px-7 py-1.5 font-semibold text-blue-400 hover:bg-blue-950 duration-200">
            Encryption
          </a>
        </div>
      </div>
    </div>
  );
}
