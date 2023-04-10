const { handleHttpError } = require("../utils/handleError");

/**
 * Array con los roles permitidos
 * @param {*} rol
 * @returns
 */

const checkRol = (roles) => (req, res, next) => {
  try {
    const { user } = req;
    console.log({ user });
    const rolesByUser = user.role; //TODO ["user"]
    const checkValueRol = roles.some((rolSingle) =>
      rolesByUser.includes(rolSingle)
    );
    if (!checkValueRol) {
      handleHttpError(res, "USER_NOT_PERMISISIONS", 403);
      return;
    }
    next();
  } catch (err) {
    handleHttpError(res, "ERROR_PERMISISIONS", 403);
  }
};
module.exports = checkRol;
