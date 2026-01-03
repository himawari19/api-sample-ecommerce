# 🚀 GitHub Testing Guide

Panduan lengkap untuk test API dari GitHub repository Anda.

---

## ✅ Repository Anda

```
https://github.com/himawari19/api-sample-ecommerce
```

---

## 🎯 Cara Menggunakan

### Step 1: Clone Repository

```bash
git clone https://github.com/himawari19/api-sample-ecommerce.git
cd api-sample-ecommerce
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Start Server

```bash
npm start
```

Anda akan melihat:
```
🚀 E-Commerce API running on http://localhost:3000
📊 Dashboard: http://localhost:3000
```

### Step 4: Open Dashboard

Buka browser: `http://localhost:3000`

Anda akan melihat **HTML Testing Dashboard**!

---

## 🧪 Testing via Dashboard

### Health Check
1. Klik "Check Status" button
2. Lihat response: `"API is running"`

### Products
1. Klik "Get All" → Lihat 3 sample products
2. Fill form → Klik "Create" → Lihat product baru dibuat
3. Lihat response dengan status 201

### Users
1. Klik "Get All" → Lihat 2 sample users
2. Fill form → Klik "Create" → Lihat user baru dibuat
3. Lihat response dengan status 201

### Orders
1. Get User ID dari "Get All" users
2. Get Product ID dari "Get All" products
3. Fill form dengan IDs tersebut
4. Klik "Create" → Lihat order dibuat
5. Total price auto-calculated

### Cart
1. Get Product ID dari "Get All" products
2. Fill form → Klik "Add to Cart"
3. Klik "View Cart" → Lihat item di cart
4. Klik "Clear Cart" → Cart kosong

---

## 📊 Testing Checklist

### Health Check
- [ ] GET /api/health returns 200
- [ ] Message: "API is running"

### Products
- [ ] GET /api/products returns 3 products
- [ ] POST /api/products creates new product
- [ ] Status: 201

### Users
- [ ] GET /api/users returns 2 users
- [ ] POST /api/users creates new user
- [ ] Status: 201

### Orders
- [ ] GET /api/orders returns orders
- [ ] POST /api/orders creates new order
- [ ] Total price calculated correctly

### Cart
- [ ] GET /api/cart returns cart
- [ ] POST /api/cart adds item
- [ ] DELETE /api/cart clears cart

---

## 📸 Screenshots untuk Portfolio

Ambil screenshot dari:

1. **Dashboard Home**
   - Menunjukkan interface

2. **Health Check**
   - Menunjukkan API running

3. **Get All Products**
   - Menunjukkan data

4. **Create Product**
   - Form dan response

5. **Create User**
   - Form dan response

6. **Create Order**
   - Form dan response

7. **Cart Operations**
   - Add to cart
   - View cart

---

## 🔗 Share Repository

Anda bisa share:

```
https://github.com/himawari19/api-sample-ecommerce
```

Orang lain bisa:
1. Clone repository
2. `npm install`
3. `npm start`
4. Test di dashboard

---

## 📝 Portfolio Description

Add ke portfolio:

```markdown
## E-Commerce API with HTML Dashboard

**Repository**: https://github.com/himawari19/api-sample-ecommerce

**Description**:
A complete REST API for e-commerce platform with 25+ endpoints and an interactive HTML testing dashboard.

**Features**:
- 25+ REST API endpoints
- Full CRUD operations
- HTML testing dashboard
- Error handling & validation
- Sample data included

**Technologies**:
- Node.js
- Express.js
- HTML/CSS/JavaScript

**How to Use**:
1. Clone: git clone https://github.com/himawari19/api-sample-ecommerce.git
2. Install: npm install
3. Start: npm start
4. Open: http://localhost:3000

**Testing**:
- Test all endpoints via HTML dashboard
- View real-time responses
- Validate error handling
```

---

## 🎯 Next Steps

1. ✅ Clone repository
2. ✅ npm install
3. ✅ npm start
4. ✅ Test di dashboard
5. ✅ Screenshot hasil
6. ✅ Add ke portfolio

---

## 📞 Troubleshooting

### Port already in use
```bash
PORT=5000 npm start
```

### Module not found
```bash
npm install
```

### Dashboard not loading
- Check if server is running
- Check browser console
- Verify http://localhost:3000

---

**Happy testing! 🚀**
