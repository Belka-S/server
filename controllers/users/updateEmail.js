const crypto = require('crypto');

const User = require('../../models/user');
const { ctrlWrapper } = require('../../decorators');
const { HttpError, sendEmail } = require('../../utils');

const updateEmail = ctrlWrapper(async (req, res) => {
  const { _id } = req.user;
  const { email } = req.body;

  const user = await User.findById(_id);
  if (!user) throw HttpError(401);

  const verificationCode = crypto.randomUUID();
  await sendEmail(email, verificationCode);

  const newUser = await User.findByIdAndUpdate(_id, {
    verificationCode: `${verificationCode} ${email}`,
  });
  if (!newUser) throw HttpError(404);

  res.status(200).json({ message: `Action Required: Verify ${email}` });
});

module.exports = updateEmail;
