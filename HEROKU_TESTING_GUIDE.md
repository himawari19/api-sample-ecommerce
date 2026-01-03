# 🧪 Heroku Testing Guide - Complete

Panduan lengkap untuk testing API Anda yang sudah live di Heroku.

---

## 🎯 Sebelum Mulai

Pastikan Anda sudah:
- ✅ Deploy ke Heroku (ikuti HEROKU_DEPLOYMENT.md)
- ✅ App sudah live
- ✅ Punya Heroku app URL (contoh: `https://ecommerce-api-john.herokuapp.com`)

---

## 🌐 Testing via Browser

### Test 1: Health Check

Buka browser, akses:

```
https://your-app-name.herokuapp.com/api/health
```

**Expected Response:**
```json
{
  "success": true,
  "message": "API is running",
  "timestamp": "2024-01-02T10:00:00.000Z"
}
```

✅ Jika berhasil, API Anda live!

---

### Test 2: Get All Products

```
https://your-app-name.herokuapp.com/api/products
```

**Expected Response:**
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
    },
    {
      "id": "550e8400-e29b-41d4-a716-446655440001",
      "name": "Smartphone Pro",
      "price": 8000000,
      "category": "Electronics",
      "stock": 25,
      "description": "Latest smartphone with advanced features",
      "image": "https://via.placeholder.com/300x300?text=Smartphone",
      "rating": 4.8,
      "createdAt": "2024-01-02T10:00:00.000Z"
    },
    {
      "id": "550e8400-e29b-41d4-a716-446655440002",
      "name": "Wireless Headphones",
      "price": 1500000,
      "category": "Accessories",
      "stock": 50,
      "description": "Premium wireless headphones with noise cancellation",
      "image": "https://via.placeholder.com/300x300?text=Headphones",
      "rating": 4.3,
      "createdAt": "2024-01-02T10:00:00.000Z"
    }
  ],
  "total": 3
}
```

✅ Anda bisa lihat 3 sample products!

---

### Test 3: Get Specific Product

Copy salah satu product ID dari response sebelumnya, akses:

```
https://your-app-name.herokuapp.com/api/products/550e8400-e29b-41d4-a716-446655440000
```

**Expected Response:**
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

✅ Berhasil get product by ID!

---

## 📮 Testing dengan Postman

### Setup Postman

1. **Buka Postman**
2. **Create New Environment**
   - Klik "Environments" di sidebar
   - Klik "+"
   - Name: `Heroku`
   - Add variable:
     - **Variable:** `base_url`
     - **Initial value:** `https://your-app-name.herokuapp.com/api`
     - **Current value:** `https://your-app-name.herokuapp.com/api`
   - Klik Save

3. **Select Environment**
   - Di top right, select `Heroku` environment

---

### Test 1: Health Check

**Method:** GET
**URL:** `{{base_url}}/health`

Klik Send

**Expected Status:** 200
**Expected Response:**
```json
{
  "success": true,
  "message": "API is running",
  "timestamp": "2024-01-02T10:00:00.000Z"
}
```

---

### Test 2: Get All Products

**Method:** GET
**URL:** `{{base_url}}/products`

Klik Send

**Expected Status:** 200
**Expected Response:** Array of 3 products

---

### Test 3: Create Product

**Method:** POST
**URL:** `{{base_url}}/products`
**Headers:**
```
Content-Type: application/json
```
**Body (raw JSON):**
```json
{
  "name": "Gaming Mouse",
  "price": 500000,
  "category": "Accessories",
  "stock": 30,
  "description": "High precision gaming mouse",
  "image": "https://via.placeholder.com/300x300?text=Mouse",
  "rating": 4.6
}
```

Klik Send

**Expected Status:** 201
**Expected Response:**
```json
{
  "success": true,
  "message": "Product created successfully",
  "data": {
    "id": "new-uuid-here",
    "name": "Gaming Mouse",
    "price": 500000,
    "category": "Accessories",
    "stock": 30,
    "description": "High precision gaming mouse",
    "image": "https://via.placeholder.com/300x300?text=Mouse",
    "rating": 4.6,
    "createdAt": "2024-01-02T10:00:00.000Z"
  }
}
```

