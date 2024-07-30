const {
  SeasonCardsDB,
  BestsellerItemsDB,
  ProductsDB,
  BannerData,
} = require("../models/models");

const getContent = async (req, res) => {
  const resultCardInfo = await fetchData(SeasonCardsDB, 4, req.query.page);
  const resultBestseller = await fetchData(
    BestsellerItemsDB,
    4,
    req.query.page
  );  
  const resultProducts = await fetchData(ProductsDB, 40, req.query.page);
  const resultBanner = await fetchData(BannerData, 2, req.query.page);
  switch (req.params.whichContent) {
    case "cardInfos":
      res.status(200).json(resultCardInfo);
      break;
    case "bestseller":
      res.status(200).json(resultBestseller);
      break;
    case "products":
      res.status(200).json(resultProducts);
      break;
    case "banners":
      res.status(200).json(resultBanner);
      break;
    default:
      return res.status(400).json({ message: "Invalid content type" });
  }
};
const fetchData = async (db, limit, page) => {
  const offset = limit * ((parseInt(page) || 1) - 1);
  try {
    const { count, rows } = await db.findAndCountAll({
      limit,
      offset,
      order: [["id", "ASC"]],
    });
    return {
      result: rows,
      count,
      pages: Math.ceil(count / limit),
    };
  } catch (error) {
    console.error("Error fetching infos: ", error);
    return "Internal Server Error";
  }
};

module.exports = {
  getContent,
};
