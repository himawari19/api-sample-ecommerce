# 🚀 Quick Start Guide

## Setup dalam 3 Langkah

### 1. Install Dependencies
```bash
npm install
```

### 2. Jalankan Server
```bash
npm start
```

Server akan berjalan di `http://localhost:3000`

### 3. Test dengan Postman

#### Option A: Import Collection
1. Buka Postman
2. Klik "Import"
3. Pilih file `postman_collection.json`
4. Mulai testing!

#### Option B: Manual Testing
Buka Postman dan test endpoint berikut:

**Health Check:**
```
GET http://localhost:3000/api/health
```

**Get All Products:**
```
GET http://localhost:3000/api/products
```

---

## 📝 Testing Workflow

### 1. Create Product
```
POST http://localhost:3000/api/products
Body:
{
  "name": "Test Product",
  "price": 100000,
  "category": "Test",
  "stock": 10,
  "description": "Test description"
}
```
Simpan `id` dari response.

### 2. Get Product
```
GET http://localhost:3000/api/products/{id}
```

### 3. Update Product (PATCH)
```
PATCH http://localhost:3000/api/products/{id}
Body:
{
  "price": 150000
}
```

### 4. Delete Product
```
DELETE http://localhost:3000/api/products/{id}
```

---

## 🔄 Semua Endpoint

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/api/health` | Health check |
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get product by ID |
| POST | `/api/products` | Create product |
| PUT | `/api/products/:id` | Update product (full) |
| PATCH | `/api/products/:id` | Update product (partial) |
| DELETE | `/api/products/:id` | Delete product |
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get user by ID |
| POST | `/api/users` | Create user |
| PUT | `/api/users/:id` | Update user (full) |
| PATCH | `/api/users/:id` | Update user (partial) |
| DELETE | `/api/users/:id` | Delete user |
| GET | `/api/orders` | Get all orders |
| GET | `/api/orders/:id` | Get order by ID |
| POST | `/api/orders` | Create order |
| PUT | `/api/orders/:id` | Update order (full) |
| PATCH | `/api/orders/:id` | Update order (partial) |
| DELETE | `/api/orders/:id` | Delete order |
| GET | `/api/cart` | Get cart |
| POST | `/api/cart` | Add to cart |
| PUT | `/api/cart/:productId` | Update cart item |
| DELETE | `/api/cart/:productId` | Remove from cart |
| DELETE | `/api/cart` | Clear cart |

---

## 💡 Tips untuk Portfolio

1. **Screenshot Results**: Ambil screenshot dari Postman untuk portfolio
2. **Document Everything**: Catat semua test cases yang Anda jalankan
3. **Create Test Scenarios**: Buat skenario testing yang realistis
4. **Error Testing**: Test juga error cases (invalid ID, missing fields, dll)
5. **Performance**: Catat response time untuk setiap endpoint

---

## 🐛 Troubleshooting

### Port sudah digunakan
```bash
PORT=5000 npm start
```

### Module not found
```bash
npm install
```

### Server tidak start
Pastikan Node.js terinstall:
```bash
node --version
```

---

## 📚 Dokumentasi Lengkap

Lihat `README.md` untuk dokumentasi lengkap.

---

**Happy Testing! 🎉**
