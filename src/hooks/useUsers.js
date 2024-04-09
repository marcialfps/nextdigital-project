import { useEffect, useState } from "react";
import { getUsersList } from "../services/users";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUsers = async () => {
    try {
      setLoading(true);
      const newUsers = await getUsersList();
      setUsers(newUsers);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return { users, loading, error };
}
