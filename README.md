E-Commerce Shop
A modern e-commerce web application for selling fresh produce online with integrated payment processing and order management.
Tech Stack
Frontend:

React.js with React Router
Tailwind CSS & Material-UI components
Framer Motion for animations
React Infinite Scroll
React Image Gallery

Backend:

Node.js with Express
MySQL database with Sequelize ORM
Stripe payment integration
Nodemailer with OAuth2 for emails
Winston logging

Features
Shopping Experience

Product Catalog: Browse products with categories and filtering
Advanced Search: Filter by category and price range
Product Details: Image galleries with multiple product photos
Shopping Cart: Add/remove items with quantity management
Secure Checkout: Stripe payment processing
Order Management: Select pickup location and date
Email Confirmations: Automated order confirmation emails
Responsive Design: Mobile and desktop optimized

Product Management

Multiple Categories: Support for different product types
Image Management: Multiple images per product
Inventory System: Products and bestseller sections
Dynamic Content: Configurable banners and content cards
Contact System: Customer contact form

Getting Started
Prerequisites

Node.js (v14+)
MySQL database
Stripe account
Gmail account for email service

Installation

Clone the repository

bashgit clone <repository-url>
cd e-commerce-shop

Backend Setup

bashcd backend
npm install
Create a .env file with:
envMYSQL_DATABASE=your_database_name
MYSQL_USER=your_db_user
MYSQL_PASSWORD=your_db_password
MYSQL_HOST=your_db_host
STRIPE_SECRET_KEY=your_stripe_secret_key
ENDPOINT_SECRET=your_stripe_webhook_secret
ACCESS_TOKEN=your_gmail_access_token

Frontend Setup

bashcd frontend
npm install
Create a .env file with:
envREACT_APP_API_BASEURL=http://localhost:4242/api
REACT_APP_POST_CONTACT=http://localhost:4242/api/contact

Start the Application

Backend:
bashcd backend
npm start
Frontend:
bashcd frontend
npm start
API Endpoints

GET /api/content/:whichContent - Fetch content data
GET /api/content/:whichContent/:id - Fetch item details
POST /api/create-checkout-session - Create Stripe checkout
POST /api/webhook - Handle Stripe webhooks
POST /api/contact - Send contact emails

Database Schema
Key tables:

products - Main product catalog
items - Bestseller items
orders - Customer orders
banners - Homepage and product page banners
infos - Content cards

Payment Integration

Stripe checkout sessions
Webhook handling for order completion
Automatic email confirmations
Support for EUR currency

Email System

OAuth2 Gmail integration
Order confirmation emails
Contact form notifications
HTML email templates

Features Overview

Product browsing and filtering
Shopping cart functionality
Secure payment processing
Order confirmation system
Responsive design
Email notifications
