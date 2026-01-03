# E-Commerce API - Postman Test Suite

Complete test suite dengan 60+ test cases (positif & negatif) untuk E-Commerce API yang sudah live di Vercel.

## 🚀 Quick Start

### 1. Import ke Postman
- Buka Postman
- Klik **Import** → **Upload Files**
- Pilih file JSON collection:
  - `ecommerce_api_complete_tests.json`
  - `products_tests.json`
  - `users_tests.json`
  - `orders_tests.json`
  - `cart_tests.json`

### 2. Import Environment
- Klik **Settings** (gear icon) → **Environments** → **Import**
- Pilih `environment_prod.json`

### 3. Select Environment
- Dropdown di top right
- Pilih **E-Commerce API - Production**

### 4. Run Tests
- Klik collection → **...** → **Run collection**
- Klik **Run [Collection Name]**

## 📊 Test Coverage

| Module | Tests | Positif | Negatif |
|--------|-------|---------|---------|
| Auth | 8 | 3 | 5 |
| Products | 15 | 8 | 7 |
| Users | 12 | 6 | 6 |
| Orders | 12 | 6 | 6 |
| Cart | 12 | 7 | 5 |
| **Total** | **59** | **30** | **29** |

## 📁 Files

```
postman/
├── ecommerce_api_complete_tests.json    # Auth & Health (8 tests)
├── products_tests.json                  # Products CRUD (15 tests)
├── users_tests.json                     # Users CRUD (12 tests)
├── orders_tests.json                    # Orders CRUD (12 tests)
├── cart_tests.json                      # Cart Operations (12 tests)
├── environment_live.json                # Live Environment
├── environment_local.json               # Local Environment (backup)
└── README.md                            # This file
```

## 🔗 API Endpoint

**Live:** https://api-sample-ecommerce.vercel.app

## 🔑 Environment Variables

```json
{
  "base_url": "https://api-sample-ecommerce.vercel.app",
  "admin_key": "5SfLYztMyHKxouvX82npcj1grODWEG9P",
  "auth_token": "",
  "created_product_id": "",
  "created_user_id": "",
  "created_order_id": ""
}
```

## ✅ Test Cases

### Authentication
- ✅ Register (valid & invalid)
- ✅ Login (valid & invalid)
- ✅ Verify Token (valid & invalid)

### Products
- ✅ Get all (pagination, search, filter, sort)
- ✅ Get by ID
- ✅ Create (valid & invalid)
- ✅ Update (PUT & PATCH)
- ✅ Delete

### Users
- ✅ Get all (search)
- ✅ Get by ID
- ✅ Create (valid, duplicate, missing fields)
- ✅ Update (PUT & PATCH)
- ✅ Delete

### Orders
- ✅ Get all (filter by status & user)
- ✅ Get by ID
- ✅ Create (valid & invalid)
- ✅ Update status
- ✅ Delete

### Cart
- ✅ Get cart
- ✅ Add item (valid & invalid)
- ✅ Update quantity
- ✅ Remove item
- ✅ Clear cart

## 🎯 Recommended Order

1. Health Check
2. Authentication
3. Products
4. Users
5. Orders
6. Cart

## 💡 Tips

- Setiap test punya built-in assertions
- Tests menggunakan environment variables untuk dynamic data
- Failed tests menunjukkan error message detail
- Response times tracked di headers
- Tests independent dan bisa run dalam urutan apapun

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| 404 errors | Pastikan environment "E-Commerce API - Live (Vercel)" dipilih |
| 400 errors | Check request body format |
| 401 errors | Login dulu untuk get auth token |
| Tests fail | Reset data via admin endpoint |

## 📝 Notes

- Semua test data in-memory
- Admin key: `5SfLYztMyHKxouvX82npcj1grODWEG9P`
- Tests independent dan bisa run in any order
- Response times vary based on server load

## 🔗 Links

- **API Live:** https://api-sample-ecommerce.vercel.app
- **Repository:** https://github.com/himawari19/api-sample-ecommerce

---

**Total Test Cases:** 59 (30 positif + 29 negatif)  
**Status:** ✅ Ready to use
