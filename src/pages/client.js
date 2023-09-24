import axios from "axios";
import React, { useEffect, useState } from "react";

import Time from "@/components/time/time";

const CSRPage = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => setError(error));
  }, []);
  if (isLoading) return <p>Loading Now...</p>;

  if (!data) return <p>No profile data</p>;
  return (
    <div>
      {data && data?.map((item, index) => <Time data={item} key={index} />)}
    </div>
  );
};

export default CSRPage;
