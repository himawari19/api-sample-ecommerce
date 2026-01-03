# 🛍️ E-Commerce API Dummy

A complete REST API for e-commerce platform with 25+ endpoints, HTML testing dashboard, and live deployment on Vercel.

**Live API**: https://api-sample-ecommerce.vercel.app

**Repository**: https://github.com/himawari19/api-sample-ecommerce

---

## ✨ Features

- ✅ **25+ REST API Endpoints** - Full CRUD operations
- ✅ **Products Management** - Get, Create, Update, Delete products
- ✅ **Users Management** - User registration and management
- ✅ **Orders Management** - Order creation and tracking
- ✅ **Shopping Cart** - Add, update, and manage cart items
- ✅ **Authentication** - Login, Register, Token Verification
- ✅ **Advanced Queries** - Pagination, Filtering, Sorting, Search
- ✅ **HTML Dashboard** - Beautiful testing interface
- ✅ **Error Handling** - Comprehensive error responses
- ✅ **Data Validation** - Input validation and duplicate checking
- ✅ **CORS Enabled** - Cross-origin requests supported
- ✅ **Live on Vercel** - Instantly accessible API

---

## 🚀 Quick Start

### Option 1: Test Live API (Recommended)

Use the live API directly in Postman:

```
Base URL: https://api-sample-ecommerce.vercel.app/api
```

### Option 2: Run Locally

```bash
# Clone repository
git clone https://github.com/himawari19/api-sample-ecommerce.git
cd api-sample-ecommerce

# Install dependencies
npm install

# Start server
npm start

# Open dashboard
http://localhost:3000
```

---

## 📚 API Endpoints

### Health Check
```
GET /api/health
```

### Authentication (3 endpoints)
```
POST   /api/auth/login             # Login user
POST   /api/auth/register          # Register new user
GET    /api/auth/verify            # Verify token
```

### Products (6 endpoints)
```
GET    /api/products              # Get all products
GET    /api/products/:id          # Get product by ID
POST   /api/products              # Create product
PUT    /api/products/:id          # Update product (full)
PATCH  /api/products/:id          # Update product (partial)
DELETE /api/products/:id          # Delete product
```

### Users (6 endpoints)
```
GET    /api/users                 # Get all users
GET    /api/users/:id             # Get user by ID
POST   /api/users                 # Create user
PUT    /api/users/:id             # Update user (full)
PATCH  /api/users/:id             # Update user (partial)
DELETE /api/users/:id             # Delete user
```

### Orders (6 endpoints)
```
GET    /api/orders                # Get all orders
GET    /api/orders/:id            # Get order by ID
POST   /api/orders                # Create order
PUT    /api/orders/:id            # Update order (full)
PATCH  /api/orders/:id            # Update order (partial)
DELETE /api/orders/:id            # Delete order
```

### Cart (5 endpoints)
```
GET    /api/cart                  # Get cart
POST   /api/cart                  # Add to cart
PUT    /api/cart/:productId       # Update cart item
DELETE /api/cart/:productId       # Remove from cart
DELETE /api/cart                  # Clear cart
```

---

## 🔍 Query Parameters (Pagination, Filtering, Sorting, Search)

### Response Format with Meta

Semua GET list endpoints mengembalikan response dengan struktur:

```json
{
  "success": true,
  "data": [...],
  "meta": {
    "pagination": {
      "total": 10,
      "page": 1,
      "limit": 5,
      "pages": 2
    },
    "filters": {
      "search": null,
      "category": "Electronics",
      "priceRange": {"min": 1000000, "max": 5000000}
    },
    "sorting": {
      "field": "price",
      "order": "asc"
    },
    "timestamp": "2026-01-03T10:30:00Z",
    "processingTime": "12ms"
  }
}
```

**Meta Information:**
- `pagination` - Total items, current page, limit, total pages
- `filters` - Active filters yang digunakan
- `sorting` - Field dan order sorting
- `timestamp` - Waktu request diproses
- `processingTime` - Durasi query execution

### Pagination
```
GET /api/products?page=1&limit=5
GET /api/users?page=2&limit=10
GET /api/orders?page=1&limit=20
```

**Parameters:**
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)

