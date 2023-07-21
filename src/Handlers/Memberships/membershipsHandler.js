

const getMembershipsHandler = async (req, res) => {
    return res.send('getMembershipsHandler')
  }


const getMembershipsByIdHandler = async (req, res) => {
    return res.send('getMembershipsByIdHandler')
  }
   
const deleteMembershipsHandler = async (req, res) => {
    return res.send('deleteMembershipsHandler')
  }
  
const postMembershipsHandler = async (req, res) => {
    return res.send('postMembershipsHandler')
  }
  
const putMembershipsHandler = async (req, res) => {
    return res.send('putMembershipsHandler')
  }

  export {
    putMembershipsHandler,
    postMembershipsHandler,
    deleteMembershipsHandler,
    getMembershipsByIdHandler,
    getMembershipsHandler
  }