✅ Product baru berhasil dibuat!

---

### Test 4: Update Product (PUT)

**Method:** PUT
**URL:** `{{base_url}}/products/550e8400-e29b-41d4-a716-446655440000`
**Body (raw JSON):**
```json
{
  "name": "Laptop Gaming Pro",
  "price": 18000000,
  "category": "Electronics",
  "stock": 15,
  "description": "High performance gaming laptop with RTX 4090",
  "image": "https://via.placeholder.com/300x300?text=LaptopPro",
  "rating": 4.9
}
```

Klik Send

**Expected Status:** 200
**Expected Response:** Product dengan data yang sudah diupdate

---

### Test 5: Update Product (PATCH)

**Method:** PATCH
**URL:** `{{base_url}}/products/550e8400-e29b-41d4-a716-446655440000`
**Body (raw JSON):**
```json
{
  "price": 17000000,
  "stock": 20
}
```

Klik Send

**Expected Status:** 200
**Expected Response:** Product dengan hanya price dan stock yang berubah

---

### Test 6: Delete Product

**Method:** DELETE
**URL:** `{{base_url}}/products/550e8400-e29b-41d4-a716-446655440000`

Klik Send

**Expected Status:** 200
**Expected Response:**
```json
{
  "success": true,
  "message": "Product deleted successfully",
  "data": { ... }
}
```

---

### Test 7: Get Deleted Product (Should 404)

**Method:** GET
**URL:** `{{base_url}}/products/550e8400-e29b-41d4-a716-446655440000`

Klik Send

**Expected Status:** 404
**Expected Response:**
```json
{
  "success": false,
  "message": "Product not found"
}
```

✅ Error handling bekerja!

---

## 👥 Testing Users Endpoints

### Create User

**Method:** POST
**URL:** `{{base_url}}/users`
**Body:**
```json
{
  "name": "Budi Santoso",
  "email": "budi@example.com",
  "password": "secure123",
  "phone": "08123456789",
  "address": "Jl. Ahmad Yani No. 10"
}
```

**Expected Status:** 201

---

### Get All Users

**Method:** GET
**URL:** `{{base_url}}/users`

**Expected Status:** 200

---

### Update User

**Method:** PUT
**URL:** `{{base_url}}/users/{user_id}`
**Body:**
```json
{
  "name": "Budi Santoso Updated",
  "email": "budi.updated@example.com",
  "phone": "08111111111",
  "address": "Jl. Sudirman No. 5"
}
```

**Expected Status:** 200

---

## 📦 Testing Orders Endpoints

### Create Order

**Method:** POST
**URL:** `{{base_url}}/orders`
**Body:**
```json
{
  "userId": "550e8400-e29b-41d4-a716-446655440100",
  "items": [
    {
      "productId": "550e8400-e29b-41d4-a716-446655440001",
      "quantity": 2,
      "price": 1500000
    }
  ]
}
```

**Expected Status:** 201

---

### Get All Orders

**Method:** GET
**URL:** `{{base_url}}/orders`

**Expected Status:** 200

---

### Update Order Status

**Method:** PATCH
**URL:** `{{base_url}}/orders/{order_id}`
**Body:**
```json
{
  "status": "shipped"
}
```

**Expected Status:** 200

---

## 🛒 Testing Cart Endpoints

### Get Cart

**Method:** GET
**URL:** `{{base_url}}/cart`

**Expected Status:** 200

---

### Add to Cart

**Method:** POST
**URL:** `{{base_url}}/cart`
**Body:**
```json
{
  "productId": "550e8400-e29b-41d4-a716-446655440001",
  "quantity": 2
}
```

**Expected Status:** 201

---

### Update Cart Item

**Method:** PUT
**URL:** `{{base_url}}/cart/550e8400-e29b-41d4-a716-446655440001`
**Body:**
```json
{
  "quantity": 5
}
```

**Expected Status:** 200

---

### Remove from Cart

**Method:** DELETE
**URL:** `{{base_url}}/cart/550e8400-e29b-41d4-a716-446655440001`

**Expected Status:** 200

---

### Clear Cart

**Method:** DELETE
**URL:** `{{base_url}}/cart`

**Expected Status:** 200

---

## 📊 Complete Testing Checklist

