import { getFoundationDetails } from "@/app/cubejs/metrics/foundations/queries";
import Link from "next/link";

export default async function FoundationPage({
  params,
}: {
  params: { slug: string };
}) {
  const foundationSlug = params.slug;
  const foundation = await getFoundationDetails(foundationSlug);

  return (
    <div>
      <div className="border my-5 p-5 rounded-md">
        <div>Foundation</div>
        <div>
          <span> {foundation.name} / </span>
          <select className="border rounded-md">
            <option value="">select project</option>
            {foundation.projects.map((project) => (
              <option
                key={project["segments.id"]}
                value={project["segments.slug"]}
              >
                {project["segments.name"]}
              </option>
            ))}
          </select>
        </div>
        <div>{foundation.description}</div>
      </div>
      <div className="flex flex-wrap">
        {foundation.projects.map((project) => (
          <div
            key={project["segments.id"]}
            className="card border rounded-md w-[300px] h-[200px]"
          >
            <div className="text-center">
              <Link
                href={{
                  pathname: `/foundation/${foundationSlug}/overview`,
                  query: { projects: project["segments.slug"] },
                }}
              >
                {project["segments.name"]}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
