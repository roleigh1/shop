const { Sequelize } = require("sequelize");
const {
  SeasonCardsDB,
  BestsellerItemsDB,
  ProductsDB,
  BannerData,
} = require("../models/models");
const { Op } = require("sequelize");

const getContent = async (req, res) => {
  const { whichContent, id } = req.params; 

const selectedCategory  = req.query.category; 
const selectedPrice = req.query.price; 



  const limit = parseInt(req.query.limit) || 12 
  const offset = parseInt(req.query.offset) || 0; 

  try {
    let result;
    switch (whichContent) {
      case "productsContentData": {
        const productFilter = {};
        console.log("categoryy" ,selectedCategory, "Price", selectedPrice); 

        if (selectedPrice !== "All") {
          productFilter.price = {
            [Op.gt]: Number(selectedPrice) - 3,
            [Op.lte]: Number(selectedPrice),
          };
        } else {
          delete productFilter.price; 
        }
        
        if (selectedCategory === "Fruits") {
          productFilter.type = { 
            [Op.eq]: "Fruits"
          }
        } else if (selectedCategory === "Vegetables")  {
          productFilter.type = { [Op.eq]: "Vegetables" }; 
        } else if (selectedCategory === "Mushrooms"){
          productFilter.type = {[Op.eq] : "Mushrooms"}; 
        } else if (selectedCategory === "Herbs"){
          productFilter.type = {[Op.eq] : "Herbs"}; 
        } else if(selectedCategory === "All"){
          delete productFilter.type;
        }
       
        result = await fetchData(ProductsDB, limit, offset, productFilter);
  
            
           

            res.status(200).json(result);
            break;
      
      }
      case "seasonContentData":
        result = await fetchData(SeasonCardsDB, limit, offset);
        res.status(200).json(result);
        break;

      case "bestsellerContentData":
        result = await fetchData(BestsellerItemsDB, limit, offset);
        res.status(200).json(result);
        break;

      case "bannerhomeSite":
        result = await fetchData(BannerData, limit, offset, { location: "home" });
        res.status(200).json(result);
        break;

      case "bannershopProductSite":
        result = await fetchData(BannerData, limit, offset, { location: "products" });
        res.status(200).json(result);
        break;

      case "bestsellerDetails":
        if (!id || isNaN(Number(id))) {
          return res.status(400).json({ message: "Valid Product ID is required" });
        }
        result = await fetchItemById(BestsellerItemsDB, id);
        if (!result) {
          return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json(result);
        break;

      case "productsDetails":
        if (!id || isNaN(Number(id))) {
          return res.status(400).json({ message: "Valid Product ID is required" });
        }
        result = await fetchItemById(ProductsDB, id);
        if (!result) {
          return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json(result);
        break;

      default:
        return res.status(400).json({ message: "Invalid content type" });
    }
  } catch (error) {
    console.error(`Error in getContent (${whichContent}):`, error);
    res.status(500).json({ message: `Internal Server Error: ${error.message}` });
  }
};


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
    return item || null;
  } catch (error) {
    console.error("Error fetching item: ", error);
    throw new Error("Internal Server Error");
  }
};

module.exports = {
  getContent,
};