### Products (7 tests)
- [ ] GET /api/products (200)
- [ ] GET /api/products/:id (200)
- [ ] POST /api/products (201)
- [ ] PUT /api/products/:id (200)
- [ ] PATCH /api/products/:id (200)
- [ ] DELETE /api/products/:id (200)
- [ ] GET deleted product (404)

### Users (6 tests)
- [ ] GET /api/users (200)
- [ ] GET /api/users/:id (200)
- [ ] POST /api/users (201)
- [ ] PUT /api/users/:id (200)
- [ ] PATCH /api/users/:id (200)
- [ ] DELETE /api/users/:id (200)

### Orders (6 tests)
- [ ] GET /api/orders (200)
- [ ] GET /api/orders/:id (200)
- [ ] POST /api/orders (201)
- [ ] PUT /api/orders/:id (200)
- [ ] PATCH /api/orders/:id (200)
- [ ] DELETE /api/orders/:id (200)

### Cart (5 tests)
- [ ] GET /api/cart (200)
- [ ] POST /api/cart (201)
- [ ] PUT /api/cart/:productId (200)
- [ ] DELETE /api/cart/:productId (200)
- [ ] DELETE /api/cart (200)

### Health (1 test)
- [ ] GET /api/health (200)

**Total: 25 tests**

---

## 🎯 Testing Workflow

### Workflow 1: Basic Testing
1. Test health check
2. Get all products
3. Get specific product
4. Create product
5. Update product
6. Delete product

### Workflow 2: Full CRUD
1. Create resource
2. Read resource
3. Update resource (PUT)
4. Update resource (PATCH)
5. Delete resource
6. Verify deleted

### Workflow 3: Error Testing
1. Get non-existent resource (404)
2. Create with missing fields (400)
3. Update non-existent resource (404)
4. Delete non-existent resource (404)

---

## 📸 Screenshot untuk Portfolio

Ambil screenshot dari:

1. **Health Check Response**
   - Menunjukkan API berjalan

2. **Get All Products**
   - Menunjukkan data yang ada

3. **Create Product**
   - Request dan response

4. **Update Product (PUT vs PATCH)**
   - Perbedaan antara PUT dan PATCH

5. **Error Handling**
   - 404 Not Found
   - 400 Bad Request

6. **Complex Operations**
   - Create Order dengan multiple items
   - Update Order dan recalculate total

7. **Cart Operations**
   - Add to cart
   - Update quantity
   - Clear cart

---

## 🔗 Share Testing Results

### Format untuk Portfolio

```markdown
## API Testing Results

### Health Check
✅ Status: 200
✅ Response: API is running

### Products
✅ GET /products - 200
✅ POST /products - 201
✅ PUT /products/:id - 200
✅ PATCH /products/:id - 200
✅ DELETE /products/:id - 200

### Users
✅ GET /users - 200
✅ POST /users - 201
✅ PUT /users/:id - 200
✅ PATCH /users/:id - 200
✅ DELETE /users/:id - 200

### Orders
✅ GET /orders - 200
✅ POST /orders - 201
✅ PUT /orders/:id - 200
✅ PATCH /orders/:id - 200
✅ DELETE /orders/:id - 200

### Cart
✅ GET /cart - 200
✅ POST /cart - 201
✅ PUT /cart/:productId - 200
✅ DELETE /cart/:productId - 200
✅ DELETE /cart - 200

**Total: 25 endpoints tested successfully**
```

---

## 🎓 Learning Points

Dengan testing ini, Anda demonstrate:

1. **API Testing Skills**
   - GET, POST, PUT, PATCH, DELETE
   - Status codes
   - Request/Response validation

2. **Error Handling**
   - 404 Not Found
   - 400 Bad Request
   - Meaningful error messages

3. **Data Validation**
   - Required fields
   - Duplicate checking
   - Data type validation

4. **Postman Skills**
   - Environment setup
   - Variables
   - Request building
   - Response validation

---

## 🚀 Next Steps

1. ✅ Test semua endpoints
2. ✅ Screenshot hasil
3. ✅ Document findings
4. ✅ Add ke portfolio
5. ✅ Share di LinkedIn

---

**Happy testing! 🎉**
