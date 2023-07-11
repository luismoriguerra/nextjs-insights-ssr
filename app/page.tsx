// import Image from "next/image";

import Link from "next/link";
import Search from "./components/Search";
import { getFoundations } from "./cubejs/metrics/foundations/queries";

export default async function Home() {
  const data = await getFoundations();
  return (
    <main>
      <div className=" text-center font-semibold text-lg">
        Data-Driven Insights For Open Source Projects
      </div>
      <div className="text-center my-5">
        <Search />
      </div>
      <div className="grid grid-cols-2">
        {data.map((row) => (
          <div
            key={row["segments.id"]}
            className="card border rounded-md w-[300px] h-[400px]"
          >
            <div className="text-center">
              <Link href={`/foundation/${row["segments.slug"]}`}>
                {row["segments.name"]}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
