# E-Commerce API Dummy

Dummy REST API untuk E-Commerce yang lengkap dengan semua operasi CRUD (Create, Read, Update, Delete). API ini dirancang untuk keperluan testing dan portfolio.

## 🚀 Fitur

- ✅ Products Management (GET, POST, PUT, PATCH, DELETE)
- ✅ Users Management (GET, POST, PUT, PATCH, DELETE)
- ✅ Orders Management (GET, POST, PUT, PATCH, DELETE)
- ✅ Shopping Cart (GET, POST, PUT, DELETE)
- ✅ CORS enabled
- ✅ In-memory database (data reset saat server restart)
- ✅ UUID untuk setiap resource
- ✅ Error handling

## 📋 Prerequisites

- Node.js (v14 atau lebih tinggi)
- npm atau yarn
- Postman (untuk testing)

## 🔧 Instalasi

1. Clone repository ini:
```bash
git clone https://github.com/yourusername/ecommerce-api-dummy.git
cd ecommerce-api-dummy
```

2. Install dependencies:
```bash
npm install
```

3. Jalankan server:
```bash
npm start
```

Server akan berjalan di `http://localhost:3000`

Untuk development dengan auto-reload:
```bash
npm run dev
```

## 📚 API Endpoints

### Base URL
```
http://localhost:3000/api
```

### Health Check
```
GET /health
```

---

## 🛍️ Products

### Get All Products
```
GET /products
```
Response:
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
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

### Get Product by ID
```
GET /products/:id
```

### Create Product
```
POST /products
Content-Type: application/json

{
  "name": "Product Name",
  "price": 100000,
  "category": "Electronics",
  "stock": 10,
  "description": "Product description",
  "image": "https://example.com/image.jpg",
  "rating": 4.5
}
```

### Update Product (Full)
```
PUT /products/:id
Content-Type: application/json

{
  "name": "Updated Name",
  "price": 120000,
  "category": "Electronics",
  "stock": 15,
  "description": "Updated description",
  "image": "https://example.com/image.jpg",
  "rating": 4.8
}
```

### Update Product (Partial)
```
PATCH /products/:id
Content-Type: application/json

{
  "price": 120000,
  "stock": 15
}
```

### Delete Product
```
DELETE /products/:id
```

---

## 👥 Users

### Get All Users
```
GET /users
```

### Get User by ID
```
GET /users/:id
```

### Create User
```
POST /users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "08123456789",
  "address": "Jl. Merdeka No. 1"
}
```

### Update User (Full)
```
PUT /users/:id
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "08987654321",
  "address": "Jl. Sudirman No. 2"
}
```

### Update User (Partial)
```
PATCH /users/:id
Content-Type: application/json

{
  "phone": "08987654321"
}
```

### Delete User
```
DELETE /users/:id
```

---

## 📦 Orders

### Get All Orders
```
GET /orders
```

### Get Order by ID
```
GET /orders/:id
```

### Create Order
```
POST /orders
Content-Type: application/json

{
  "userId": "user-uuid",
  "items": [
    {
      "productId": "product-uuid",
      "quantity": 2,
      "price": 100000
    }
  ]
}
```

### Update Order (Full)
```
PUT /orders/:id
Content-Type: application/json

{
  "status": "shipped",
  "items": [
    {
      "productId": "product-uuid",
      "quantity": 3,
      "price": 100000
    }
  ]
}
```

### Update Order (Partial)
```
PATCH /orders/:id
Content-Type: application/json

{
  "status": "delivered"
}
```

### Delete Order
```
DELETE /orders/:id
```

---

## 🛒 Shopping Cart

### Get Cart
```
GET /cart
```

### Add to Cart
```
POST /cart
Content-Type: application/json

{
  "productId": "product-uuid",
  "quantity": 2
}
```

### Update Cart Item
```
PUT /cart/:productId
Content-Type: application/json

{
  "quantity": 5
}
```

### Remove from Cart
```
DELETE /cart/:productId
```

### Clear Cart
```
DELETE /cart
```

---

## 📝 Testing dengan Postman

### Import Collection

1. Buka Postman
2. Klik "Import"
3. Pilih file `postman_collection.json` (jika tersedia)
4. Atau buat collection baru dengan endpoints di atas

### Contoh Test Flow

1. **Create Product**
   - POST `/products`
   - Simpan product ID dari response

2. **Get Product**
   - GET `/products/{product-id}`

3. **Create User**
   - POST `/users`
   - Simpan user ID dari response

4. **Add to Cart**
   - POST `/cart`
   - Gunakan product ID dari step 1

5. **Create Order**
   - POST `/orders`
   - Gunakan user ID dari step 3

6. **Update Order Status**
   - PATCH `/orders/{order-id}`
   - Ubah status menjadi "shipped"

---

## 🔄 Response Format

Semua response mengikuti format standar:

### Success Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {}
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

## 📊 Data Structure

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

## 🌐 Environment Variables

Anda bisa mengatur port dengan environment variable:

```bash
PORT=5000 npm start
```

Default port adalah `3000`

---

## 📦 Dependencies

- **express**: Web framework
- **cors**: Cross-Origin Resource Sharing
- **uuid**: Generate unique IDs
- **nodemon**: Development tool (auto-reload)

---

## 🚀 Deployment

### Deploy ke Heroku

1. Install Heroku CLI
2. Login ke Heroku:
```bash
heroku login
```

3. Create app:
```bash
heroku create your-app-name
```

4. Deploy:
```bash
git push heroku main
```

### Deploy ke Railway, Render, atau platform lain

Ikuti dokumentasi masing-masing platform. Pastikan untuk set environment variable `PORT` jika diperlukan.

---

## 📝 Catatan

- Data disimpan dalam memory, akan hilang saat server restart
- Untuk production, gunakan database seperti MongoDB, PostgreSQL, atau MySQL
- Password tidak di-hash (hanya untuk dummy/testing)
- Tidak ada authentication/authorization (hanya untuk testing)

---

## 🤝 Contributing

Silakan fork repository ini dan buat pull request untuk improvements.

---

## 📄 License

MIT License - Silakan gunakan untuk keperluan apapun

---

## 📧 Support

Jika ada pertanyaan atau issue, silakan buat issue di repository ini.

---

**Happy Testing! 🎉**
