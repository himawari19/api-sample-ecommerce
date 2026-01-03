# 🚀 GitHub Pages + API Setup Guide

Panduan lengkap untuk upload ke GitHub dan akses API + HTML dashboard.

---

## 📋 Apa yang Anda Punya

✅ **API Server** (Node.js + Express)
✅ **HTML Dashboard** (Testing interface)
✅ **25+ Endpoints** (Products, Users, Orders, Cart)
✅ **GitHub Ready** (Siap di-push)

---

## 🎯 Workflow

```
1. Push ke GitHub
   ↓
2. Clone di lokal
   ↓
3. npm install
   ↓
4. npm start
   ↓
5. Buka http://localhost:3000
   ↓
6. Test semua endpoints di dashboard
```

---

## 📁 Project Structure

```
ecommerce-api-dummy/
├── server.js              # Main API server
├── package.json           # Dependencies
├── public/
│   └── index.html         # Dashboard HTML
├── README.md              # Documentation
├── .gitignore             # Git ignore
└── API_ENDPOINTS.md       # API reference
```

---

## 🔄 Step 1: Setup Git & GitHub

### 1.1 Initialize Git

```bash
git init
git add .
git commit -m "Initial commit: E-Commerce API with HTML Dashboard"
git branch -M main
```

### 1.2 Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `ecommerce-api-dummy`
3. Description: `E-Commerce REST API with HTML Testing Dashboard`
4. Public: ✅
5. Create repository

### 1.3 Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/ecommerce-api-dummy.git
git push -u origin main
```

**Replace `YOUR_USERNAME` dengan username GitHub Anda!**

---

## ✅ Step 2: Verify on GitHub

1. Go to your repository: `https://github.com/YOUR_USERNAME/ecommerce-api-dummy`
2. Verify all files are there
3. Check README.md is displayed

---

## 🏃 Step 3: Run Locally

### 3.1 Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/ecommerce-api-dummy.git
cd ecommerce-api-dummy
```

### 3.2 Install Dependencies

```bash
npm install
```

### 3.3 Start Server

```bash
npm start
```

Anda akan melihat:
```
🚀 E-Commerce API running on http://localhost:3000
📊 Dashboard: http://localhost:3000
```

### 3.4 Open Dashboard

Buka browser: `http://localhost:3000`

Anda akan melihat **HTML Testing Dashboard** dengan:
- ✅ Products form
- ✅ Users form
- ✅ Orders form
- ✅ Cart form
- ✅ Health check
- ✅ Response display

---

## 🧪 Step 4: Test API via Dashboard

### 4.1 Health Check

1. Klik "Check Status" button
2. Lihat response di bawah

**Expected Response:**
```json
{
  "success": true,
  "message": "API is running",
  "timestamp": "2024-01-02T10:00:00.000Z"
}
```

### 4.2 Get All Products

1. Klik "Get All" button di Products section
2. Lihat 3 sample products

### 4.3 Create Product

1. Fill form:
   - Name: "Test Product"
   - Price: 500000
   - Category: "Test"
   - Stock: 10
   - Description: "Testing"
2. Klik "Create" button
3. Lihat product baru dibuat

### 4.4 Create User

1. Fill form:
   - Name: "Test User"
   - Email: "test@example.com"
   - Password: "test123"
   - Phone: "08123456789"
   - Address: "Test Address"
2. Klik "Create" button
3. Lihat user baru dibuat

### 4.5 Create Order

1. Get User ID dari "Get All" users
2. Get Product ID dari "Get All" products
3. Fill form:
   - User ID: [paste user id]
   - Product ID: [paste product id]
   - Quantity: 2
   - Price: 500000
4. Klik "Create" button
5. Lihat order baru dibuat

### 4.6 Add to Cart

1. Get Product ID dari "Get All" products
2. Fill form:
   - Product ID: [paste product id]
   - Quantity: 2
3. Klik "Add to Cart" button
4. Lihat item ditambahkan ke cart

---

## 📊 Testing Checklist

### Health Check
- [ ] GET /api/health returns 200

### Products
- [ ] GET /api/products returns all products
- [ ] POST /api/products creates new product
- [ ] Response shows correct status

### Users
- [ ] GET /api/users returns all users
- [ ] POST /api/users creates new user
- [ ] Email validation works

### Orders
- [ ] GET /api/orders returns all orders
- [ ] POST /api/orders creates new order
- [ ] Total price calculated correctly

### Cart
- [ ] GET /api/cart returns cart items
- [ ] POST /api/cart adds item
- [ ] DELETE /api/cart clears cart

---

## 🎯 What to Test

### 1. Basic Operations
- ✅ Get all resources
- ✅ Create new resource
- ✅ View responses

### 2. Data Validation
- ✅ Required fields validation
- ✅ Email duplicate checking
- ✅ Error messages

### 3. CRUD Operations
- ✅ Create (POST)
- ✅ Read (GET)
- ✅ Update (PUT/PATCH)
- ✅ Delete (DELETE)

### 4. Error Handling
- ✅ 404 for non-existent resource
- ✅ 400 for missing fields
- ✅ 201 for successful creation
- ✅ 200 for successful operations

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
   - Request dan response

5. **Error Handling**
   - Validation error

6. **Cart Operations**
   - Add to cart
   - View cart

---

## 🔗 Share dengan Orang Lain

### GitHub Repository
```
https://github.com/YOUR_USERNAME/ecommerce-api-dummy
```

### Cara Orang Lain Menggunakan

1. Clone repository
2. `npm install`
3. `npm start`
4. Buka `http://localhost:3000`

---

## 📝 Update Code

Setiap kali update code:

```bash
git add .
git commit -m "Update: [description]"
git push origin main
```

---

## 🎓 Learning Points

Dengan setup ini, Anda belajar:

1. **API Development**
   - REST endpoints
   - CRUD operations
   - Error handling

2. **Frontend Integration**
   - HTML/CSS/JavaScript
   - Fetch API
   - Form handling

3. **GitHub Workflow**
   - Git commands
   - Repository management
   - Version control

4. **Testing**
   - Manual testing
   - API testing
   - Error validation

---

## 🚀 Portfolio Showcase

Add ke portfolio:

```markdown
## E-Commerce API with HTML Dashboard

**Repository**: https://github.com/YOUR_USERNAME/ecommerce-api-dummy

**Features**:
- 25+ REST API endpoints
- HTML testing dashboard
- Full CRUD operations
- Error handling
- Data validation

**How to Use**:
1. Clone repository
2. npm install
3. npm start
4. Open http://localhost:3000

**Technologies**: Node.js, Express, HTML, CSS, JavaScript
```

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
- Check browser console for errors
- Verify `public/index.html` exists

### API not responding
- Check server logs
- Verify API endpoints
- Check network tab in browser

---

## 🎉 Selesai!

Sekarang Anda punya:
- ✅ API di GitHub
- ✅ HTML dashboard untuk testing
- ✅ Bisa di-clone dan di-run siapa saja
- ✅ Ready untuk portfolio

---

## 📚 Next Steps

1. ✅ Push ke GitHub
2. ✅ Test semua endpoints
3. ✅ Screenshot hasil
4. ✅ Add ke portfolio
5. ✅ Share dengan orang lain

---

**Happy coding! 🚀**
