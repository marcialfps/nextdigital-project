import { useCallback, useEffect, useState } from "react";
import { getAlbumsList } from "../services/albums";

export function useAlbums({ id }) {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAlbums = useCallback(async () => {
    try {
      setLoading(true);
      const newUser = await getAlbumsList({ id });
      setAlbums(newUser);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getAlbums();
  }, [getAlbums]);

  return { albums, loading, error };
}
