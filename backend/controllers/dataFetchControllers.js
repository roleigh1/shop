const {
  SeasonCardsDB,
  BestsellerItemsDB,
  ProductsDB,
  BannerData,
} = require("../models/models");

// Main API Controller
const getContent = async (req, res) => {
  const { whichContent, id } = req.params;


  const limit = parseInt(req.query.limit) || 12; // Default auf 12
  const offset = parseInt(req.query.offset) || 0; // Standard-Offset 0

  try {
    switch (whichContent) {
      case "products":
    
        const resultProducts = await fetchData(ProductsDB, limit, offset);
        res.status(200).json(resultProducts);
        break;

      case "cardInfos":
        const resultCardInfo = await fetchData(SeasonCardsDB, limit, offset);
        res.status(200).json(resultCardInfo);
        break;

      case "bestseller":
        const resultBestseller = await fetchData(BestsellerItemsDB, limit, offset);
        res.status(200).json(resultBestseller);
        break;

      case "bannersHome":
        const resultBannersHome = await fetchData(BannerData, limit, offset, {
          location: "home",
        });
        res.status(200).json(resultBannersHome);
        break;

      case "bannersProducts":
        const resultBannerProduct = await fetchData(BannerData, limit, offset, {
          location: "products",
        });
        res.status(200).json(resultBannerProduct);
        break;

      case "bestsellerDetails":
        if (!id) {
          return res.status(400).json({ message: "Product ID is required" });
        }
        const resultBestsellerDetails = await fetchItemById(BestsellerItemsDB, id);
        res.status(200).json(resultBestsellerDetails);
        break;

      case "productDetails":
        if (!id) {
          return res.status(400).json({ message: "Product ID is required" });
        }
        const resultProductsDetails = await fetchItemById(ProductsDB, id);
        res.status(200).json(resultProductsDetails);
        break;

      default:
        return res.status(400).json({ message: "Invalid content type" });
    }
  } catch (error) {
    console.error("Error processing request: ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Hilfsfunktion zum Abrufen der Daten
const fetchData = async (db, limit, offset, filter = {}) => {
  try {
    const { count, rows } = await db.findAndCountAll({
      where: filter,
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
    console.error("Error fetching data: ", error);
    throw new Error("Internal Server Error");
  }
};

// Hilfsfunktion für Details
const fetchItemById = async (db, id) => {
  try {
    const item = await db.findOne({ where: { id } });
    if (!item) {
      throw new Error("Item not found");
    }
    return item;
  } catch (error) {
    console.error("Error fetching item: ", error);
    throw new Error("Internal Server Error");
  }
};

module.exports = {
  getContent,
};
