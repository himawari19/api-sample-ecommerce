# ⚡ Heroku Quick Reference

Quick reference untuk deploy dan test API di Heroku.

---

## 🚀 Deploy dalam 5 Menit

### 1. Install Heroku CLI
```bash
# Download dari https://devcenter.heroku.com/articles/heroku-cli
```

### 2. Login
```bash
heroku login
```

### 3. Create App
```bash
heroku create your-app-name
```

### 4. Deploy
```bash
git push heroku main
```

### 5. Test
```
https://your-app-name.herokuapp.com/api/health
```

---

## 📋 Checklist

- [ ] Heroku CLI installed
- [ ] Heroku account created
- [ ] Git initialized
- [ ] Procfile created
- [ ] package.json updated with engines
- [ ] Code committed
- [ ] App created on Heroku
- [ ] Code deployed
- [ ] App is live

---

## 🔗 Useful URLs

| Purpose | URL |
|---------|-----|
| Health Check | `https://your-app-name.herokuapp.com/api/health` |
| All Products | `https://your-app-name.herokuapp.com/api/products` |
| All Users | `https://your-app-name.herokuapp.com/api/users` |
| All Orders | `https://your-app-name.herokuapp.com/api/orders` |
| Cart | `https://your-app-name.herokuapp.com/api/cart` |

---

## 📮 Postman Setup

**Environment Variable:**
```
base_url = https://your-app-name.herokuapp.com/api
```

**Example Request:**
```
GET {{base_url}}/products
```

---

## 🛠️ Common Commands

```bash
# Login
heroku login

# Create app
heroku create app-name

# Deploy
git push heroku main

# View logs
heroku logs --tail

# Open app
heroku open

# Restart
heroku restart

# View config
heroku config

# Set variable
heroku config:set KEY=value

# View app info
heroku info

# Delete app
heroku apps:destroy --app app-name
```

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Port error | Check `process.env.PORT` in server.js |
| Module not found | Run `heroku run npm install` |
| App not starting | Check `heroku logs --tail` |
| Deployment failed | Check git status and commit |

---

## 📊 Testing Endpoints

### GET Requests (Browser)
```
https://your-app-name.herokuapp.com/api/health
https://your-app-name.herokuapp.com/api/products
https://your-app-name.herokuapp.com/api/users
https://your-app-name.herokuapp.com/api/orders
https://your-app-name.herokuapp.com/api/cart
```

### POST/PUT/PATCH/DELETE (Postman)
Use Postman with `{{base_url}}` variable

---

## 📝 Files Required

- ✅ `server.js` - Main API
- ✅ `package.json` - With engines section
- ✅ `Procfile` - Process file
- ✅ `.gitignore` - Git ignore

---

## 🎯 Next Steps

1. Follow HEROKU_DEPLOYMENT.md for full tutorial
2. Follow HEROKU_TESTING_GUIDE.md for testing
3. Share URL in portfolio
4. Screenshot results

---

**Happy deploying! 🚀**
