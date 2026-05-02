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
    timezone: "+00:00",

    logging: (msg) => {
      console.log(`[Sequelize] ${msg}`);
    },
  }
);
async function authDb() {
  try {
    await sequelize.authenticate();
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
    sales: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    unit: {
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


const Faq = sequelize.define("Faq", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    question: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    answer: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    tableName: "Faq",
    timestamps: true, 
});


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
const Voucher = sequelize.define(
  "Voucher",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    hashedcode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vouchertype: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    codeEncrypted: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    discountedgroup: {
      type: DataTypes.STRING,
      allowNull: false
    },
    maxredemptions: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    currentredemptions: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.fn("NOW"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.fn("NOW"),
      onUpdate: Sequelize.fn("NOW"),
    },
  }
)
const VoucherLink = sequelize.define(
  "VoucherURLs",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    redeemToken: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.fn("NOW"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.fn("NOW"),
      onUpdate: Sequelize.fn("NOW"),
    },
    validityfrom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    validitytill: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    voucherId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bannerColor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bannerContent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bannerHeadline: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bannerText: {
      type: DataTypes.STRING,
      allowNull: false
    },

  }

)



module.exports = {

  BannerData,
  SeasonCardsDB,
  ProductsDB,
  Order,
  Voucher,
  VoucherLink,
  Faq

};
