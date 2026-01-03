# 🚀 Heroku Deployment - Full Tutorial

Tutorial lengkap untuk deploy E-Commerce API ke Heroku sampai live dan bisa di-test.

---

## 📋 Prerequisites

Pastikan Anda sudah punya:

- [ ] Node.js terinstall (`node --version`)
- [ ] npm terinstall (`npm --version`)
- [ ] Git terinstall (`git --version`)
- [ ] GitHub account
- [ ] Heroku account (gratis di https://www.heroku.com)

---

## ⚙️ Step 1: Setup Heroku CLI

### 1.1 Download Heroku CLI

Go to: https://devcenter.heroku.com/articles/heroku-cli

Download sesuai OS Anda (Windows, Mac, Linux)

### 1.2 Install Heroku CLI

**Windows:**
- Download installer
- Run installer
- Follow instructions

**Mac:**
```bash
brew tap heroku/brew && brew install heroku
```

**Linux:**
```bash
curl https://cli-assets.heroku.com/install.sh | sh
```

### 1.3 Verify Installation

```bash
heroku --version
```

Anda akan melihat:
```
heroku/7.x.x win32-x64 node-vx.x.x
```

---

## 🔐 Step 2: Login ke Heroku

### 2.1 Login via CLI

```bash
heroku login
```

Browser akan terbuka, klik "Log in"

### 2.2 Verify Login

```bash
heroku auth:whoami
```

Anda akan melihat email Anda

---

## 📁 Step 3: Prepare Project untuk Heroku

### 3.1 Update package.json

Buka `package.json` dan pastikan ada `"start"` script:

```json
{
  "name": "ecommerce-api-dummy",
  "version": "1.0.0",
  "description": "Dummy E-Commerce REST API for testing and portfolio",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "keywords": ["ecommerce", "api", "rest", "testing"],
  "author": "",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "uuid": "^9.0.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  },
  "engines": {
    "node": "18.x"
  }
}
```

**Penting:** Tambahkan `"engines"` section untuk specify Node version.

### 3.2 Create Procfile

Buat file baru bernama `Procfile` (tanpa extension):

```
web: node server.js
```

File ini memberitahu Heroku bagaimana menjalankan app Anda.

### 3.3 Update server.js

Pastikan server.js menggunakan environment variable PORT:

```javascript
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 E-Commerce API running on http://localhost:${PORT}`);
});
```

**Penting:** Heroku akan assign PORT secara dinamis, jadi harus `process.env.PORT`.

---

## 🔄 Step 4: Setup Git Repository

### 4.1 Initialize Git (jika belum)

```bash
git init
```

### 4.2 Configure Git

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@gmail.com"
```

### 4.3 Add & Commit Files

```bash
git add .
git commit -m "Initial commit: E-Commerce API ready for Heroku"
```

### 4.4 Verify Git Status

```bash
git status
```

Anda akan melihat:
```
On branch master
nothing to commit, working tree clean
```

---

## 🚀 Step 5: Create Heroku App

### 5.1 Create App

```bash
heroku create your-app-name
```

**Ganti `your-app-name` dengan nama unik Anda!**

Contoh:
```bash
heroku create ecommerce-api-john
```

Anda akan melihat:
```
Creating ⬢ ecommerce-api-john... done
https://ecommerce-api-john.herokuapp.com/ | https://git.heroku.com/ecommerce-api-john.git
```

**Simpan URL ini!** Ini adalah URL live Anda.

### 5.2 Verify App Created

```bash
heroku apps
```

Anda akan melihat app Anda di list.

---

## 📤 Step 6: Deploy ke Heroku

### 6.1 Push Code ke Heroku

```bash
git push heroku main
```

**Catatan:** Jika branch Anda `master` bukan `main`, gunakan:
```bash
git push heroku master
```

### 6.2 Monitor Deployment

Anda akan melihat output seperti:

```
Counting objects: 15, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (13/13), done.
Writing objects: 100% (15/15), 3.45 KiB | 0 bytes/s, done.
Total 15 (delta 0), reused 0 (delta 0)

-----> Node.js app detected
-----> Installing dependencies
       npm install --production
       ...
-----> Build succeeded!
-----> Discovering process types
       Procfile declares types -> web

-----> Compressing...
-----> Launching...
       Released v1
       https://ecommerce-api-john.herokuapp.com/ deployed to Heroku
```

**Selesai! App Anda sudah live!** 🎉

---

## ✅ Step 7: Verify Deployment

### 7.1 Check App Status

```bash
heroku ps
```

Anda akan melihat:
```
Free dyno hours quota remaining this month: 550h 0m (100%)
Free dyno hours used this month: 0h 0m (0%)

=== web (Free): node server.js (1)
web.1: up 2021/01/02 10:00:00 +0000 (~ 1s ago)
```

### 7.2 View Logs

```bash
heroku logs --tail
```

