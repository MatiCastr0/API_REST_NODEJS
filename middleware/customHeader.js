const customHeader = (req, res, next) => {
  try {
    const apiKey = req.headers.api_key;
    if (apiKey === "mati-1212") {
      next();
    } else {
      res.status(403);
      res.send({ error: "API KEY INCORRECTA" });
    }
  } catch (e) {
    res.status(403);
    res.send({ error: "Error en el CUSTOM HEADER" });
  }
  console.log(req.headers);
  next();
};

module.exports = { customHeader };
