import * as React from "react";

export default function useApi(config) {
  const { endpoint } = config;
  const [data, setData] = React.useState(null);
  const [isLoaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoaded(true);
    const res = fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => setError(error));

    setLoaded(false);
    return res;
  }, [endpoint]);

  return { data, isLoaded, error };
}