Anda akan melihat:
```
2024-01-02T10:00:00.000000+00:00 app[web.1]: 🚀 E-Commerce API running on http://localhost:3000
```

### 7.3 Open App di Browser

```bash
heroku open
```

Browser akan terbuka ke URL Anda.

---

## 🧪 Step 8: Test API Live

### 8.1 Test Health Check

Buka browser atau Postman, akses:

```
https://your-app-name.herokuapp.com/api/health
```

Anda akan melihat:
```json
{
  "success": true,
  "message": "API is running",
  "timestamp": "2024-01-02T10:00:00.000Z"
}
```

### 8.2 Test Get All Products

```
https://your-app-name.herokuapp.com/api/products
```

Anda akan melihat:
```json
{
  "success": true,
  "data": [
    {
      "id": "...",
      "name": "Laptop Gaming",
      "price": 15000000,
      ...
    }
  ],
  "total": 3
}
```

### 8.3 Test Create Product

Buka Postman:

**Method:** POST
**URL:** `https://your-app-name.herokuapp.com/api/products`
**Body (JSON):**
```json
{
  "name": "Test Product",
  "price": 500000,
  "category": "Test",
  "stock": 10,
  "description": "Testing from Heroku"
}
```

Klik Send, Anda akan melihat product baru dibuat!

---

## 📝 Testing Checklist

- [ ] Health check berjalan
- [ ] Get all products berjalan
- [ ] Get product by ID berjalan
- [ ] Create product berjalan
- [ ] Update product (PUT) berjalan
- [ ] Update product (PATCH) berjalan
- [ ] Delete product berjalan
- [ ] Create user berjalan
- [ ] Create order berjalan
- [ ] Cart operations berjalan

---

## 🔗 Useful Heroku Commands

```bash
# View app info
heroku info

# View logs
heroku logs --tail

# View config variables
heroku config

# Set environment variable
heroku config:set KEY=value

# Restart app
heroku restart

# Open app in browser
heroku open

# View app URL
heroku apps:info

# Delete app
heroku apps:destroy --app your-app-name
```

---

## 🐛 Troubleshooting

### App tidak berjalan

```bash
heroku logs --tail
```

Lihat error message dan fix.

### Port error

Pastikan `server.js` menggunakan:
```javascript
const PORT = process.env.PORT || 3000;
```

### Module not found

```bash
heroku run npm install
```

### Restart app

```bash
heroku restart
```

---

## 📊 Monitoring

### View Real-time Logs

```bash
heroku logs --tail
```

### View Metrics

```bash
heroku metrics
```

### View Dyno Status

```bash
heroku ps
```

---

## 🔄 Update Code

Setiap kali Anda update code:

```bash
git add .
git commit -m "Update: [description]"
git push heroku main
```

App akan auto-redeploy!

---

## 💾 Backup & Restore

### View Releases

```bash
heroku releases
```

### Rollback ke versi sebelumnya

```bash
heroku rollback
```

---

## 🎯 Final URL

Setelah deploy, Anda punya URL seperti:

```
https://your-app-name.herokuapp.com
```

Gunakan URL ini untuk:
- Testing di Postman
- Share dengan orang lain
- Add ke portfolio
- Share di LinkedIn

---

## 📱 Testing di Postman

### Setup Postman Variable

1. Buka Postman
2. Create new Environment
3. Add variable:
   - **Name:** `base_url`
   - **Value:** `https://your-app-name.herokuapp.com/api`
4. Select environment
5. Gunakan `{{base_url}}` di requests

### Example Requests

**Get All Products:**
```
GET {{base_url}}/products
```

**Create Product:**
```
POST {{base_url}}/products
Body:
{
  "name": "New Product",
  "price": 500000,
  "category": "Electronics",
  "stock": 10
}
```

---

## 🎓 Learning Points

Dengan deploy ke Heroku, Anda belajar:

1. **Deployment Process**
   - Setup Heroku CLI
   - Create app
   - Deploy code

2. **Environment Variables**
   - PORT configuration
   - Dynamic port assignment

3. **Monitoring**
   - View logs
   - Check status
   - Troubleshoot issues

4. **Continuous Deployment**
   - Update code
   - Push to Heroku
   - Auto-redeploy

---

## 🎉 Selesai!

Sekarang API Anda:
- ✅ Live di Heroku
- ✅ Bisa di-test dari mana saja
- ✅ Punya URL publik
- ✅ Bisa di-share
- ✅ Ready untuk portfolio

---

## 📞 Quick Reference

| Task | Command |
|------|---------|
| Login | `heroku login` |
| Create app | `heroku create app-name` |
| Deploy | `git push heroku main` |
| View logs | `heroku logs --tail` |
| Open app | `heroku open` |
| Restart | `heroku restart` |
| View config | `heroku config` |
| Set variable | `heroku config:set KEY=value` |

---

**Happy deploying! 🚀**
