import Album  from '../Models/Albums'

export const getAlbums = async () => {
  const albums = await Album.findAll()
  
  return { data: albums }
}