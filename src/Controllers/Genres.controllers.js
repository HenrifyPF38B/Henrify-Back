import Genre from '../Models/Genre.js'

export const postGenre = async (name) => {
    const newGenre = await Genre.create({name})

    return { data: newGenre }
}

export const getGenre = async () => {
    const genres = await Genre.findAll()

    return { data: genres }
}