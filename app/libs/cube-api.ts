import cubejs from "@cubejs-client/core";
export const cubejsApi = cubejs(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODkwNTA0NjN9.z7MWOLezhBnT-iJuH09SsPje90TSP5K3EzIg10EQy-Q",
  {
    apiUrl:
      "https://jade-trout.aws-us-west-2-t-11709.cubecloudapp.dev/cubejs-api/v1",
    // "http://localhost:4000/cubejs-api/v1",
  }
);
