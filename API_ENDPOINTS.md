# 📚 API Endpoints Reference

Complete reference untuk semua endpoint E-Commerce API.

---

## 🏥 Health Check

### Check API Status
```http
GET /api/health
```

**Response (200):**
```json
{
  "success": true,
  "message": "API is running",
  "timestamp": "2024-01-02T10:00:00.000Z"
}
```

---

## 🛍️ PRODUCTS

### 1. Get All Products
```http
GET /api/products
```

**Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "name": "Laptop Gaming",
      "price": 15000000,
      "category": "Electronics",
      "stock": 10,
      "description": "High performance gaming laptop",
      "image": "https://via.placeholder.com/300x300?text=Laptop",
      "rating": 4.5,
      "createdAt": "2024-01-02T10:00:00.000Z"
    }
  ],
  "total": 1
}
```

---

### 2. Get Product by ID
```http
GET /api/products/:id
```

**Parameters:**
- `id` (string, required) - Product ID

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "Laptop Gaming",
    "price": 15000000,
    "category": "Electronics",
    "stock": 10,
    "description": "High performance gaming laptop",
    "image": "https://via.placeholder.com/300x300?text=Laptop",
    "rating": 4.5,
    "createdAt": "2024-01-02T10:00:00.000Z"
  }
}
```

**Response (404):**
```json
{
  "success": false,
  "message": "Product not found"
}
```

---

### 3. Create Product
```http
POST /api/products
Content-Type: application/json
```

**Request Body:**
```json
{
  "name": "New Product",
  "price": 500000,
  "category": "Electronics",
  "stock": 20,
  "description": "Product description",
  "image": "https://example.com/image.jpg",
  "rating": 4.5
}
```

**Required Fields:**
- `name` (string)
- `price` (number)
- `category` (string)

**Optional Fields:**
- `stock` (number, default: 0)
- `description` (string, default: "")
- `image` (string, default: placeholder)
- `rating` (number, default: 0)

**Response (201):**
```json
{
  "success": true,
  "message": "Product created successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440001",
    "name": "New Product",
    "price": 500000,
    "category": "Electronics",
    "stock": 20,
    "description": "Product description",
    "image": "https://example.com/image.jpg",
    "rating": 4.5,
    "createdAt": "2024-01-02T10:00:00.000Z"
  }
}
```

**Response (400):**
```json
{
  "success": false,
  "message": "Name, price, and category are required"
}
```

---

### 4. Update Product (Full - PUT)
```http
PUT /api/products/:id
Content-Type: application/json
```

**Request Body:**
```json
{
  "name": "Updated Product",
  "price": 600000,
  "category": "Electronics",
  "stock": 25,
  "description": "Updated description",
  "image": "https://example.com/updated.jpg",
  "rating": 4.8
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Product updated successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "Updated Product",
    "price": 600000,
    "category": "Electronics",
    "stock": 25,
    "description": "Updated description",
    "image": "https://example.com/updated.jpg",
    "rating": 4.8,
    "createdAt": "2024-01-02T10:00:00.000Z"
  }
}
```

---

### 5. Update Product (Partial - PATCH)
```http
PATCH /api/products/:id
Content-Type: application/json
```

**Request Body (hanya field yang ingin diupdate):**
```json
{
  "price": 550000,
  "stock": 30
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Product updated successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "Updated Product",
    "price": 550000,
    "category": "Electronics",
    "stock": 30,
    "description": "Updated description",
    "image": "https://example.com/updated.jpg",
    "rating": 4.8,
    "createdAt": "2024-01-02T10:00:00.000Z"
  }
}
```

---

### 6. Delete Product
```http
DELETE /api/products/:id
```

**Response (200):**
```json
{
  "success": true,
  "message": "Product deleted successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "Updated Product",
    "price": 550000,
    "category": "Electronics",
    "stock": 30,
    "description": "Updated description",
    "image": "https://example.com/updated.jpg",
    "rating": 4.8,
    "createdAt": "2024-01-02T10:00:00.000Z"
  }
}
```

---

## 👥 USERS

### 1. Get All Users
```http
GET /api/users
```

**Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440100",
      "name": "John Doe",
      "email": "john@example.com",
      "password": "password123",
      "phone": "08123456789",
      "address": "Jl. Merdeka No. 1",
      "createdAt": "2024-01-02T10:00:00.000Z"
    }
  ],
  "total": 1
}
```

---

### 2. Get User by ID
```http
GET /api/users/:id
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440100",
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "phone": "08123456789",
    "address": "Jl. Merdeka No. 1",
    "createdAt": "2024-01-02T10:00:00.000Z"
  }
}
```

---

### 3. Create User
```http
POST /api/users
Content-Type: application/json
```

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "password": "password456",
  "phone": "08987654321",
  "address": "Jl. Sudirman No. 2"
}
```

