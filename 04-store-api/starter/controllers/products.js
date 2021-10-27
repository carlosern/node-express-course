const getAllProductStatics = async (req, res) => {
  res.status(200).json({ msg: "products static route" });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "products route" });
};

module.exports = { getAllProductStatics, getAllProducts };
