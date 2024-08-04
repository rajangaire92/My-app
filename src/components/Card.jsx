import { useQuery } from "@tanstack/react-query";
import { MdDownloading } from "react-icons/md";
export const Card = () => {
  const { data, isLoading, error, } = useQuery({
    queryFn: async () => {
      try {
        const datafetch = await fetch("https://fakestoreapi.com/products");
        if (datafetch.ok) {
          const jsonData = await datafetch.json();
          return jsonData;
        } else {
          throw new Error("Failed to Fetch data");
        }
      } catch (error) {
        console.log(error);
      }
    },
    queryKey: ["getProducts"],
  });
  if (error) {
    console.log("Error While fetching data");
    return <div>Error fetching data</div>;
  }
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[100vh">
        <MdDownloading />
        Loading...
      </div>
    );
  }
  if (!data) {
    console.log("Data is undefined or null");
    return <div>Data</div>;
  }

  return (
    <div>
      <div>{console.log(data)}</div>
      <div>
        {data?.map((item) => {
          return (
            <div key={item.id}>
              <h1>title is {item.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};
