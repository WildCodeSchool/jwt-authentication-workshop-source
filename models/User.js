const users = [{ id: 1, email: 'john.smith@example.com', password: null, salt: null }];
let id = 2;

class User {
  static async create(user) {
    const newUser = { id, ...user }
    users.push(newUser);
    id++;
    return newUser;
  }

  static async findOne({ email }) {
    return users.find(user => user.email === email);
  }

  static async findAll() {
    return users.map(({ password, salt, ...rest }) => rest);
  }
}

module.exports = User;
