import { useAlbums } from "../../hooks/useAlbums";
import { useUser } from "../../hooks/useUser";
import { useParams } from "react-router-dom";

export default function UserDetails() {
  let { userId } = useParams();
  const { user, loading, error } = useUser({ id: userId });
  const { albums, error: errorAlbum } = useAlbums({ id: userId });

  return (
    <>
      <h2>Detalles de usuario</h2>
      {loading && <p>Loading...</p>}
      {(error || errorAlbum) && <p>{error}</p>}
      {user && (
        <>
          {/* TODO: Crear componentes para cada seccion */}

          <section>
            <p>Nombre: {user.name}</p>
            <p>User: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Ciudad: {user.city}</p>
            <p>Website: {user.website}</p>
            <p>Empresa: {user.company}</p>
          </section>

          <section>
            <h3>Listado de albumes</h3>

            <ul>
              {albums.map((album) => (
                <li key={album.id}>
                  <a href={`albums/${album.id}`}>{album.title}</a>
                  <img
                    style={{ height: "100px" }}
                    src={album.photos[0].url}
                    alt="Foto del primer album"
                  />
                </li>
              ))}
            </ul>
          </section>

          {/* TODO: Falta listado de TODOs y su funcionalidad */}
          <section>
            <h3>Listado de TODOs</h3>
          </section>
        </>
      )}
    </>
  );
}
