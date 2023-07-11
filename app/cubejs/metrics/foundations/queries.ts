import { cubejsApi } from "@/app/libs/cube-api";

export interface Segment {
  "segments.name": string;
  "segments.slug": string;
  "segments.id": string;
}

export async function getFoundations(): Promise<Segment[]> {
  const resultSet = await cubejsApi.load({
    dimensions: ["segments.name", "segments.slug", "segments.id"],
    order: {
      "segments.name": "asc",
    },
    segments: ["segments.only_project_groups"],
  });

  const data = resultSet.tablePivot() as unknown as Segment[];

  return data;
}
