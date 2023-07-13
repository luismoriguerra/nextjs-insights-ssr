import { getFoundations } from "../cubejs/metrics/foundations/queries";
import FoundationCard from "./FoundationCard";

export default async function FoundationList() {
  const data = await getFoundations();
  return (
    <div className="flex flex-wrap">
      {data.map((row) => (
        <FoundationCard key={row["segments.id"]} row={row} />
      ))}
    </div>
  );
}