### Sorting
```
GET /api/products?sort=price&order=asc
GET /api/products?sort=rating&order=desc
GET /api/users?sort=name&order=asc
```

**Parameters:**
- `sort` - Field to sort by (price, rating, name, etc.)
- `order` - Sort order: `asc` (ascending) or `desc` (descending)

### Filtering

**Products - Filter by Category:**
```
GET /api/products?category=Electronics
GET /api/products?category=Accessories
```

**Products - Filter by Price Range:**
```
GET /api/products?minPrice=1000000&maxPrice=5000000
```

**Orders - Filter by Status:**
```
GET /api/orders?status=pending
GET /api/orders?status=shipped
GET /api/orders?status=delivered
```

**Orders - Filter by User:**
```
GET /api/orders?userId=john-doe
```

**Orders - Filter by Date Range:**
```
GET /api/orders?from=2026-01-01&to=2026-01-31
```

### Search

**Search Products:**
```
GET /api/products?q=laptop
GET /api/products?q=gaming
```

**Search Users:**
```
GET /api/users?q=john
GET /api/users?q=jane@example.com
```

### Combining Parameters

You can combine multiple parameters:

```
GET /api/products?category=Electronics&sort=price&order=asc&page=1&limit=5
GET /api/orders?status=shipped&userId=john-doe&sort=totalPrice&order=desc
GET /api/products?q=laptop&minPrice=10000000&maxPrice=20000000&sort=rating&order=desc
```

---

## 🔐 Authentication

### Login
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "base64-encoded-token",
    "user": {
      "id": "john-doe",
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
}
```

### Register
```
POST /api/auth/register
Content-Type: application/json

{
  "name": "New User",
  "email": "newuser@example.com",
  "password": "password123",
  "phone": "08111111111",
  "address": "Jl. New Address"
}
```

### Verify Token
```
GET /api/auth/verify
Authorization: Bearer your-token-here
```

---

## 📮 Testing with Postman

### Setup Environment

1. Open Postman
2. Create New Environment: `Vercel`
3. Add variable:
   - **Name**: `base_url`
   - **Value**: `https://api-sample-ecommerce.vercel.app/api`
4. Save and select environment

### Example Requests

**Health Check**
```
GET {{base_url}}/health
```

**Get All Products**
```
GET {{base_url}}/products
```

**Create Product**
```
POST {{base_url}}/products
Content-Type: application/json

{
  "name": "Laptop Gaming",
  "price": 15000000,
  "category": "Electronics",
  "stock": 10,
  "description": "High performance gaming laptop"
}
```

**Create User**
```
POST {{base_url}}/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "08123456789",
  "address": "Jl. Merdeka No. 1"
}
```

**Create Order**
```
POST {{base_url}}/orders
Content-Type: application/json

{
  "userId": "user-id-here",
  "items": [
    {
      "productId": "product-id-here",
      "quantity": 2,
      "price": 1500000
    }
  ]
}
```

**Add to Cart**
```
POST {{base_url}}/cart
Content-Type: application/json

{
  "productId": "product-id-here",
  "quantity": 2
}
```

---

## 🧪 Testing via HTML Dashboard

When running locally, access the dashboard at:

```
http://localhost:3000
```

The dashboard provides:
- ✅ Form-based testing for all endpoints
- ✅ Real-time response display
- ✅ Status badges and error highlighting
- ✅ Endpoints reference
- ✅ Beautiful responsive UI

---

## 📊 Response Format

All responses follow a standard format:

