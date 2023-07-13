import { cubejsApi } from "@/app/libs/cube-api";
import { Query } from "@cubejs-client/core";

export interface Segment {
  "segments.name": string;
  "segments.slug": string;
  "segments.id": string;
  "segments.url": string;
}

export async function getFoundations(): Promise<Segment[]> {
  const resultSet = await cubejsApi.load({
    dimensions: [
      "segments.name",
      "segments.slug",
      "segments.id",
      "segments.url",
    ],
    order: {
      "segments.name": "asc",
    },
    segments: ["segments.only_project_groups"],
  });

  const data = resultSet.tablePivot() as unknown as Segment[];

  return data;
}

export async function getFoundation(slug: string = "hyp"): Promise<Segment> {
  const resultSet = await cubejsApi.load({
    dimensions: [
      "segments.name",
      "segments.slug",
      "segments.id",
      "segments.url",
    ],
    filters: [
      {
        member: "segments.slug",
        operator: "equals",
        values: [slug],
      },
    ],
    segments: ["segments.only_project_groups"],
  });

  const data = resultSet.tablePivot() as unknown as Segment[];

  return data && data[0];
}

export async function getFoundationProjects(
  foundationSlug: string
): Promise<Segment[]> {
  const resultSet = await cubejsApi.load({
    dimensions: [
      "segments.name",
      "segments.slug",
      "segments.id",
      "segments.url",
    ],
    order: {
      "segments.name": "asc",
    },
    segments: ["segments.only_projects"],
    filters: [
      {
        member: "segments.project_slug",
        operator: "equals",
        values: [foundationSlug],
      },
    ],
  });

  const data = resultSet.tablePivot() as unknown as Segment[];

  return data;
}

export async function getFoundationDescription(
  foundationSlug: string = "hyp"
): Promise<string> {
  const query: Query = {
    dimensions: [
      "LfxProjects.slug",
      "LfxProjects.description",
      "LfxProjects.repositoryUrl",
    ],
    filters: [
      {
        member: "LfxProjects.slug",
        operator: "equals",
        values: [foundationSlug],
      },
    ],
    limit: 1,
  };

  const resultSet = await cubejsApi.load(query);
  const lfxProjects = resultSet.tablePivot() as unknown as any[];

  const description = lfxProjects[0]["LfxProjects.description"];
  return description;
}

export async function getFoundationDetails(foundationSlug: string = "hyp") {
  const foundationPromise = getFoundation(foundationSlug);
  const descriptionPromise = getFoundationDescription(foundationSlug);
  const projectsPromise = getFoundationProjects(foundationSlug);

  const promises = [foundationPromise, descriptionPromise, projectsPromise];
  const results = await Promise.allSettled(promises);
  const [foundationResponse, description, projects] = results.map((result) =>
    result.status === "fulfilled" ? result.value : null
  );

  const foundation = foundationResponse as Segment;

  return {
    description: (description as string) || "",
    projects: (projects as Segment[]) || [],
    name: (foundation["segments.name"] as string) || "",
  };
}
