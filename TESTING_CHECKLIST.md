# ✅ Testing Checklist

Checklist lengkap untuk test semua endpoints via HTML dashboard.

---

## 🚀 Setup

- [ ] npm install
- [ ] npm start
- [ ] Open http://localhost:3000
- [ ] Dashboard loaded successfully

---

## 🏥 Health Check

- [ ] Click "Check Status" button
- [ ] Status: 200
- [ ] Message: "API is running"
- [ ] Timestamp displayed

---

## 📦 Products Testing

### Get All Products
- [ ] Click "Get All" button
- [ ] Status: 200
- [ ] Returns array of products
- [ ] 3 sample products visible

### Create Product
- [ ] Fill form:
  - [ ] Name: "Test Product"
  - [ ] Price: 500000
  - [ ] Category: "Test"
  - [ ] Stock: 10
  - [ ] Description: "Testing"
- [ ] Click "Create" button
- [ ] Status: 201
- [ ] Product created with ID
- [ ] Form cleared

### Verify Product Created
- [ ] Click "Get All" again
- [ ] New product in list
- [ ] All fields correct

---

## 👥 Users Testing

### Get All Users
- [ ] Click "Get All" button
- [ ] Status: 200
- [ ] Returns array of users
- [ ] 2 sample users visible

### Create User
- [ ] Fill form:
  - [ ] Name: "Test User"
  - [ ] Email: "test@example.com"
  - [ ] Password: "test123"
  - [ ] Phone: "08123456789"
  - [ ] Address: "Test Address"
- [ ] Click "Create" button
- [ ] Status: 201
- [ ] User created with ID
- [ ] Form cleared

### Verify User Created
- [ ] Click "Get All" again
- [ ] New user in list
- [ ] All fields correct

### Test Duplicate Email
- [ ] Try create user with same email
- [ ] Status: 400
- [ ] Error: "Email already exists"

---

## 📋 Orders Testing

### Get All Orders
- [ ] Click "Get All" button
- [ ] Status: 200
- [ ] Returns array of orders
- [ ] Sample order visible

### Create Order
- [ ] Get User ID from users list
- [ ] Get Product ID from products list
- [ ] Fill form:
  - [ ] User ID: [paste user id]
  - [ ] Product ID: [paste product id]
  - [ ] Quantity: 2
  - [ ] Price: 500000
- [ ] Click "Create" button
- [ ] Status: 201
- [ ] Order created with ID
- [ ] Total price calculated (2 × 500000 = 1000000)

### Verify Order Created
- [ ] Click "Get All" again
- [ ] New order in list
- [ ] All fields correct

---

## 🛒 Cart Testing

### Get Cart
- [ ] Click "View Cart" button
- [ ] Status: 200
- [ ] Cart empty initially

### Add to Cart
- [ ] Get Product ID from products list
- [ ] Fill form:
  - [ ] Product ID: [paste product id]
  - [ ] Quantity: 2
- [ ] Click "Add to Cart" button
- [ ] Status: 201
- [ ] Item added to cart

### View Cart Again
- [ ] Click "View Cart" button
- [ ] Item visible in cart
- [ ] Quantity: 2
- [ ] Product name displayed

### Add Same Product Again
- [ ] Fill form with same product ID
- [ ] Quantity: 1
- [ ] Click "Add to Cart" button
- [ ] Status: 201
- [ ] Quantity increased (2 + 1 = 3)
- [ ] No duplicate items

### Clear Cart
- [ ] Click "Clear Cart" button
- [ ] Status: 200
- [ ] Message: "Cart cleared successfully"
- [ ] Click "View Cart" again
- [ ] Cart empty

---

## 🔍 Error Testing

### Non-existent Product
- [ ] Try get product with invalid ID
- [ ] Status: 404
- [ ] Message: "Product not found"

### Missing Required Fields
- [ ] Try create product without name
- [ ] Status: 400
- [ ] Error message displayed

### Invalid Data
- [ ] Try create product with invalid price
- [ ] Status: 400 or error handling

---

## 📊 Response Validation

### Status Codes
- [ ] 200 for GET requests
- [ ] 201 for POST requests
- [ ] 400 for bad requests
- [ ] 404 for not found

### Response Format
- [ ] All responses have "success" field
- [ ] All responses have "data" or "message"
- [ ] JSON properly formatted
- [ ] No errors in console

### Data Validation
- [ ] All fields present
- [ ] Correct data types
- [ ] IDs are UUIDs
- [ ] Timestamps in ISO format

---

## 📸 Screenshots

Take screenshots of:

- [ ] Dashboard home page
- [ ] Health check response
- [ ] Get all products
- [ ] Create product form & response
- [ ] Create user form & response
- [ ] Create order form & response
- [ ] Add to cart & view cart
- [ ] Error handling (404)
- [ ] Error handling (400)

---

## 🎯 Final Verification

- [ ] All endpoints tested
- [ ] All responses valid
- [ ] No errors in console
- [ ] Dashboard responsive
- [ ] Forms working correctly
- [ ] Responses displaying correctly

---

## 📝 Test Summary

| Endpoint | Status | Notes |
|----------|--------|-------|
| GET /health | ✅ | |
| GET /products | ✅ | |
| POST /products | ✅ | |
| GET /users | ✅ | |
| POST /users | ✅ | |
| GET /orders | ✅ | |
| POST /orders | ✅ | |
| GET /cart | ✅ | |
| POST /cart | ✅ | |
| DELETE /cart | ✅ | |

---

## 🎉 Testing Complete!

All endpoints tested successfully!

---

## 📞 Troubleshooting

### Dashboard not loading
- [ ] Check if server is running
- [ ] Check browser console for errors
- [ ] Verify http://localhost:3000

### API not responding
- [ ] Check server logs
- [ ] Verify API is running
- [ ] Check network tab in browser

### Form not submitting
- [ ] Check required fields
- [ ] Check browser console
- [ ] Verify API endpoint

---

**Happy testing! 🚀**
