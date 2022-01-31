import "./styles.css";

import useApi from "./useApi";

export default function App() {
  const configApiCall = {
    endpoint: "posts"
  };

  const { data, isLoaded, error } = useApi(configApiCall);

  return (
    <div className="App">
      {isLoaded && <p>cargando..</p>}
      <h1>Hello CodeSandbox</h1>
      {data?.map((item) => (
        <p key={item.id}>{item.body}</p>
      ))}
      {error && <p>Algo trono ama!!</p>}
    </div>
  );
}
