const User = require('../../models/User')

module.exports = async (req, res) => {
  try {
    let { email } = req.body;

    if(await User.findOne({ email })) {
      return res.status(400).send({ error: 'User already exists' })
    }

    const user = await User.create(req.body);
    user.password = undefined;

    return res.send({ user });
  } catch(err) {
    res.status(400).send({ message: 'Registration failed', error: err });
  }
}
