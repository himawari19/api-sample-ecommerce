# 🚀 Vercel Deployment Guide

Panduan lengkap untuk deploy API ke Vercel dan test via Postman.

---

## ✅ Prerequisites

- ✅ Vercel account (sudah dibuat)
- ✅ GitHub repository connected (sudah terhubung)
- ✅ vercel.json sudah di-push

---

## 🎯 Step 1: Deploy di Vercel Dashboard

### 1.1 Go to Vercel Dashboard

Go to: https://vercel.com/dashboard

### 1.2 Import Project

1. Klik "Add New"
2. Pilih "Project"
3. Pilih "Import Git Repository"
4. Select: `himawari19/api-sample-ecommerce`
5. Klik "Import"

### 1.3 Configure Project

1. **Project Name**: `api-sample-ecommerce` (atau nama lain)
2. **Framework Preset**: Other
3. **Root Directory**: ./
4. Klik "Deploy"

### 1.4 Wait for Deployment

Tunggu sampai deployment selesai. Anda akan melihat:
```
✓ Deployment successful
```

### 1.5 Get Your Live URL

Vercel akan memberikan URL seperti:
```
https://api-sample-ecommerce.vercel.app
```

**Simpan URL ini!** Ini adalah endpoint Anda.

---

## 🧪 Step 2: Test API via Postman

### 2.1 Setup Postman Environment

1. Buka Postman
2. Create New Environment
3. Name: `Vercel`
4. Add variable:
   - **Name**: `base_url`
   - **Initial value**: `https://api-sample-ecommerce.vercel.app/api`
   - **Current value**: `https://api-sample-ecommerce.vercel.app/api`
5. Save

### 2.2 Select Environment

Di Postman, select environment: `Vercel`

### 2.3 Test Health Check

**Method**: GET
**URL**: `{{base_url}}/health`

Klik Send

**Expected Response**:
```json
{
  "success": true,
  "message": "API is running",
  "timestamp": "2024-01-02T10:00:00.000Z"
}
```

✅ API Anda live!

---

## 📮 Testing All Endpoints

### Products

**Get All Products**
```
GET {{base_url}}/products
```

**Create Product**
```
POST {{base_url}}/products
Body:
{
  "name": "Test Product",
  "price": 500000,
  "category": "Test",
  "stock": 10,
  "description": "Testing"
}
```

### Users

**Get All Users**
```
GET {{base_url}}/users
```

**Create User**
```
POST {{base_url}}/users
Body:
{
  "name": "Test User",
  "email": "test@example.com",
  "password": "test123",
  "phone": "08123456789",
  "address": "Test Address"
}
```

### Orders

**Get All Orders**
```
GET {{base_url}}/orders
```

**Create Order**
```
POST {{base_url}}/orders
Body:
{
  "userId": "user-id-here",
  "items": [
    {
      "productId": "product-id-here",
      "quantity": 2,
      "price": 500000
    }
  ]
}
```

### Cart

**Get Cart**
```
GET {{base_url}}/cart
```

**Add to Cart**
```
POST {{base_url}}/cart
Body:
{
  "productId": "product-id-here",
  "quantity": 2
}
```

**Clear Cart**
```
DELETE {{base_url}}/cart
```

---

## 🔗 Your Live API URL

```
https://api-sample-ecommerce.vercel.app
```

### Endpoints

| Endpoint | URL |
|----------|-----|
| Health Check | `https://api-sample-ecommerce.vercel.app/api/health` |
| Products | `https://api-sample-ecommerce.vercel.app/api/products` |
| Users | `https://api-sample-ecommerce.vercel.app/api/users` |
| Orders | `https://api-sample-ecommerce.vercel.app/api/orders` |
| Cart | `https://api-sample-ecommerce.vercel.app/api/cart` |

---

## 📊 Testing Checklist

- [ ] Health check returns 200
- [ ] Get all products works
- [ ] Create product works
- [ ] Get all users works
- [ ] Create user works
- [ ] Get all orders works
- [ ] Create order works
- [ ] Get cart works
- [ ] Add to cart works
- [ ] Clear cart works

---

## 🎯 Postman Collection Setup

### Create Collection

1. New → Collection
2. Name: `E-Commerce API Live`
3. Add requests:

**Health Check**
```
GET {{base_url}}/health
```

**Get Products**
```
GET {{base_url}}/products
```

**Create Product**
```
POST {{base_url}}/products
Body (JSON):
{
  "name": "New Product",
  "price": 500000,
  "category": "Electronics",
  "stock": 10
}
```

**Get Users**
```
GET {{base_url}}/users
```

**Create User**
```
POST {{base_url}}/users
Body (JSON):
{
  "name": "New User",
  "email": "user@example.com",
  "password": "password123",
  "phone": "08123456789",
  "address": "Address"
}
```

---

## 🔄 Update Code

Jika Anda update code di GitHub:

1. Push ke GitHub
2. Vercel auto-redeploy
3. Tunggu deployment selesai
4. Test di Postman

---

## 📸 Screenshots untuk Portfolio

Ambil screenshot dari Postman:

1. **Health Check Response**
   - Menunjukkan API live

2. **Get All Products**
   - Menunjukkan data

3. **Create Product**
   - Request dan response

4. **Create User**
   - Request dan response

5. **Create Order**
   - Request dan response

6. **Add to Cart**
   - Request dan response

---

## 💡 Portfolio Description

```markdown
## E-Commerce API - Live on Vercel

**Live API**: https://api-sample-ecommerce.vercel.app

**Repository**: https://github.com/himawari19/api-sample-ecommerce

**Features**:
- 25+ REST API endpoints
- Full CRUD operations
- Live on Vercel
- Testable via Postman
- Error handling & validation

**Technologies**:
- Node.js
- Express.js
- Vercel

**Testing**:
- All endpoints tested via Postman
- Real-time responses
- Error handling validated

**How to Test**:
1. Open Postman
2. Set base_url: https://api-sample-ecommerce.vercel.app/api
3. Test endpoints
```

---

## 🎓 Learning Points

Dengan deploy ke Vercel, Anda belajar:

✅ **Deployment Process**
- Configure vercel.json
- Deploy via Vercel dashboard
- Auto-redeploy dari GitHub

✅ **API Testing**
- Test live API via Postman
- Real-time responses
- Error handling

✅ **Production**
- Live URL
- Shareable endpoint
- Portfolio-ready

---

## 🚀 Next Steps

1. ✅ Deploy ke Vercel
2. ✅ Get live URL
3. ✅ Test via Postman
4. ✅ Screenshot results
5. ✅ Add ke portfolio

---

## 📞 Troubleshooting

### Deployment failed

1. Check Vercel logs
2. Verify vercel.json
3. Check package.json
4. Redeploy

### API not responding

1. Check Vercel deployment status
2. Verify URL
3. Check network tab in Postman

### CORS error

CORS sudah enabled di server.js, seharusnya tidak ada masalah.

---

## 🎉 Selesai!

API Anda sekarang:
- ✅ Live di Vercel
- ✅ Accessible dari Postman
- ✅ Shareable URL
- ✅ Ready untuk portfolio

---

**Happy testing! 🚀**
