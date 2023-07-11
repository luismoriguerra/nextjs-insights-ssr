import Link from "next/link";

export default function FoundationPage() {
  return (
    <div>
      <h1>Foundation Page</h1>
      <div>
        <div className="card border rounded-md w-[300px] h-[400px]">
          <div className="text-center">
            <Link href="/foundation/cncf/overview?projects=k8s">Kubernetes</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
