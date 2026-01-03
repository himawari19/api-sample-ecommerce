# 🛍️ E-Commerce API Dummy

A complete REST API for e-commerce platform with 30+ endpoints, comprehensive security features, JWT authentication, and live deployment on Vercel.

**Live API**: https://api-sample-ecommerce.vercel.app

**Repository**: https://github.com/himawari19/api-sample-ecommerce

---

## ✨ Features

- ✅ **30+ REST API Endpoints** - Full CRUD operations
- ✅ **JWT Authentication** - Secure token-based authentication with 24h expiration
- ✅ **Password Security** - Bcrypt hashing for secure password storage
- ✅ **Input Validation** - Comprehensive validation for all inputs (email, phone, price, rating, URLs)
- ✅ **Products Management** - Get, Create, Update, Delete products with validation
- ✅ **Users Management** - User registration and management with security
- ✅ **Orders Management** - Order creation and tracking with status validation
- ✅ **Shopping Cart** - Add, update, and manage cart items
- ✅ **Advanced Queries** - Pagination, Filtering, Sorting, Search
- ✅ **Rate Limiting** - Protect API from abuse (100 req/15min general, 5 req/15min auth)
- ✅ **Caching** - In-memory caching with auto-invalidation (5 minutes)
- ✅ **Security Headers** - Helmet.js for comprehensive security headers
- ✅ **Response Compression** - Gzip compression for optimized responses
- ✅ **Error Handling** - Comprehensive error handling with try-catch blocks
- ✅ **Admin Controls** - Test data reset and seeding with admin key
- ✅ **Webhook System** - Real-time event notifications
- ✅ **Performance Metrics** - Track response times and endpoint performance
- ✅ **CORS Enabled** - Cross-origin requests with configurable origin
- ✅ **Live on Vercel** - Instantly accessible API with auto-deployment

---

## 🔐 Security Features

### Authentication & Authorization
- **JWT Tokens** - Secure token-based authentication with 24-hour expiration
- **Password Hashing** - Bcrypt with 10 rounds for secure password storage
- **Email Validation** - Proper email format validation
- **Password Requirements** - Minimum 6 characters
- **Admin Key Protection** - Secure admin endpoints with rate limiting

### Input Validation
- **Email Format** - RFC-compliant email validation
- **Phone Format** - Indonesian phone number validation (08xxx format)
- **Price Validation** - Must be positive numbers
- **Rating Validation** - Must be between 0-5
- **URL Validation** - Valid URL format for images and webhooks
- **Status Validation** - Only accept valid order statuses
- **Stock Validation** - Non-negative stock values

### Security Headers
- **Helmet.js** - Comprehensive security headers (X-Frame-Options, X-Content-Type-Options, etc.)
- **CORS Protection** - Configurable CORS origin with environment variables
- **Request Size Limit** - 10MB limit to prevent DoS attacks
- **Rate Limiting** - Multi-tier rate limiting for different endpoint types

### Error Handling
- **Try-Catch Blocks** - All endpoints wrapped with error handling
- **Proper Error Responses** - Consistent error format with meaningful messages
- **No Stack Traces** - Stack traces hidden in production
- **Logging** - Console logging for debugging

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

# Create .env file
cp .env.example .env

# Update .env with your values
# JWT_SECRET=your-secret-key-here
# CORS_ORIGIN=http://localhost:3000

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
POST   /api/auth/login             # Login user (returns JWT token)
POST   /api/auth/register          # Register new user (returns JWT token)
GET    /api/auth/verify            # Verify token
```

### Products (6 endpoints)
```
GET    /api/products              # Get all products (with pagination, filtering, sorting)
GET    /api/products/:id          # Get product by ID
POST   /api/products              # Create product (with validation)
PUT    /api/products/:id          # Update product (full)
PATCH  /api/products/:id          # Update product (partial)
DELETE /api/products/:id          # Delete product
```

### Users (6 endpoints)
```
GET    /api/users                 # Get all users
GET    /api/users/:id             # Get user by ID
POST   /api/users                 # Create user (with validation)
PUT    /api/users/:id             # Update user (full)
PATCH  /api/users/:id             # Update user (partial)
DELETE /api/users/:id             # Delete user
```

### Orders (6 endpoints)
```
GET    /api/orders                # Get all orders
GET    /api/orders/:id            # Get order by ID
POST   /api/orders                # Create order
PUT    /api/orders/:id            # Update order (with status validation)
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

