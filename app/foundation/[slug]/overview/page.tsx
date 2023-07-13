import Link from "next/link";

export default function FoundationOverviewPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { projects: string };
}) {
  const foundationSlug = params.slug;
  const projectSlug = searchParams.projects;

  return (
    <div>
      <h1>
        <Link href={`/foundation/${foundationSlug}`}>{foundationSlug}</Link> -{" "}
        {projectSlug}
      </h1>
    </div>
  );
}
