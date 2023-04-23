const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')
const bcrypt = require('bcryptjs')

const register = async (req, res) => {
  const { username, email, password } = req.body
    if (!username || !email || !password) {
      throw new BadRequestError("Please provide username, email and password")
    }
  const user = await User.create({ ...req.body })
  res.status(StatusCodes.CREATED).json({ user })
}

const login = async (req, res) => {
  const { email, password } = req.body
  
  if (!email || !password) {
    throw new BadRequestError("Please provide email and password")
  }

  const user = await User.findOne({email})
  if(!user) {
    throw new UnauthenticatedError("Invalid Credentials")
  }

  const isPasswordCorrect = await user.comparePassword(password)
  if(!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials")
  }

  res.status(StatusCodes.OK).json({user})
}

const updateUser = async (req, res) => {
  const { id: userId } = req.params;

  if (req.body.password) {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
  }

  const user = await User.findOneAndUpdate({ _id: userId }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!user) {
    return res.status(StatusCodes.NOT_FOUND).json({msg: `No task with id : ${req.params.id}`})
  }

  res.status(StatusCodes.OK).json({ user })
}


module.exports = {
  register,
  login,
  updateUser
}