### Success Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {
    "id": "uuid",
    "name": "Product Name",
    ...
  }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description"
}
```

---

## 📋 Sample Data

### Products (3 items)
- Laptop Gaming - Rp 15.000.000
- Smartphone Pro - Rp 8.000.000
- Wireless Headphones - Rp 1.500.000

### Users (2 items)
- John Doe (john@example.com)
- Jane Smith (jane@example.com)

### Orders (1 item)
- Sample order from John Doe

---

## 🔄 Data Structure

### Product
```json
{
  "id": "uuid",
  "name": "string",
  "price": "number",
  "category": "string",
  "stock": "number",
  "description": "string",
  "image": "string (URL)",
  "rating": "number",
  "createdAt": "ISO 8601 date"
}
```

### User
```json
{
  "id": "uuid",
  "name": "string",
  "email": "string",
  "password": "string",
  "phone": "string",
  "address": "string",
  "createdAt": "ISO 8601 date"
}
```

### Order
```json
{
  "id": "uuid",
  "userId": "uuid",
  "items": [
    {
      "productId": "uuid",
      "quantity": "number",
      "price": "number"
    }
  ],
  "totalPrice": "number",
  "status": "pending|shipped|delivered|cancelled",
  "createdAt": "ISO 8601 date"
}
```

### Cart Item
```json
{
  "id": "uuid",
  "productId": "uuid",
  "name": "string",
  "price": "number",
  "quantity": "number",
  "image": "string (URL)"
}
```

---

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **ID Generation**: UUID v4
- **CORS**: Enabled
- **Database**: In-memory (data resets on restart)
- **Deployment**: Vercel

---

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

```bash
# Clone repository
git clone https://github.com/himawari19/api-sample-ecommerce.git

# Navigate to directory
cd api-sample-ecommerce

# Install dependencies
npm install

# Start server
npm start

# Server runs on http://localhost:3000
```

---

## 🚀 Deployment

### Live on Vercel

The API is already deployed on Vercel:

```
https://api-sample-ecommerce.vercel.app
```

### Auto-Deployment

Every push to GitHub automatically triggers a new deployment on Vercel.

### Deploy Your Own

1. Fork this repository
2. Connect to Vercel
3. Vercel will auto-deploy on every push

---

## 📝 API Testing Checklist

- [ ] Health check returns 200
- [ ] Get all products works
- [ ] Create product works (status 201)
- [ ] Get product by ID works
- [ ] Update product (PUT) works
- [ ] Update product (PATCH) works
- [ ] Delete product works
- [ ] Get all users works
- [ ] Create user works (status 201)
- [ ] Email validation works (duplicate check)
- [ ] Get all orders works
- [ ] Create order works (auto-calculate total)
- [ ] Get cart works
- [ ] Add to cart works
- [ ] Update cart item works
- [ ] Remove from cart works
- [ ] Clear cart works
- [ ] 404 error for non-existent resource
- [ ] 400 error for missing required fields

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
PORT=5000 npm start
```

### Module Not Found
```bash
npm install
```

### Dashboard Not Loading
- Verify server is running
- Check browser console for errors
- Ensure http://localhost:3000 is accessible

### API Not Responding
- Check server logs
- Verify API endpoint URL
- Check network tab in browser/Postman

---

## 📊 Status Codes

| Code | Meaning | Usage |
|------|---------|-------|
| 200 | OK | Successful GET, PUT, PATCH, DELETE |
| 201 | Created | Successful POST |
| 400 | Bad Request | Invalid input, missing fields |
| 404 | Not Found | Resource doesn't exist |

---

## 🎓 Learning Outcomes

This project demonstrates:

✅ **REST API Development**
- HTTP methods (GET, POST, PUT, PATCH, DELETE)
- Status codes and error handling
- Request/response format

✅ **Backend Development**
- Node.js and Express.js
- Data management
- Error handling and validation

✅ **API Testing**
- Postman testing
- Manual testing
- Error validation

✅ **Deployment**
- Vercel deployment
- Auto-deployment from GitHub
- Live API management

---

## 📸 Screenshots

### HTML Dashboard
- Beautiful testing interface
- Form-based endpoint testing
- Real-time response display

### Postman Testing
- All endpoints testable
- Environment variables
- Response validation

---

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for improvements.

---

## 📄 License

MIT License - Feel free to use this project for any purpose.

---

## 📞 Support

For issues or questions:
1. Check the API endpoints documentation above
2. Review the sample requests
3. Test with the live API
4. Check Postman console for errors

---

## 🎉 Ready to Test?

### Option 1: Live API (No Setup Required)
```
Base URL: https://api-sample-ecommerce.vercel.app/api
```

### Option 2: Local Testing
```bash
npm install
npm start
# Open http://localhost:3000
```

---

**Happy testing! 🚀**

---

**Last Updated**: January 2024

**Repository**: https://github.com/himawari19/api-sample-ecommerce

**Live API**: https://api-sample-ecommerce.vercel.app
