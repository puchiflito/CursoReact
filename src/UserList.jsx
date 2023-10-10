/* eslint-disable react/prop-types */
import useFetchData from "./CustomHook/useFetchData";

export default function UserList({ endPoint }) {
  const { data, isLoading } = useFetchData(endPoint);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {Array.isArray(data) &&
            (endPoint === "users"
              ? data.map((data) => <li key={data.id}>{data.name}</li>)
              : data.map((data) => <li key={data.id}>{data.email}</li>))}
        </ul>
      )}
    </div>
  );
}
