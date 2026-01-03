const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory database
let products = [
  {
    id: uuidv4(),
    name: 'Laptop Gaming',
    price: 15000000,
    category: 'Electronics',
    stock: 10,
    description: 'High performance gaming laptop',
    image: 'https://via.placeholder.com/300x300?text=Laptop',
    rating: 4.5,
    createdAt: new Date()
  },
  {
    id: uuidv4(),
    name: 'Smartphone Pro',
    price: 8000000,
    category: 'Electronics',
    stock: 25,
    description: 'Latest smartphone with advanced features',
    image: 'https://via.placeholder.com/300x300?text=Smartphone',
    rating: 4.8,
    createdAt: new Date()
  },
  {
    id: uuidv4(),
    name: 'Wireless Headphones',
    price: 1500000,
    category: 'Accessories',
    stock: 50,
    description: 'Premium wireless headphones with noise cancellation',
    image: 'https://via.placeholder.com/300x300?text=Headphones',
    rating: 4.3,
    createdAt: new Date()
  }
];

let users = [
  {
    id: uuidv4(),
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    phone: '08123456789',
    address: 'Jl. Merdeka No. 1',
    createdAt: new Date()
  },
  {
    id: uuidv4(),
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password456',
    phone: '08987654321',
    address: 'Jl. Sudirman No. 2',
    createdAt: new Date()
  }
];

let orders = [
  {
    id: uuidv4(),
    userId: users[0].id,
    items: [{ productId: products[0].id, quantity: 1, price: products[0].price }],
    totalPrice: products[0].price,
    status: 'pending',
    createdAt: new Date()
  }
];

let cart = [];

// ==================== AUTO RESET DATA ====================

// Function to reset all data to initial state
function resetData() {
  products = [
    {
      id: uuidv4(),
      name: 'Laptop Gaming',
      price: 15000000,
      category: 'Electronics',
      stock: 10,
      description: 'High performance gaming laptop',
      image: 'https://via.placeholder.com/300x300?text=Laptop',
      rating: 4.5,
      createdAt: new Date()
    },
    {
      id: uuidv4(),
      name: 'Smartphone Pro',
      price: 8000000,
      category: 'Electronics',
      stock: 25,
      description: 'Latest smartphone with advanced features',
      image: 'https://via.placeholder.com/300x300?text=Smartphone',
      rating: 4.8,
      createdAt: new Date()
    },
    {
      id: uuidv4(),
      name: 'Wireless Headphones',
      price: 1500000,
      category: 'Accessories',
      stock: 50,
      description: 'Premium wireless headphones with noise cancellation',
      image: 'https://via.placeholder.com/300x300?text=Headphones',
      rating: 4.3,
      createdAt: new Date()
    }
  ];

  users = [
    {
      id: uuidv4(),
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
      phone: '08123456789',
      address: 'Jl. Merdeka No. 1',
      createdAt: new Date()
    },
    {
      id: uuidv4(),
      name: 'Jane Smith',
      email: 'jane@example.com',
      password: 'password456',
      phone: '08987654321',
      address: 'Jl. Sudirman No. 2',
      createdAt: new Date()
    }
  ];

  orders = [
    {
      id: uuidv4(),
      userId: users[0].id,
      items: [{ productId: products[0].id, quantity: 1, price: products[0].price }],
      totalPrice: products[0].price,
      status: 'pending',
      createdAt: new Date()
    }
  ];

  cart = [];
  console.log('✅ Data reset to initial state');
}

// Auto reset every 1 hour (3600000 ms)
setInterval(resetData, 3600000);

// ==================== PRODUCTS ====================

// GET all products
app.get('/api/products', (req, res) => {
  res.json({
    success: true,
    data: products,
    total: products.length
  });
});

// GET product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Product not found'
    });
  }
  res.json({
    success: true,
    data: product
  });
});

// POST create product
app.post('/api/products', (req, res) => {
  const { name, price, category, stock, description, image, rating } = req.body;
  
  if (!name || !price || !category) {
    return res.status(400).json({
      success: false,
      message: 'Name, price, and category are required'
    });
  }

  const newProduct = {
    id: uuidv4(),
    name,
    price,
    category,
    stock: stock || 0,
    description: description || '',
    image: image || 'https://via.placeholder.com/300x300?text=Product',
    rating: rating || 0,
    createdAt: new Date()
  };

  products.push(newProduct);
  res.status(201).json({
    success: true,
    message: 'Product created successfully',
    data: newProduct
  });
});

