import { useUsers } from "../hooks/useUsers";

export default function Root() {
  const { users, loading, error } = useUsers();

  return (
    <>
      <h2>Listado de usuarios</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <a href={`users/${user.id}`}>{user.name}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