### Admin - Test Data Control (3 endpoints)
```
GET    /api/meta                  # Get API meta information
POST   /api/admin/reset           # Reset data on demand (requires x-admin-key)
POST   /api/admin/seed            # Seed data with scenarios (requires x-admin-key)
```

### Webhooks (3 endpoints)
```
GET    /api/webhooks              # Get all registered webhooks
POST   /api/webhooks              # Register new webhook (with URL validation)
DELETE /api/webhooks/:id          # Unregister webhook
```

### Metrics (2 endpoints)
```
GET    /api/metrics               # Get all performance metrics
GET    /api/metrics/:method/:path # Get metrics for specific endpoint
```

---

## 🔐 Authentication

### Login with JWT
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
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "john-doe",
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
}
```

### Register with Validation
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

**Validation Rules:**
- Email must be valid format
- Password minimum 6 characters
- Phone must be Indonesian format (08xxx)
- All fields trimmed and validated

### Verify Token
```
GET /api/auth/verify
Authorization: Bearer your-jwt-token-here
```

---

## 🚦 Rate Limiting

API dilindungi dengan rate limiting untuk mencegah abuse dan spam.

**Rate Limits:**

| Endpoint | Limit | Window |
|----------|-------|--------|
| General endpoints | 100 requests | 15 minutes |
| Auth (login/register) | 5 requests | 15 minutes |
| Admin endpoints | 10 requests | 1 hour |

**Response saat rate limit tercapai:**
```json
{
  "message": "Too many requests from this IP, please try again later."
}
```

**Headers yang dikembalikan:**
```
RateLimit-Limit: 100
RateLimit-Remaining: 95
RateLimit-Reset: 1704283200
```

---

## ⚡ Caching

API menggunakan in-memory caching untuk meningkatkan performa dan mengurangi beban server.

**Cache Configuration:**
- **Duration**: 5 minutes (300 seconds)
- **Scope**: GET requests only
- **Auto-clear**: Saat data dimodifikasi (POST, PUT, PATCH, DELETE)

**Cache Headers:**
```
X-Cache: HIT    # Response dari cache
X-Cache: MISS   # Response dari database
```

**Cache Invalidation:**
- Otomatis saat ada POST/PUT/PATCH/DELETE
- Otomatis saat `/api/admin/reset` dipanggil
- Otomatis saat `/api/admin/seed` dipanggil

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

### Pagination
```
GET /api/products?page=1&limit=5
GET /api/users?page=2&limit=10
GET /api/orders?page=1&limit=20
```

### Sorting
```
GET /api/products?sort=price&order=asc
GET /api/products?sort=rating&order=desc
GET /api/users?sort=name&order=asc
```

### Filtering

**Products - Filter by Category:**
```
GET /api/products?category=Electronics
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
GET /api/orders?status=cancelled
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
```

**Search Users:**
```
GET /api/users?q=john
```

### Combining Parameters

```
GET /api/products?category=Electronics&sort=price&order=asc&page=1&limit=5
GET /api/orders?status=shipped&userId=john-doe&sort=totalPrice&order=desc
```

---

## 🔔 Webhook System

API menggunakan webhook untuk real-time event notifications saat ada perubahan data.

**Supported Events:**
- `product.created`, `product.updated`, `product.deleted`
- `user.created`, `user.updated`, `user.deleted`
- `order.created`, `order.updated`, `order.deleted`
- `cart.updated`, `cart.cleared`

### Register Webhook

```
POST /api/webhooks
Content-Type: application/json