**Required Fields:**
- `name` (string)
- `email` (string, must be unique)
- `password` (string)

**Optional Fields:**
- `phone` (string)
- `address` (string)

**Response (201):**
```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440101",
    "name": "Jane Smith",
    "email": "jane@example.com",
    "password": "password456",
    "phone": "08987654321",
    "address": "Jl. Sudirman No. 2",
    "createdAt": "2024-01-02T10:00:00.000Z"
  }
}
```

**Response (400 - Email exists):**
```json
{
  "success": false,
  "message": "Email already exists"
}
```

---

### 4. Update User (PUT)
```http
PUT /api/users/:id
Content-Type: application/json
```

**Request Body:**
```json
{
  "name": "Jane Smith Updated",
  "email": "jane.updated@example.com",
  "phone": "08111111111",
  "address": "Jl. Gatot Subroto No. 1"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "User updated successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440101",
    "name": "Jane Smith Updated",
    "email": "jane.updated@example.com",
    "password": "password456",
    "phone": "08111111111",
    "address": "Jl. Gatot Subroto No. 1",
    "createdAt": "2024-01-02T10:00:00.000Z"
  }
}
```

---

### 5. Update User (PATCH)
```http
PATCH /api/users/:id
Content-Type: application/json
```

**Request Body:**
```json
{
  "phone": "08222222222"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "User updated successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440101",
    "name": "Jane Smith Updated",
    "email": "jane.updated@example.com",
    "password": "password456",
    "phone": "08222222222",
    "address": "Jl. Gatot Subroto No. 1",
    "createdAt": "2024-01-02T10:00:00.000Z"
  }
}
```

---

### 6. Delete User
```http
DELETE /api/users/:id
```

**Response (200):**
```json
{
  "success": true,
  "message": "User deleted successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440101",
    "name": "Jane Smith Updated",
    "email": "jane.updated@example.com",
    "password": "password456",
    "phone": "08222222222",
    "address": "Jl. Gatot Subroto No. 1",
    "createdAt": "2024-01-02T10:00:00.000Z"
  }
}
```

---

## 📦 ORDERS

### 1. Get All Orders
```http
GET /api/orders
```

**Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440200",
      "userId": "550e8400-e29b-41d4-a716-446655440100",
      "items": [
        {
          "productId": "550e8400-e29b-41d4-a716-446655440000",
          "quantity": 2,
          "price": 1500000
        }
      ],
      "totalPrice": 3000000,
      "status": "pending",
      "createdAt": "2024-01-02T10:00:00.000Z"
    }
  ],
  "total": 1
}
```

---

### 2. Get Order by ID
```http
GET /api/orders/:id
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440200",
    "userId": "550e8400-e29b-41d4-a716-446655440100",
    "items": [
      {
        "productId": "550e8400-e29b-41d4-a716-446655440000",
        "quantity": 2,
        "price": 1500000
      }
    ],
    "totalPrice": 3000000,
    "status": "pending",
    "createdAt": "2024-01-02T10:00:00.000Z"
  }
}
```

---

### 3. Create Order
```http
POST /api/orders
Content-Type: application/json
```

**Request Body:**
```json
{
  "userId": "550e8400-e29b-41d4-a716-446655440100",
  "items": [
    {
      "productId": "550e8400-e29b-41d4-a716-446655440000",
      "quantity": 2,
      "price": 1500000
    },
    {
      "productId": "550e8400-e29b-41d4-a716-446655440001",
      "quantity": 1,
      "price": 500000
    }
  ]
}
```

**Required Fields:**
- `userId` (string)
- `items` (array, min 1 item)
  - `productId` (string)
  - `quantity` (number)
  - `price` (number)

**Response (201):**
```json
{
  "success": true,
  "message": "Order created successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440201",
    "userId": "550e8400-e29b-41d4-a716-446655440100",
    "items": [
      {
        "productId": "550e8400-e29b-41d4-a716-446655440000",
        "quantity": 2,
        "price": 1500000
      },
      {
        "productId": "550e8400-e29b-41d4-a716-446655440001",
        "quantity": 1,
        "price": 500000
      }
    ],
    "totalPrice": 3500000,
    "status": "pending",
    "createdAt": "2024-01-02T10:00:00.000Z"
  }
}
```

---

### 4. Update Order (PUT)
```http
PUT /api/orders/:id
Content-Type: application/json
```

**Request Body:**
```json
{
  "status": "shipped",
  "items": [
    {
      "productId": "550e8400-e29b-41d4-a716-446655440000",
      "quantity": 3,
      "price": 1500000
    }
  ]
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Order updated successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440201",
    "userId": "550e8400-e29b-41d4-a716-446655440100",
    "items": [
      {
        "productId": "550e8400-e29b-41d4-a716-446655440000",
        "quantity": 3,
        "price": 1500000
      }
    ],
    "totalPrice": 4500000,
    "status": "shipped",
    "createdAt": "2024-01-02T10:00:00.000Z"
  }
}
```

---

### 5. Update Order (PATCH)
```http
PATCH /api/orders/:id
Content-Type: application/json
```

**Request Body:**
```json
{
  "status": "delivered"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Order updated successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440201",
    "userId": "550e8400-e29b-41d4-a716-446655440100",
    "items": [
      {
        "productId": "550e8400-e29b-41d4-a716-446655440000",
        "quantity": 3,
        "price": 1500000
      }
    ],
    "totalPrice": 4500000,
    "status": "delivered",
    "createdAt": "2024-01-02T10:00:00.000Z"
  }
}
```

---

### 6. Delete Order
```http
DELETE /api/orders/:id
```

**Response (200):**
```json
{
  "success": true,
  "message": "Order deleted successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440201",
    "userId": "550e8400-e29b-41d4-a716-446655440100",
    "items": [
      {
        "productId": "550e8400-e29b-41d4-a716-446655440000",
        "quantity": 3,
        "price": 1500000
      }
    ],
    "totalPrice": 4500000,
    "status": "delivered",
    "createdAt": "2024-01-02T10:00:00.000Z"
  }
}
```

---

## 🛒 CART

### 1. Get Cart
```http
GET /api/cart
```

**Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440300",
      "productId": "550e8400-e29b-41d4-a716-446655440000",
      "name": "Laptop Gaming",
      "price": 15000000,
      "quantity": 2,
      "image": "https://via.placeholder.com/300x300?text=Laptop"
    }
  ],
  "total": 1
}
```