// PUT update product
app.put('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Product not found'
    });
  }

  const { name, price, category, stock, description, image, rating } = req.body;
  
  if (name) product.name = name;
  if (price) product.price = price;
  if (category) product.category = category;
  if (stock !== undefined) product.stock = stock;
  if (description) product.description = description;
  if (image) product.image = image;
  if (rating) product.rating = rating;

  res.json({
    success: true,
    message: 'Product updated successfully',
    data: product
  });
});

// PATCH partial update product
app.patch('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Product not found'
    });
  }

  Object.assign(product, req.body);
  
  res.json({
    success: true,
    message: 'Product updated successfully',
    data: product
  });
});

// DELETE product
app.delete('/api/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Product not found'
    });
  }

  const deletedProduct = products.splice(index, 1);
  res.json({
    success: true,
    message: 'Product deleted successfully',
    data: deletedProduct[0]
  });
});

// ==================== USERS ====================

// GET all users
app.get('/api/users', (req, res) => {
  res.json({
    success: true,
    data: users,
    total: users.length
  });
});

// GET user by ID
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }
  res.json({
    success: true,
    data: user
  });
});

// POST create user
app.post('/api/users', (req, res) => {
  const { name, email, password, phone, address } = req.body;
  
  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and password are required'
    });
  }

  const emailExists = users.find(u => u.email === email);
  if (emailExists) {
    return res.status(400).json({
      success: false,
      message: 'Email already exists'
    });
  }

  const newUser = {
    id: uuidv4(),
    name,
    email,
    password,
    phone: phone || '',
    address: address || '',
    createdAt: new Date()
  };

  users.push(newUser);
  res.status(201).json({
    success: true,
    message: 'User created successfully',
    data: newUser
  });
});

// PUT update user
app.put('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }

  const { name, email, phone, address } = req.body;
  
  if (name) user.name = name;
  if (email) user.email = email;
  if (phone) user.phone = phone;
  if (address) user.address = address;

  res.json({
    success: true,
    message: 'User updated successfully',
    data: user
  });
});

// PATCH partial update user
app.patch('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }

  Object.assign(user, req.body);
  
  res.json({
    success: true,
    message: 'User updated successfully',
    data: user
  });
});

// DELETE user
app.delete('/api/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }

  const deletedUser = users.splice(index, 1);
  res.json({
    success: true,
    message: 'User deleted successfully',
    data: deletedUser[0]
  });
});

// ==================== ORDERS ====================

// GET all orders
app.get('/api/orders', (req, res) => {
  res.json({
    success: true,
    data: orders,
    total: orders.length
  });
});

// GET order by ID
app.get('/api/orders/:id', (req, res) => {
  const order = orders.find(o => o.id === req.params.id);
  if (!order) {
    return res.status(404).json({
      success: false,
      message: 'Order not found'
    });
  }
  res.json({
    success: true,
    data: order
  });
});

// POST create order
app.post('/api/orders', (req, res) => {
  const { userId, items } = req.body;
  
  if (!userId || !items || items.length === 0) {
    return res.status(400).json({
      success: false,
      message: 'UserId and items are required'
    });
  }

  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const newOrder = {
    id: uuidv4(),
    userId,
    items,
    totalPrice,
    status: 'pending',
    createdAt: new Date()
  };

  orders.push(newOrder);
  res.status(201).json({
    success: true,
    message: 'Order created successfully',
    data: newOrder
  });
});

