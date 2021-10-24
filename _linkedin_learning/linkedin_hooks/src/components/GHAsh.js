import { useFetch } from "./useFetch";

export function GHAsh({ login }) {
  // useFetch takes in uri
  // and returns an object of 3 states of loading, data, and error
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  return (
    <div>
      <img src={data.avatar_url} alt={data.login} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <h2>{data.name}</h2>}
        {data.location && <p>{data.location}</p>}
        {data.bio && <p>{data.bio}</p>}
      </div>
      {/* <pre>{JSON.stringify(data, null, 2)}}</pre> */}
    </div>
  );
}