{
  "event": "order.created",
  "url": "https://your-domain.com/webhook"
}
```

**URL Validation:**
- Must be valid HTTPS URL format
- Invalid URLs will be rejected

---

## 📊 Performance Metrics

API melacak performance metrics untuk setiap endpoint.

### Get All Metrics

```
GET /api/metrics
```

**Response includes:**
- Total requests per endpoint
- Average response time
- Min/Max response time
- Last request time

### Response Time Header

Setiap response akan include header:
```
X-Response-Time: 45ms
```

---

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Authentication**: JWT (jsonwebtoken)
- **Password Hashing**: Bcrypt
- **Security**: Helmet.js
- **Compression**: Compression middleware
- **Rate Limiting**: express-rate-limit
- **ID Generation**: UUID v4
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

# Create .env file
cp .env.example .env

# Update .env with your configuration
# JWT_SECRET=your-secret-key-here
# CORS_ORIGIN=http://localhost:3000
# ADMIN_KEY=your-admin-key-here

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

---

## 📝 API Testing Checklist

- [ ] Health check returns 200
- [ ] Register user with validation
- [ ] Login returns JWT token
- [ ] JWT token has 24h expiration
- [ ] Password is bcrypt hashed
- [ ] Email validation works
- [ ] Phone validation works
- [ ] Price validation works
- [ ] Rating validation works (0-5)
- [ ] Create product works
- [ ] Get all products works
- [ ] Update product works
- [ ] Delete product works
- [ ] Create order works
- [ ] Order status validation works
- [ ] Add to cart works
- [ ] Clear cart works
- [ ] Webhook URL validation works
- [ ] Rate limiting works
- [ ] Cache clearing works
- [ ] Security headers present
- [ ] Response compression works

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

### JWT Token Issues
- Verify JWT_SECRET is set in .env
- Check token expiration (24 hours)
- Ensure token format is correct

### Password Hashing Issues
- Verify bcrypt is installed
- Check password is at least 6 characters
- Ensure password is hashed before storage

---

## 📊 Status Codes

| Code | Meaning | Usage |
|------|---------|-------|
| 200 | OK | Successful GET, PUT, PATCH, DELETE |
| 201 | Created | Successful POST |
| 400 | Bad Request | Invalid input, validation failed |
| 401 | Unauthorized | Invalid credentials or token |
| 404 | Not Found | Resource doesn't exist |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Server Error | Internal server error |

---

## 🎓 Learning Outcomes

This project demonstrates:

✅ **Security Best Practices**
- JWT authentication
- Password hashing with bcrypt
- Input validation and sanitization
- Security headers with Helmet
- Rate limiting

✅ **REST API Development**
- HTTP methods and status codes
- Error handling and validation
- Caching strategies
- Webhook systems

✅ **Backend Development**
- Node.js and Express.js
- Data management
- Performance optimization
- Comprehensive error handling

✅ **Deployment**
- Vercel deployment
- Auto-deployment from GitHub
- Environment configuration

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
4. Check console for error messages

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

**Last Updated**: January 2026

**Repository**: https://github.com/himawari19/api-sample-ecommerce

**Live API**: https://api-sample-ecommerce.vercel.app

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

### Admin - Test Data Control (3 endpoints)
```
GET    /api/meta                  # Get API meta information
POST   /api/admin/reset           # Reset data on demand (requires x-admin-key)
POST   /api/admin/seed            # Seed data with scenarios (requires x-admin-key)
```

### Webhooks (3 endpoints)
```
GET    /api/webhooks              # Get all registered webhooks
POST   /api/webhooks              # Register new webhook
DELETE /api/webhooks/:id          # Unregister webhook
```

### Metrics (2 endpoints)
```
GET    /api/metrics               # Get all performance metrics
GET    /api/metrics/:method/:path # Get metrics for specific endpoint
```

---

## 🚦 Rate Limiting

API dilindungi dengan rate limiting untuk mencegah abuse dan spam.

**Rate Limits:**

| Endpoint | Limit | Window |
|----------|-------|--------|
| General endpoints | 100 requests | 15 minutes |
| Auth (login/register) | 5 requests | 15 minutes |
| Admin endpoints | 10 requests | 1 hour |

**Response saat rate limit tercapai:**
```json
{
  "message": "Too many requests from this IP, please try again later."
}
```

**Headers yang dikembalikan:**
```
RateLimit-Limit: 100
RateLimit-Remaining: 95
RateLimit-Reset: 1704283200
```

---

## ⚡ Caching

API menggunakan in-memory caching untuk meningkatkan performa dan mengurangi beban server.

**Cache Configuration:**
- **Duration**: 5 minutes (300 seconds)
- **Scope**: GET requests only
- **Auto-clear**: Saat data dimodifikasi (POST, PUT, PATCH, DELETE)

**Cache Headers:**
```
X-Cache: HIT    # Response dari cache
X-Cache: MISS   # Response dari database
```

**Contoh:**
```
GET /api/products?page=1&limit=10
Response Header: X-Cache: MISS (first request)

