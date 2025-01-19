

const BASE_URL = process.env.REACT_APP_API_BASEURL; 

export const apiConfig = {
    BASE_URL,
    endpoints: {
        products:"/content/productsContentData",
        bannerProducts:"/content/bannershopProductSite",
        bannerHome:"/content/bannerhomeSite",
        bestseller: "/content/bestsellerContentData",
        seasonCards: "/content/seasonContentData"


    }
}