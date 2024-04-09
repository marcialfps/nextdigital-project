import { useCallback, useEffect, useState } from "react";
import { getUserDetails } from "../services/users";

export function useUser({ id }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUser = useCallback(async () => {
    try {
      setLoading(true);
      const newUser = await getUserDetails({ id });
      setUser(newUser);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return { user, loading, error };
}