GET /api/products?page=1&limit=10
Response Header: X-Cache: HIT (cached response)
```

**Cache Invalidation:**
- Otomatis saat ada POST/PUT/PATCH/DELETE
- Otomatis saat `/api/admin/reset` dipanggil
- Otomatis saat `/api/admin/seed` dipanggil

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

## 🚦 Rate Limiting

API dilindungi dengan rate limiting untuk mencegah abuse dan spam.

**Rate Limits:**

| Endpoint | Limit | Window |
|----------|-------|--------|
| General endpoints | 100 requests | 15 minutes |
| Auth (login/register) | 5 requests | 15 minutes |
| Admin endpoints | 10 requests | 1 hour |

**Response saat rate limit tercapai:**
```json
{
  "message": "Too many requests from this IP, please try again later."
}
```

**Headers yang dikembalikan:**
```
RateLimit-Limit: 100
RateLimit-Remaining: 95
RateLimit-Reset: 1704283200
```

---

## 📚 API Documentation (Swagger/OpenAPI)

Interactive API documentation tersedia di:

```
https://api-sample-ecommerce.vercel.app/api/docs
```

**Fitur Swagger UI:**
- ✅ Interactive endpoint testing
- ✅ Request/response examples
- ✅ Parameter documentation
- ✅ Schema definitions
- ✅ Try it out functionality

**Akses lokal:**
```
http://localhost:3000/api/docs
```

---

## 🔔 Webhook System

API menggunakan webhook untuk real-time event notifications saat ada perubahan data.

**Supported Events:**
- `product.created` - Saat product baru dibuat
- `product.updated` - Saat product diupdate
- `product.deleted` - Saat product dihapus
- `user.created` - Saat user baru register
- `user.updated` - Saat user profile diupdate
- `user.deleted` - Saat user dihapus
- `order.created` - Saat order baru dibuat
- `order.updated` - Saat order status berubah
- `order.deleted` - Saat order dihapus
- `cart.updated` - Saat cart diupdate
- `cart.cleared` - Saat cart dikosongkan

### Register Webhook

```
POST /api/webhooks
Content-Type: application/json