---

### 2. Add to Cart
```http
POST /api/cart
Content-Type: application/json
```

**Request Body:**
```json
{
  "productId": "550e8400-e29b-41d4-a716-446655440000",
  "quantity": 2
}
```

**Required Fields:**
- `productId` (string)
- `quantity` (number)

**Response (201):**
```json
{
  "success": true,
  "message": "Item added to cart",
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440300",
      "productId": "550e8400-e29b-41d4-a716-446655440000",
      "name": "Laptop Gaming",
      "price": 15000000,
      "quantity": 2,
      "image": "https://via.placeholder.com/300x300?text=Laptop"
    }
  ]
}
```

---

### 3. Update Cart Item
```http
PUT /api/cart/:productId
Content-Type: application/json
```

**Request Body:**
```json
{
  "quantity": 5
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Cart updated successfully",
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440300",
      "productId": "550e8400-e29b-41d4-a716-446655440000",
      "name": "Laptop Gaming",
      "price": 15000000,
      "quantity": 5,
      "image": "https://via.placeholder.com/300x300?text=Laptop"
    }
  ]
}
```

---

### 4. Remove from Cart
```http
DELETE /api/cart/:productId
```

**Response (200):**
```json
{
  "success": true,
  "message": "Item removed from cart",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440300",
    "productId": "550e8400-e29b-41d4-a716-446655440000",
    "name": "Laptop Gaming",
    "price": 15000000,
    "quantity": 5,
    "image": "https://via.placeholder.com/300x300?text=Laptop"
  }
}
```

---

### 5. Clear Cart
```http
DELETE /api/cart
```

**Response (200):**
```json
{
  "success": true,
  "message": "Cart cleared successfully"
}
```

---

## 📊 Status Codes

| Code | Meaning | Usage |
|------|---------|-------|
| 200 | OK | Successful GET, PUT, PATCH, DELETE |
| 201 | Created | Successful POST |
| 400 | Bad Request | Invalid input, missing required fields |
| 404 | Not Found | Resource tidak ditemukan |

---

## 🔑 Common Error Responses

### Missing Required Fields
```json
{
  "success": false,
  "message": "Name, price, and category are required"
}
```

### Resource Not Found
```json
{
  "success": false,
  "message": "Product not found"
}
```

### Duplicate Email
```json
{
  "success": false,
  "message": "Email already exists"
}
```

---

## 📝 Notes

- Semua ID menggunakan UUID v4
- Timestamps dalam ISO 8601 format
- Prices dalam Rupiah (IDR)
- Data disimpan in-memory (reset saat restart)
- CORS enabled untuk semua origins

---

**Last Updated: January 2, 2024**
