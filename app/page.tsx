// import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className=" text-center font-semibold text-lg">
        Data-Driven Insights For Open Source Projects
      </div>
      <div className="text-center my-5">
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="text"
          placeholder="search project"
        />
      </div>
      <div>
        <div className="card border rounded-md w-[300px] h-[400px]">
          <div className="text-center">
            <Link href="/foundation/cncf">CNCF</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