{
  "event": "order.created",
  "url": "https://your-domain.com/webhook"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Webhook registered successfully",
  "data": {
    "id": "webhook-id",
    "event": "order.created",
    "url": "https://your-domain.com/webhook",
    "active": true,
    "createdAt": "2026-01-03T10:30:00Z"
  }
}
```

### Get All Webhooks

```
GET /api/webhooks
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "event": "order.created",
      "url": "https://your-domain.com/webhook",
      "active": true,
      "createdAt": "2026-01-03T10:30:00Z"
    }
  ],
  "total": 1
}
```

### Unregister Webhook

```
DELETE /api/webhooks/:id
```

### Webhook Payload Format

Saat event terjadi, webhook akan menerima payload:

```json
{
  "event": "order.created",
  "timestamp": "2026-01-03T10:30:00Z",
  "data": {
    "id": "order-123",
    "userId": "user-456",
    "items": [...],
    "totalPrice": 15000000,
    "status": "pending",
    "createdAt": "2026-01-03T10:30:00Z"
  }
}
```

---

## 📊 Performance Metrics

API melacak performance metrics untuk setiap endpoint untuk monitoring dan optimization.

**Metrics yang Ditrack:**
- Total requests per endpoint
- Average response time
- Min/Max response time
- Last request time

### Get All Metrics

```
GET /api/metrics
```

**Response:**
```json
{
  "success": true,
  "data": {
    "summary": {
      "totalEndpoints": 30,
      "totalRequests": 1250,
      "avgResponseTime": 45,
      "slowestEndpoint": {
        "endpoint": "POST /api/orders",
        "avgTime": 120
      },
      "fastestEndpoint": {
        "endpoint": "GET /api/health",
        "avgTime": 2
      }
    },
    "endpoints": [
      {
        "endpoint": "GET /api/products",
        "method": "GET",
        "path": "/api/products",
        "totalRequests": 150,
        "totalTime": 6750,
        "minTime": 5,
        "maxTime": 250,
        "avgTime": 45,
        "lastRequestTime": "2026-01-03T10:30:00Z"
      }
    ]
  }
}
```

### Get Metrics for Specific Endpoint

```
GET /api/metrics/GET/api/products
```

**Response:**
```json
{
  "success": true,
  "data": {
    "endpoint": "GET /api/products",
    "method": "GET",
    "path": "/api/products",
    "totalRequests": 150,
    "totalTime": 6750,
    "minTime": 5,
    "maxTime": 250,
    "avgTime": 45,
    "lastRequestTime": "2026-01-03T10:30:00Z"
  }
}
```

### Response Time Header

Setiap response akan include header:
```
X-Response-Time: 45ms
```

---

### Overview

Admin endpoints memungkinkan kontrol penuh terhadap test data untuk CI/CD testing dan development.

**Semua admin endpoints memerlukan header:**
```
x-admin-key: your-secret-admin-key
```

### GET /api/meta

Mendapatkan informasi meta tentang API, termasuk versi, fitur, dan status data.

```
GET /api/meta
```

**Response:**
```json
{
  "success": true,
  "data": {
    "apiVersion": "1.0.0",
    "environment": "production",
    "dataState": {
      "products": 10,
      "users": 10,
      "orders": 10,
      "cartItems": 0
    },
    "features": {
      "authentication": true,
      "pagination": true,
      "filtering": true,
      "sorting": true,
      "search": true,
      "testDataControl": true,
      "autoReset": "1 hour"
    },
    "endpoints": {
      "total": 30,
      "categories": ["Health", "Auth", "Products", "Users", "Orders", "Cart", "Admin"]
    },
    "timestamp": "2026-01-03T10:30:00Z",
    "uptime": "3600s"
  }
}
```

### POST /api/admin/reset

Reset semua data ke initial state on demand.

```
POST /api/admin/reset
Header: x-admin-key: your-secret-key
```

**Response:**
```json
{
  "success": true,
  "message": "Data reset successfully to initial state",
  "data": {
    "products": 10,
    "users": 10,
    "orders": 10,
    "cart": 0,
    "timestamp": "2026-01-03T10:30:00Z"
  }
}
```

### POST /api/admin/seed

Seed data dengan scenario tertentu untuk testing.

**Scenarios:**

**1. happy_path** - Default scenario
```
POST /api/admin/seed?scenario=happy_path
Header: x-admin-key: your-secret-key
```
- Semua products tersedia
- Users siap
- Orders ready for processing

**2. low_stock** - Test low/zero stock
```
POST /api/admin/seed?scenario=low_stock
Header: x-admin-key: your-secret-key
```
- Beberapa products dengan stock rendah
- Beberapa products out of stock
- Untuk testing stock validation

**3. high_volume** - Test volume tinggi
```
POST /api/admin/seed?scenario=high_volume
Header: x-admin-key: your-secret-key
```
- 50 orders dibuat
- Berbagai status (pending, shipped, delivered)
- Untuk testing pagination dan filtering

**4. default** - Reset ke initial state
```
POST /api/admin/seed?scenario=default
Header: x-admin-key: your-secret-key
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
