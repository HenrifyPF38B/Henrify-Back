

const getGenresHandler = async (req, res) => {
    return res.send('getGenresHandler')
  }
  
  export default getGenresHandler

const getGenresByIdHandler = async (req, res) => {
    return res.send('getGenresByIdHandler')
  }
  

  
const deleteGenresHandler = async (req, res) => {
    return res.send('deleteGenresHandler')
  }
  

  

const postGenresHandler = async (req, res) => {
    return res.send('postGenresHandler')
  }
  

  export {
    postGenresHandler,
    deleteGenresHandler,
    getGenresByIdHandler, 
    getGenresHandler
  }
  