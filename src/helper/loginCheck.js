const isInvalid = (user, email, password) => {
  if (!user || user.email !== email || user.password !== password) return true;

  return false;
};
  
module.exports = isInvalid;