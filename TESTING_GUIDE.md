# 📋 API Testing Guide untuk Portfolio

Panduan lengkap untuk testing E-Commerce API menggunakan Postman.

## 🎯 Tujuan Testing

- Memvalidasi semua endpoint bekerja dengan baik
- Mendemonstrasikan pemahaman REST API
- Menunjukkan kemampuan API testing untuk portfolio

---

## 📊 Test Cases

### 1. PRODUCTS TESTING

#### Test 1.1: Get All Products
```
Method: GET
URL: http://localhost:3000/api/products
Expected Status: 200
Expected Response: Array of products
```

**Validasi:**
- ✅ Status code 200
- ✅ Response berisi array
- ✅ Setiap product memiliki id, name, price, category, stock

#### Test 1.2: Create Product
```
Method: POST
URL: http://localhost:3000/api/products
Body:
{
  "name": "Tablet Samsung",
  "price": 3000000,
  "category": "Electronics",
  "stock": 15,
  "description": "Tablet dengan layar 10 inch",
  "image": "https://via.placeholder.com/300x300?text=Tablet",
  "rating": 4.6
}
Expected Status: 201
```

**Validasi:**
- ✅ Status code 201 (Created)
- ✅ Response berisi product yang baru dibuat
- ✅ Product memiliki unique ID

#### Test 1.3: Get Product by ID
```
Method: GET
URL: http://localhost:3000/api/products/{product_id}
Expected Status: 200
```

**Validasi:**
- ✅ Status code 200
- ✅ Response berisi product dengan ID yang sesuai

#### Test 1.4: Get Product with Invalid ID
```
Method: GET
URL: http://localhost:3000/api/products/invalid-id
Expected Status: 404
Expected Response: { "success": false, "message": "Product not found" }
```

**Validasi:**
- ✅ Status code 404
- ✅ Error message yang jelas

#### Test 1.5: Update Product (PUT)
```
Method: PUT
URL: http://localhost:3000/api/products/{product_id}
Body:
{
  "name": "Tablet Samsung Pro",
  "price": 3500000,
  "category": "Electronics",
  "stock": 20,
  "description": "Tablet premium dengan spesifikasi tinggi",
  "image": "https://via.placeholder.com/300x300?text=TabletPro",
  "rating": 4.8
}
Expected Status: 200
```

**Validasi:**
- ✅ Status code 200
- ✅ Semua field terupdate
- ✅ ID tetap sama

#### Test 1.6: Update Product (PATCH)
```
Method: PATCH
URL: http://localhost:3000/api/products/{product_id}
Body:
{
  "price": 3200000,
  "stock": 18
}
Expected Status: 200
```

**Validasi:**
- ✅ Status code 200
- ✅ Hanya field yang dikirim yang terupdate
- ✅ Field lain tetap sama

#### Test 1.7: Delete Product
```
Method: DELETE
URL: http://localhost:3000/api/products/{product_id}
Expected Status: 200
```

**Validasi:**
- ✅ Status code 200
- ✅ Product dihapus dari list

#### Test 1.8: Get Deleted Product
```
Method: GET
URL: http://localhost:3000/api/products/{deleted_product_id}
Expected Status: 404
```

**Validasi:**
- ✅ Product tidak ditemukan

---

### 2. USERS TESTING

#### Test 2.1: Create User
```
Method: POST
URL: http://localhost:3000/api/users
Body:
{
  "name": "Budi Santoso",
  "email": "budi@example.com",
  "password": "secure123",
  "phone": "08123456789",
  "address": "Jl. Ahmad Yani No. 10"
}
Expected Status: 201
```

**Validasi:**
- ✅ Status code 201
- ✅ User berhasil dibuat dengan ID unik

#### Test 2.2: Create User with Duplicate Email
```
Method: POST
URL: http://localhost:3000/api/users
Body:
{
  "name": "Budi Santoso 2",
  "email": "budi@example.com",
  "password": "secure456",
  "phone": "08987654321",
  "address": "Jl. Sudirman No. 5"
}
Expected Status: 400
Expected Response: { "success": false, "message": "Email already exists" }
```

**Validasi:**
- ✅ Status code 400
- ✅ Error message yang jelas

#### Test 2.3: Get All Users
```
Method: GET
URL: http://localhost:3000/api/users
Expected Status: 200
```

**Validasi:**
- ✅ Status code 200
- ✅ Response berisi array users

#### Test 2.4: Update User (PUT)
```
Method: PUT
URL: http://localhost:3000/api/users/{user_id}
Body:
{
  "name": "Budi Santoso Updated",
  "email": "budi.updated@example.com",
  "phone": "08111111111",
  "address": "Jl. Gatot Subroto No. 1"
}
Expected Status: 200
```

**Validasi:**
- ✅ Status code 200
- ✅ User data terupdate

#### Test 2.5: Update User (PATCH)
```
Method: PATCH
URL: http://localhost:3000/api/users/{user_id}
Body:
{
  "phone": "08222222222"
}
Expected Status: 200
```

**Validasi:**
- ✅ Status code 200
- ✅ Hanya phone yang terupdate

#### Test 2.6: Delete User
```
Method: DELETE
URL: http://localhost:3000/api/users/{user_id}
Expected Status: 200
```

**Validasi:**
- ✅ Status code 200
- ✅ User dihapus

---

### 3. ORDERS TESTING

