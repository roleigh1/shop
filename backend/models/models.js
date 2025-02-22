require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    port: "3306",
    dialect: "mysql",
    logging: (msg) => {
      console.log(`[Sequelize] ${msg}`);
    },
  }
);
async function authDb() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
}
authDb();
const SeasonCardsDB = sequelize.define(
  "Info",
  {
    name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "infos",
  }
);
const BestsellerItemsDB = sequelize.define(
  "Item",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    unit:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    firstImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secondImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    thirdImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fourthImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "items",
  }
);
const ProductsDB = sequelize.define(
  "Product",
  {

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    unit:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    firstImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secondImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    thirdImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fourthImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "products",
  }
);

const Order = sequelize.define(
  "Order",
  {
    email: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    item: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    total: {
      type: Sequelize.DataTypes.FLOAT,
      allowNull: false,
    },
    pickupdate: {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
    },
    location: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "orders",
    timestamps: "true",
  }
);
const BannerData = sequelize.define(
  "banners",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    headline: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    img: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    
  },
  {
    tableName: "banners",
    timestamps: false,
  }
);


module.exports = {
  BannerData,
  BestsellerItemsDB,
  SeasonCardsDB,
  ProductsDB,
  Order,

};
