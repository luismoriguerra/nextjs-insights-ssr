import Link from "next/link";
import { Segment } from "../cubejs/metrics/foundations/queries";

export default function FoundationCard({ row }: { row: Segment }) {
  return (
    <div
      key={row["segments.id"]}
      className="card border rounded-md w-[300px] h-[200px]"
    >
      <div className="text-center">
        <Link href={`/foundation/${row["segments.slug"]}`}>
          {row["segments.name"]}
        </Link>
      </div>
    </div>
  );
}
