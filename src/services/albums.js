export const getAlbumsList = async () => {
  try {
    const responseAlbums = await fetch(
      `https://jsonplaceholder.typicode.com/users/1/albums`
    );
    const albums = await responseAlbums.json();

    const responsePhotos = await fetch(
      `https://jsonplaceholder.typicode.com/photos`
    );
    const photos = await responsePhotos.json();

    // TODO: move to a mapper
    return albums?.map((album) => ({
      id: album.id,
      title: album.title,
      photos: photos.filter((photo) => photo.albumId === album.id),
    }));
  } catch (e) {
    throw new Error("Error searching albums");
  }
};
