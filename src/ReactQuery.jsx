import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

export default function ReactQuery() {
  return (
    <QueryClientProvider client={queryClient}>
      <Fetched />
    </QueryClientProvider>
  );
}
function Fetched() {
  const { isLoading, error, data } = useQuery("Data", () =>
    fetch("https://fakestoreapi.com/products").then((fetch) => fetch.json())
  );
  if (isLoading) return "Loading";
  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      <h1>
        {data.map((item) => {
          return item.title;
        })}
      </h1>
    </div>
  );
}
