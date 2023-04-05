const bcrypts = require("bcryptjs");
/**
    Contraseña sin Encriptar
    @param {*} passwordPlain
*/

const encrypt = async (passwordPlain) => {
  const hash = await bcrypts.hash(passwordPlain, 12);
  return hash;
};

/**
    Pasar Contraseña sin Encriptar y Pasar Contraseña Encriptada
    @param {*} passwordPlain
    @param {*} hashPassword
    
*/

const compare = async (passwordPlain, hashPassword) => {
  return await bcrypts.compare(passwordPlain, hashPassword);
};

module.exports = { encrypt, compare };
