// import Image from "next/image";

import Search from "./components/Search";
import FoundationList from "./components/FoundationList";

export default async function Home() {
  return (
    <main>
      <div className=" text-center font-semibold text-lg">
        Data-Driven Insights For Open Source Projects
      </div>
      <div className="text-center my-5">
        <Search />
      </div>
      <FoundationList />
    </main>
  );
}
