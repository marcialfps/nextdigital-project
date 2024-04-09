import { useCallback, useEffect, useState } from "react";

export function useAlbum({ id }) {
  const [album, setAlbum] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAlbum = useCallback(async () => {
    try {
      setLoading(true);
      const newUser = await getAlbumDetails({ id });
      setAlbum(newUser);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getAlbum();
  }, [getAlbum]);

  return { album, loading, error };
}
