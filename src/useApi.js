import * as React from "react";

export default function useApi(config) {
  const { endpoint } = config;
  const [isLoaded, setLoaded] = React.useState("idle");
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoaded("pending");
    const res = fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => setError(error));

    setLoaded("success");
    return res;
  }, [endpoint]);

  return { data, isLoaded, error };
}