// PUT update order
app.put('/api/orders/:id', (req, res) => {
  const order = orders.find(o => o.id === req.params.id);
  if (!order) {
    return res.status(404).json({
      success: false,
      message: 'Order not found'
    });
  }

  const { status, items } = req.body;
  
  if (status) order.status = status;
  if (items) {
    order.items = items;
    order.totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  res.json({
    success: true,
    message: 'Order updated successfully',
    data: order
  });
});

// PATCH partial update order
app.patch('/api/orders/:id', (req, res) => {
  const order = orders.find(o => o.id === req.params.id);
  if (!order) {
    return res.status(404).json({
      success: false,
      message: 'Order not found'
    });
  }

  if (req.body.status) order.status = req.body.status;
  if (req.body.items) {
    order.items = req.body.items;
    order.totalPrice = req.body.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  res.json({
    success: true,
    message: 'Order updated successfully',
    data: order
  });
});

// DELETE order
app.delete('/api/orders/:id', (req, res) => {
  const index = orders.findIndex(o => o.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Order not found'
    });
  }

  const deletedOrder = orders.splice(index, 1);
  res.json({
    success: true,
    message: 'Order deleted successfully',
    data: deletedOrder[0]
  });
});

// ==================== CART ====================

// GET cart
app.get('/api/cart', (req, res) => {
  res.json({
    success: true,
    data: cart,
    total: cart.length
  });
});

// POST add to cart
app.post('/api/cart', (req, res) => {
  const { productId, quantity } = req.body;
  
  if (!productId || !quantity) {
    return res.status(400).json({
      success: false,
      message: 'ProductId and quantity are required'
    });
  }

  const product = products.find(p => p.id === productId);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Product not found'
    });
  }

  const cartItem = cart.find(item => item.productId === productId);
  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cart.push({
      id: uuidv4(),
      productId,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image
    });
  }

  res.status(201).json({
    success: true,
    message: 'Item added to cart',
    data: cart
  });
});

// PUT update cart item
app.put('/api/cart/:productId', (req, res) => {
  const { quantity } = req.body;
  
  const cartItem = cart.find(item => item.productId === req.params.productId);
  if (!cartItem) {
    return res.status(404).json({
      success: false,
      message: 'Cart item not found'
    });
  }

  if (quantity <= 0) {
    const index = cart.indexOf(cartItem);
    cart.splice(index, 1);
  } else {
    cartItem.quantity = quantity;
  }

  res.json({
    success: true,
    message: 'Cart updated successfully',
    data: cart
  });
});

// DELETE remove from cart
app.delete('/api/cart/:productId', (req, res) => {
  const index = cart.findIndex(item => item.productId === req.params.productId);
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Cart item not found'
    });
  }

  const removedItem = cart.splice(index, 1);
  res.json({
    success: true,
    message: 'Item removed from cart',
    data: removedItem[0]
  });
});

// DELETE clear cart
app.delete('/api/cart', (req, res) => {
  cart = [];
  res.json({
    success: true,
    message: 'Cart cleared successfully'
  });
});

// ==================== API INFO ====================

app.get('/api', (req, res) => {
  res.json({
    success: true,
    message: 'E-Commerce API',
    version: '1.0.0',
    endpoints: {
      health: 'GET /api/health',
      products: {
        getAll: 'GET /api/products',
        getById: 'GET /api/products/:id',
        create: 'POST /api/products',
        update: 'PUT /api/products/:id',
        partialUpdate: 'PATCH /api/products/:id',
        delete: 'DELETE /api/products/:id'
      },
      users: {
        getAll: 'GET /api/users',
        getById: 'GET /api/users/:id',
        create: 'POST /api/users',
        update: 'PUT /api/users/:id',
        partialUpdate: 'PATCH /api/users/:id',
        delete: 'DELETE /api/users/:id'
      },
      orders: {
        getAll: 'GET /api/orders',
        getById: 'GET /api/orders/:id',
        create: 'POST /api/orders',
        update: 'PUT /api/orders/:id',
        partialUpdate: 'PATCH /api/orders/:id',
        delete: 'DELETE /api/orders/:id'
      },
      cart: {
        get: 'GET /api/cart',
        add: 'POST /api/cart',
        update: 'PUT /api/cart/:productId',
        remove: 'DELETE /api/cart/:productId',
        clear: 'DELETE /api/cart'
      }
    },
    documentation: 'https://api-sample-ecommerce.vercel.app',
    repository: 'https://github.com/himawari19/api-sample-ecommerce'
  });
});

// ==================== HEALTH CHECK ====================

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'API is running',
    timestamp: new Date()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Serve HTML dashboard
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 E-Commerce API running on http://localhost:${PORT}`);
  console.log(`📊 Dashboard: http://localhost:${PORT}`);
  console.log(`📚 API Documentation: http://localhost:${PORT}/api/health`);
});
