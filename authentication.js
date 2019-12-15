const argon2 = require('argon2');
const randomBytes = require('randombytes');
const User = require('./models/User');

const register = async ({ email, password }) => {
  const salt = randomBytes(32);
  const hashedPassword = await argon2.hash(password, { salt });

  const user = await User.create({
    email,
    password: hashedPassword,
  });

  // Be careful not to send password or salt
  return {
    email: user.email
  }
}

module.exports = {
  register,
}