#### Test 3.1: Create Order
```
Method: POST
URL: http://localhost:3000/api/orders
Body:
{
  "userId": "{user_id}",
  "items": [
    {
      "productId": "{product_id}",
      "quantity": 2,
      "price": 1500000
    }
  ]
}
Expected Status: 201
```

**Validasi:**
- ✅ Status code 201
- ✅ Order berhasil dibuat
- ✅ Total price dihitung dengan benar (2 × 1500000 = 3000000)

#### Test 3.2: Get All Orders
```
Method: GET
URL: http://localhost:3000/api/orders
Expected Status: 200
```

**Validasi:**
- ✅ Status code 200
- ✅ Response berisi array orders

#### Test 3.3: Get Order by ID
```
Method: GET
URL: http://localhost:3000/api/orders/{order_id}
Expected Status: 200
```

**Validasi:**
- ✅ Status code 200
- ✅ Order detail sesuai

#### Test 3.4: Update Order Status (PATCH)
```
Method: PATCH
URL: http://localhost:3000/api/orders/{order_id}
Body:
{
  "status": "shipped"
}
Expected Status: 200
```

**Validasi:**
- ✅ Status code 200
- ✅ Status berubah menjadi "shipped"

#### Test 3.5: Update Order (PUT)
```
Method: PUT
URL: http://localhost:3000/api/orders/{order_id}
Body:
{
  "status": "delivered",
  "items": [
    {
      "productId": "{product_id}",
      "quantity": 3,
      "price": 1500000
    }
  ]
}
Expected Status: 200
```

**Validasi:**
- ✅ Status code 200
- ✅ Status dan items terupdate
- ✅ Total price dihitung ulang (3 × 1500000 = 4500000)

#### Test 3.6: Delete Order
```
Method: DELETE
URL: http://localhost:3000/api/orders/{order_id}
Expected Status: 200
```

**Validasi:**
- ✅ Status code 200
- ✅ Order dihapus

---

### 4. CART TESTING

#### Test 4.1: Get Empty Cart
```
Method: GET
URL: http://localhost:3000/api/cart
Expected Status: 200
Expected Response: { "success": true, "data": [], "total": 0 }
```

**Validasi:**
- ✅ Status code 200
- ✅ Cart kosong

#### Test 4.2: Add to Cart
```
Method: POST
URL: http://localhost:3000/api/cart
Body:
{
  "productId": "{product_id}",
  "quantity": 2
}
Expected Status: 201
```

**Validasi:**
- ✅ Status code 201
- ✅ Item ditambahkan ke cart
- ✅ Cart berisi item yang baru ditambahkan

#### Test 4.3: Add Same Product Again
```
Method: POST
URL: http://localhost:3000/api/cart
Body:
{
  "productId": "{product_id}",
  "quantity": 1
}
Expected Status: 201
```

**Validasi:**
- ✅ Status code 201
- ✅ Quantity bertambah (2 + 1 = 3)
- ✅ Tidak ada duplikat item

#### Test 4.4: Update Cart Item
```
Method: PUT
URL: http://localhost:3000/api/cart/{product_id}
Body:
{
  "quantity": 5
}
Expected Status: 200
```

**Validasi:**
- ✅ Status code 200
- ✅ Quantity berubah menjadi 5

#### Test 4.5: Remove from Cart
```
Method: DELETE
URL: http://localhost:3000/api/cart/{product_id}
Expected Status: 200
```

**Validasi:**
- ✅ Status code 200
- ✅ Item dihapus dari cart

#### Test 4.6: Clear Cart
```
Method: DELETE
URL: http://localhost:3000/api/cart
Expected Status: 200
```

**Validasi:**
- ✅ Status code 200
- ✅ Cart kosong

---

## 📸 Documentation untuk Portfolio

### Screenshot yang Perlu Diambil:

1. **Health Check Response**
   - Menunjukkan API berjalan

2. **Get All Products**
   - Menunjukkan data yang ada

3. **Create Product**
   - Request body dan response

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

## 📝 Test Report Template

```
API Testing Report
==================

Project: E-Commerce API Dummy
Date: [Date]
Tester: [Your Name]

Total Test Cases: 30
Passed: 30
Failed: 0
Success Rate: 100%

Endpoints Tested:
- Products: 8 test cases ✅
- Users: 6 test cases ✅
- Orders: 6 test cases ✅
- Cart: 6 test cases ✅
- Health Check: 1 test case ✅

Key Findings:
- All CRUD operations working correctly
- Error handling implemented properly
- Response format consistent
- Status codes appropriate

Conclusion:
API is ready for production use.
```

---

## 🎓 Learning Points untuk Portfolio

1. **REST API Principles**
   - GET, POST, PUT, PATCH, DELETE
   - Status codes (200, 201, 400, 404)
   - Request/Response format

2. **API Testing Best Practices**
   - Test happy path dan error cases
   - Validate response structure
   - Check status codes
   - Test edge cases

3. **Data Validation**
   - Required fields
   - Duplicate checking
   - Data type validation

4. **Error Handling**
   - Meaningful error messages
   - Appropriate status codes
   - Consistent error format

---

## 💾 Menyimpan Test Results

1. **Export dari Postman**
   - Klik "..." → Export
   - Simpan sebagai JSON

2. **Screenshot**
   - Ambil screenshot setiap test
   - Buat dokumentasi visual

3. **Test Report**
   - Buat summary report
   - Dokumentasikan findings

---

**Happy Testing! 🎉**
