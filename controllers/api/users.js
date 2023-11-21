const User=require('../../models/user')
const jwt=require('jsonwebtoken')

const createJWT=(user)=> {
  return jwt.sign(
    { user },
    process.env.SECRET, {
      expiresIn:'24h'
    }
  )
}

const create = async (req, res) => {
  try {
    const user = await User.create(req.body)
    const token = createJWT(user)
    res.json(token)
   } catch (error) {
    res.status(400).json(error)
  }
}

function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log('req.user', req.user);
  res.json(req.exp);
}



module.exports = {
  create,createJWT,checkToken
}