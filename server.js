const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const rateLimit = require('express-rate-limit');
const swaggerUi = require('swagger-ui-express');

const app = express();
const PORT = process.env.PORT || 3000;

// Load swagger.json
const swaggerDocument = require('./swagger.json');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ==================== RATE LIMITING ====================

// General rate limiter: 100 requests per 15 minutes per IP
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Strict rate limiter for auth endpoints: 5 requests per 15 minutes per IP
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many login/register attempts, please try again later.',
  skipSuccessfulRequests: true, // Don't count successful requests
});

// Admin limiter: 10 requests per hour per IP
const adminLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10,
  message: 'Too many admin requests, please try again later.',
});

// Apply general rate limiter to all routes
app.use(generalLimiter);

// Swagger UI - setup dengan inline spec
const swaggerOptions = {
  definition: swaggerDocument,
  apis: []
};

app.use('/api/docs', swaggerUi.serve);
app.get('/api/docs', swaggerUi.setup(swaggerDocument, {
  swaggerOptions: {
    persistAuthorization: true
  }
}));

// Serve swagger.json
app.get('/api/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json(swaggerDocument);
});

// Serve custom swagger HTML
app.get('/swagger', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'swagger.html'));
});

// In-memory database
let products = [
  {
    id: 'laptop-gaming',
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
    id: 'smartphone-pro',
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
    id: 'wireless-headphones',
    name: 'Wireless Headphones',
    price: 1500000,
    category: 'Accessories',
    stock: 50,
    description: 'Premium wireless headphones with noise cancellation',
    image: 'https://via.placeholder.com/300x300?text=Headphones',
    rating: 4.3,
    createdAt: new Date()
  },
  {
    id: 'usb-c-cable',
    name: 'USB-C Cable',
    price: 150000,
    category: 'Accessories',
    stock: 100,
    description: 'Fast charging USB-C cable',
    image: 'https://via.placeholder.com/300x300?text=Cable',
    rating: 4.6,
    createdAt: new Date()
  },
  {
    id: 'mechanical-keyboard',
    name: 'Mechanical Keyboard',
    price: 2500000,
    category: 'Accessories',
    stock: 30,
    description: 'RGB mechanical keyboard for gaming',
    image: 'https://via.placeholder.com/300x300?text=Keyboard',
    rating: 4.7,
    createdAt: new Date()
  },
  {
    id: 'gaming-mouse',
    name: 'Gaming Mouse',
    price: 800000,
    category: 'Accessories',
    stock: 45,
    description: 'High precision gaming mouse',
    image: 'https://via.placeholder.com/300x300?text=Mouse',
    rating: 4.4,
    createdAt: new Date()
  },
  {
    id: 'monitor-4k',
    name: 'Monitor 4K',
    price: 5000000,
    category: 'Electronics',
    stock: 8,
    description: '4K Ultra HD monitor for professional work',
    image: 'https://via.placeholder.com/300x300?text=Monitor',
    rating: 4.9,
    createdAt: new Date()
  },
  {
    id: 'webcam-hd',
    name: 'Webcam HD',
    price: 1200000,
    category: 'Electronics',
    stock: 20,
    description: '1080p HD webcam with microphone',
    image: 'https://via.placeholder.com/300x300?text=Webcam',
    rating: 4.2,
    createdAt: new Date()
  },
  {
    id: 'laptop-stand',
    name: 'Laptop Stand',
    price: 350000,
    category: 'Accessories',
    stock: 60,
    description: 'Adjustable aluminum laptop stand',
    image: 'https://via.placeholder.com/300x300?text=Stand',
    rating: 4.5,
    createdAt: new Date()
  },
  {
    id: 'power-bank-20000',
    name: 'Power Bank 20000mAh',
    price: 450000,
    category: 'Accessories',
    stock: 80,
    description: 'Fast charging power bank with dual USB',
    image: 'https://via.placeholder.com/300x300?text=PowerBank',
    rating: 4.6,
    createdAt: new Date()
  }
];

let users = [
  {
    id: 'john-doe',
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    phone: '08123456789',
    address: 'Jl. Merdeka No. 1',
    createdAt: new Date()
  },
  {
    id: 'jane-smith',
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password456',
    phone: '08987654321',
    address: 'Jl. Sudirman No. 2',
    createdAt: new Date()
  },
  {
    id: 'bob-wilson',
    name: 'Bob Wilson',
    email: 'bob@example.com',
    password: 'password789',
    phone: '08555666777',
    address: 'Jl. Ahmad Yani No. 3',
    createdAt: new Date()
  },
  {
    id: 'alice-johnson',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    password: 'password101',
    phone: '08111222333',
    address: 'Jl. Gatot Subroto No. 4',
    createdAt: new Date()
  },
  {
    id: 'charlie-brown',
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    password: 'password202',
    phone: '08444555666',
    address: 'Jl. Diponegoro No. 5',
    createdAt: new Date()
  },
  {
    id: 'diana-prince',
    name: 'Diana Prince',
    email: 'diana@example.com',
    password: 'password303',
    phone: '08777888999',
    address: 'Jl. Imam Bonjol No. 6',
    createdAt: new Date()
  },
  {
    id: 'edward-norton',
    name: 'Edward Norton',
    email: 'edward@example.com',
    password: 'password404',
    phone: '08222333444',
    address: 'Jl. Hayam Wuruk No. 7',
    createdAt: new Date()
  },
  {
    id: 'fiona-green',
    name: 'Fiona Green',
    email: 'fiona@example.com',
    password: 'password505',
    phone: '08666777888',
    address: 'Jl. Pemuda No. 8',
    createdAt: new Date()
  },
  {
    id: 'george-miller',
    name: 'George Miller',
    email: 'george@example.com',
    password: 'password606',
    phone: '08333444555',
    address: 'Jl. Veteran No. 9',
    createdAt: new Date()
  },
  {
    id: 'hannah-lee',
    name: 'Hannah Lee',
    email: 'hannah@example.com',
    password: 'password707',
    phone: '08999111222',
    address: 'Jl. Cendana No. 10',
    createdAt: new Date()
  }
];

let orders = [
  {
    id: 'order-laptop-gaming-001',
    userId: 'john-doe',
    items: [{ productId: 'laptop-gaming', quantity: 1, price: 15000000 }],
    totalPrice: 15000000,
    status: 'pending',
    createdAt: new Date()
  },
  {
    id: 'order-smartphone-pro-001',
    userId: 'jane-smith',
    items: [{ productId: 'smartphone-pro', quantity: 2, price: 8000000 }],
    totalPrice: 16000000,
    status: 'shipped',
    createdAt: new Date()
  },
  {
    id: 'order-headphones-001',
    userId: 'bob-wilson',
    items: [{ productId: 'wireless-headphones', quantity: 3, price: 1500000 }],
    totalPrice: 4500000,
    status: 'delivered',
    createdAt: new Date()
  },
  {
    id: 'order-cable-keyboard-001',
    userId: 'alice-johnson',
    items: [{ productId: 'usb-c-cable', quantity: 1, price: 150000 }, { productId: 'mechanical-keyboard', quantity: 1, price: 2500000 }],
    totalPrice: 2650000,
    status: 'pending',
    createdAt: new Date()
  },
  {
    id: 'order-mouse-001',
    userId: 'charlie-brown',
    items: [{ productId: 'gaming-mouse', quantity: 2, price: 800000 }],
    totalPrice: 1600000,
    status: 'shipped',
    createdAt: new Date()
  },
  {
    id: 'order-monitor-4k-001',
    userId: 'diana-prince',
    items: [{ productId: 'monitor-4k', quantity: 1, price: 5000000 }],
    totalPrice: 5000000,
    status: 'delivered',
    createdAt: new Date()
  },
  {
    id: 'order-webcam-stand-001',
    userId: 'edward-norton',
    items: [{ productId: 'webcam-hd', quantity: 1, price: 1200000 }, { productId: 'laptop-stand', quantity: 2, price: 350000 }],
    totalPrice: 1900000,
    status: 'pending',
    createdAt: new Date()
  },
  {
    id: 'order-powerbank-001',
    userId: 'fiona-green',
    items: [{ productId: 'power-bank-20000', quantity: 3, price: 450000 }],
    totalPrice: 1350000,
    status: 'shipped',
    createdAt: new Date()
  },
  {
    id: 'order-laptop-smartphone-001',
    userId: 'george-miller',
    items: [{ productId: 'laptop-gaming', quantity: 1, price: 15000000 }, { productId: 'smartphone-pro', quantity: 1, price: 8000000 }],
    totalPrice: 23000000,
    status: 'delivered',
    createdAt: new Date()
  },
  {
    id: 'order-headphones-002',
    userId: 'hannah-lee',
    items: [{ productId: 'wireless-headphones', quantity: 2, price: 1500000 }],
    totalPrice: 3000000,
    status: 'pending',
    createdAt: new Date()
  }
];

let cart = [];

// ==================== AUTO RESET DATA ====================

// Function to reset all data to initial state
function resetData() {
  products = [
    { id: 'laptop-gaming', name: 'Laptop Gaming', price: 15000000, category: 'Electronics', stock: 10, description: 'High performance gaming laptop', image: 'https://via.placeholder.com/300x300?text=Laptop', rating: 4.5, createdAt: new Date() },
    { id: 'smartphone-pro', name: 'Smartphone Pro', price: 8000000, category: 'Electronics', stock: 25, description: 'Latest smartphone with advanced features', image: 'https://via.placeholder.com/300x300?text=Smartphone', rating: 4.8, createdAt: new Date() },
    { id: 'wireless-headphones', name: 'Wireless Headphones', price: 1500000, category: 'Accessories', stock: 50, description: 'Premium wireless headphones with noise cancellation', image: 'https://via.placeholder.com/300x300?text=Headphones', rating: 4.3, createdAt: new Date() },
    { id: 'usb-c-cable', name: 'USB-C Cable', price: 150000, category: 'Accessories', stock: 100, description: 'Fast charging USB-C cable', image: 'https://via.placeholder.com/300x300?text=Cable', rating: 4.6, createdAt: new Date() },
    { id: 'mechanical-keyboard', name: 'Mechanical Keyboard', price: 2500000, category: 'Accessories', stock: 30, description: 'RGB mechanical keyboard for gaming', image: 'https://via.placeholder.com/300x300?text=Keyboard', rating: 4.7, createdAt: new Date() },
    { id: 'gaming-mouse', name: 'Gaming Mouse', price: 800000, category: 'Accessories', stock: 45, description: 'High precision gaming mouse', image: 'https://via.placeholder.com/300x300?text=Mouse', rating: 4.4, createdAt: new Date() },
    { id: 'monitor-4k', name: 'Monitor 4K', price: 5000000, category: 'Electronics', stock: 8, description: '4K Ultra HD monitor for professional work', image: 'https://via.placeholder.com/300x300?text=Monitor', rating: 4.9, createdAt: new Date() },
    { id: 'webcam-hd', name: 'Webcam HD', price: 1200000, category: 'Electronics', stock: 20, description: '1080p HD webcam with microphone', image: 'https://via.placeholder.com/300x300?text=Webcam', rating: 4.2, createdAt: new Date() },
    { id: 'laptop-stand', name: 'Laptop Stand', price: 350000, category: 'Accessories', stock: 60, description: 'Adjustable aluminum laptop stand', image: 'https://via.placeholder.com/300x300?text=Stand', rating: 4.5, createdAt: new Date() },
    { id: 'power-bank-20000', name: 'Power Bank 20000mAh', price: 450000, category: 'Accessories', stock: 80, description: 'Fast charging power bank with dual USB', image: 'https://via.placeholder.com/300x300?text=PowerBank', rating: 4.6, createdAt: new Date() }
  ];

  users = [
    { id: 'john-doe', name: 'John Doe', email: 'john@example.com', password: 'password123', phone: '08123456789', address: 'Jl. Merdeka No. 1', createdAt: new Date() },
    { id: 'jane-smith', name: 'Jane Smith', email: 'jane@example.com', password: 'password456', phone: '08987654321', address: 'Jl. Sudirman No. 2', createdAt: new Date() },
    { id: 'bob-wilson', name: 'Bob Wilson', email: 'bob@example.com', password: 'password789', phone: '08555666777', address: 'Jl. Ahmad Yani No. 3', createdAt: new Date() },
    { id: 'alice-johnson', name: 'Alice Johnson', email: 'alice@example.com', password: 'password101', phone: '08111222333', address: 'Jl. Gatot Subroto No. 4', createdAt: new Date() },
    { id: 'charlie-brown', name: 'Charlie Brown', email: 'charlie@example.com', password: 'password202', phone: '08444555666', address: 'Jl. Diponegoro No. 5', createdAt: new Date() },
    { id: 'diana-prince', name: 'Diana Prince', email: 'diana@example.com', password: 'password303', phone: '08777888999', address: 'Jl. Imam Bonjol No. 6', createdAt: new Date() },
    { id: 'edward-norton', name: 'Edward Norton', email: 'edward@example.com', password: 'password404', phone: '08222333444', address: 'Jl. Hayam Wuruk No. 7', createdAt: new Date() },
    { id: 'fiona-green', name: 'Fiona Green', email: 'fiona@example.com', password: 'password505', phone: '08666777888', address: 'Jl. Pemuda No. 8', createdAt: new Date() },
    { id: 'george-miller', name: 'George Miller', email: 'george@example.com', password: 'password606', phone: '08333444555', address: 'Jl. Veteran No. 9', createdAt: new Date() },
    { id: 'hannah-lee', name: 'Hannah Lee', email: 'hannah@example.com', password: 'password707', phone: '08999111222', address: 'Jl. Cendana No. 10', createdAt: new Date() }
  ];

  orders = [
    { id: 'order-laptop-gaming-001', userId: 'john-doe', items: [{ productId: 'laptop-gaming', quantity: 1, price: 15000000 }], totalPrice: 15000000, status: 'pending', createdAt: new Date() },
    { id: 'order-smartphone-pro-001', userId: 'jane-smith', items: [{ productId: 'smartphone-pro', quantity: 2, price: 8000000 }], totalPrice: 16000000, status: 'shipped', createdAt: new Date() },
    { id: 'order-headphones-001', userId: 'bob-wilson', items: [{ productId: 'wireless-headphones', quantity: 3, price: 1500000 }], totalPrice: 4500000, status: 'delivered', createdAt: new Date() },
    { id: 'order-cable-keyboard-001', userId: 'alice-johnson', items: [{ productId: 'usb-c-cable', quantity: 1, price: 150000 }, { productId: 'mechanical-keyboard', quantity: 1, price: 2500000 }], totalPrice: 2650000, status: 'pending', createdAt: new Date() },
    { id: 'order-mouse-001', userId: 'charlie-brown', items: [{ productId: 'gaming-mouse', quantity: 2, price: 800000 }], totalPrice: 1600000, status: 'shipped', createdAt: new Date() },
    { id: 'order-monitor-4k-001', userId: 'diana-prince', items: [{ productId: 'monitor-4k', quantity: 1, price: 5000000 }], totalPrice: 5000000, status: 'delivered', createdAt: new Date() },
    { id: 'order-webcam-stand-001', userId: 'edward-norton', items: [{ productId: 'webcam-hd', quantity: 1, price: 1200000 }, { productId: 'laptop-stand', quantity: 2, price: 350000 }], totalPrice: 1900000, status: 'pending', createdAt: new Date() },
    { id: 'order-powerbank-001', userId: 'fiona-green', items: [{ productId: 'power-bank-20000', quantity: 3, price: 450000 }], totalPrice: 1350000, status: 'shipped', createdAt: new Date() },
    { id: 'order-laptop-smartphone-001', userId: 'george-miller', items: [{ productId: 'laptop-gaming', quantity: 1, price: 15000000 }, { productId: 'smartphone-pro', quantity: 1, price: 8000000 }], totalPrice: 23000000, status: 'delivered', createdAt: new Date() },
    { id: 'order-headphones-002', userId: 'hannah-lee', items: [{ productId: 'wireless-headphones', quantity: 2, price: 1500000 }], totalPrice: 3000000, status: 'pending', createdAt: new Date() }
  ];

  cart = [];
  console.log('✅ Data reset to initial state');
}

// Auto reset every 1 hour (3600000 ms)
setInterval(resetData, 3600000);

// ==================== PRODUCTS ====================

// GET all products
app.get('/api/products', (req, res) => {
  const startTime = Date.now();
  let filtered = [...products];

  // Search by name or category
  if (req.query.q) {
    const searchTerm = req.query.q.toLowerCase();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(searchTerm) || 
      p.category.toLowerCase().includes(searchTerm)
    );
  }

  // Filter by category
  if (req.query.category) {
    filtered = filtered.filter(p => p.category === req.query.category);
  }

  // Filter by price range
  if (req.query.minPrice || req.query.maxPrice) {
    const minPrice = req.query.minPrice ? parseInt(req.query.minPrice) : 0;
    const maxPrice = req.query.maxPrice ? parseInt(req.query.maxPrice) : Infinity;
    filtered = filtered.filter(p => p.price >= minPrice && p.price <= maxPrice);
  }

  // Sorting
  if (req.query.sort) {
    const sortField = req.query.sort;
    const sortOrder = req.query.order === 'desc' ? -1 : 1;
    filtered.sort((a, b) => {
      if (a[sortField] < b[sortField]) return -1 * sortOrder;
      if (a[sortField] > b[sortField]) return 1 * sortOrder;
      return 0;
    });
  }

  // Pagination
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedData = filtered.slice(startIndex, endIndex);

  const processingTime = Date.now() - startTime;

  res.json({
    success: true,
    data: paginatedData,
    meta: {
      pagination: {
        total: filtered.length,
        page,
        limit,
        pages: Math.ceil(filtered.length / limit)
      },
      filters: {
        search: req.query.q || null,
        category: req.query.category || null,
        priceRange: (req.query.minPrice || req.query.maxPrice) ? {
          min: req.query.minPrice ? parseInt(req.query.minPrice) : 0,
          max: req.query.maxPrice ? parseInt(req.query.maxPrice) : 'unlimited'
        } : null
      },
      sorting: {
        field: req.query.sort || 'default',
        order: req.query.order || 'asc'
      },
      timestamp: new Date().toISOString(),
      processingTime: `${processingTime}ms`
    }
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
  const startTime = Date.now();
  let filtered = [...users];

  // Search by name or email
  if (req.query.q) {
    const searchTerm = req.query.q.toLowerCase();
    filtered = filtered.filter(u => 
      u.name.toLowerCase().includes(searchTerm) || 
      u.email.toLowerCase().includes(searchTerm)
    );
  }

  // Sorting
  if (req.query.sort) {
    const sortField = req.query.sort;
    const sortOrder = req.query.order === 'desc' ? -1 : 1;
    filtered.sort((a, b) => {
      if (a[sortField] < b[sortField]) return -1 * sortOrder;
      if (a[sortField] > b[sortField]) return 1 * sortOrder;
      return 0;
    });
  }

  // Pagination
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedData = filtered.slice(startIndex, endIndex);

  const processingTime = Date.now() - startTime;

  res.json({
    success: true,
    data: paginatedData,
    meta: {
      pagination: {
        total: filtered.length,
        page,
        limit,
        pages: Math.ceil(filtered.length / limit)
      },
      filters: {
        search: req.query.q || null
      },
      sorting: {
        field: req.query.sort || 'default',
        order: req.query.order || 'asc'
      },
      timestamp: new Date().toISOString(),
      processingTime: `${processingTime}ms`
    }
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
  let filtered = [...orders];

  // Filter by status
  if (req.query.status) {
    filtered = filtered.filter(o => o.status === req.query.status);
  }

  // Filter by userId
  if (req.query.userId) {
    filtered = filtered.filter(o => o.userId === req.query.userId);
  }

  // Filter by date range
  if (req.query.from || req.query.to) {
    const fromDate = req.query.from ? new Date(req.query.from) : new Date(0);
    const toDate = req.query.to ? new Date(req.query.to) : new Date();
    filtered = filtered.filter(o => {
      const orderDate = new Date(o.createdAt);
      return orderDate >= fromDate && orderDate <= toDate;
    });
  }

  // Sorting
  if (req.query.sort) {
    const sortField = req.query.sort;
    const sortOrder = req.query.order === 'desc' ? -1 : 1;
    filtered.sort((a, b) => {
      if (a[sortField] < b[sortField]) return -1 * sortOrder;
      if (a[sortField] > b[sortField]) return 1 * sortOrder;
      return 0;
    });
  }

  // Pagination
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedData = filtered.slice(startIndex, endIndex);

  const processingTime = Date.now() - startTime;

  res.json({
    success: true,
    data: paginatedData,
    meta: {
      pagination: {
        total: filtered.length,
        page,
        limit,
        pages: Math.ceil(filtered.length / limit)
      },
      filters: {
        status: req.query.status || null,
        userId: req.query.userId || null,
        dateRange: (req.query.from || req.query.to) ? {
          from: req.query.from || 'beginning',
          to: req.query.to || 'now'
        } : null
      },
      sorting: {
        field: req.query.sort || 'default',
        order: req.query.order || 'asc'
      },
      timestamp: new Date().toISOString(),
      processingTime: `${processingTime}ms`
    }
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

  if (quantity <= 0) {
    return res.status(400).json({
      success: false,
      message: 'Quantity must be greater than 0'
    });
  }

  const product = products.find(p => p.id === productId);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Product not found'
    });
  }

  if (quantity > product.stock) {
    return res.status(400).json({
      success: false,
      message: `Quantity exceeds available stock. Available: ${product.stock}`
    });
  }

  const cartItem = cart.find(item => item.productId === productId);
  if (cartItem) {
    const newQuantity = cartItem.quantity + quantity;
    if (newQuantity > product.stock) {
      return res.status(400).json({
        success: false,
        message: `Total quantity exceeds available stock. Available: ${product.stock}, Current in cart: ${cartItem.quantity}`
      });
    }
    cartItem.quantity = newQuantity;
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

  const product = products.find(p => p.id === req.params.productId);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Product not found'
    });
  }

  if (quantity <= 0) {
    const index = cart.indexOf(cartItem);
    cart.splice(index, 1);
  } else {
    if (quantity > product.stock) {
      return res.status(400).json({
        success: false,
        message: `Quantity exceeds available stock. Available: ${product.stock}`
      });
    }
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

// ==================== ADMIN - TEST DATA CONTROL ====================

// POST reset data on demand
app.post('/api/admin/reset', adminLimiter, (req, res) => {
  const adminKey = req.headers['x-admin-key'];
  
  if (!adminKey || adminKey !== process.env.ADMIN_KEY) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized - Invalid or missing admin key'
    });
  }

  resetData();
  
  res.json({
    success: true,
    message: 'Data reset successfully to initial state',
    data: {
      products: products.length,
      users: users.length,
      orders: orders.length,
      cart: cart.length,
      timestamp: new Date().toISOString()
    }
  });
});

// POST seed data with specific scenario
app.post('/api/admin/seed', adminLimiter, (req, res) => {
  const adminKey = req.headers['x-admin-key'];
  
  if (!adminKey || adminKey !== process.env.ADMIN_KEY) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized - Invalid or missing admin key'
    });
  }

  const scenario = req.query.scenario || 'default';

  if (scenario === 'happy_path') {
    // Happy path: all products available, users ready, orders pending
    resetData();
    res.json({
      success: true,
      message: 'Data seeded with happy_path scenario',
      scenario: 'happy_path',
      description: 'All products in stock, users created, orders ready for processing',
      data: {
        products: products.length,
        users: users.length,
        orders: orders.length,
        timestamp: new Date().toISOString()
      }
    });
  } else if (scenario === 'low_stock') {
    // Low stock scenario: some products with low stock
    resetData();
    products[0].stock = 2;
    products[1].stock = 1;
    products[2].stock = 0;
    res.json({
      success: true,
      message: 'Data seeded with low_stock scenario',
      scenario: 'low_stock',
      description: 'Some products have low or zero stock for testing',
      data: {
        products: products.length,
        lowStockItems: products.filter(p => p.stock <= 2).length,
        outOfStockItems: products.filter(p => p.stock === 0).length,
        timestamp: new Date().toISOString()
      }
    });
  } else if (scenario === 'high_volume') {
    // High volume scenario: many orders
    resetData();
    for (let i = 0; i < 50; i++) {
      orders.push({
        id: `order-bulk-${i + 1}`,
        userId: users[i % users.length].id,
        items: [{ productId: products[i % products.length].id, quantity: Math.floor(Math.random() * 5) + 1, price: products[i % products.length].price }],
        totalPrice: products[i % products.length].price * (Math.floor(Math.random() * 5) + 1),
        status: ['pending', 'shipped', 'delivered'][Math.floor(Math.random() * 3)],
        createdAt: new Date()
      });
    }
    res.json({
      success: true,
      message: 'Data seeded with high_volume scenario',
      scenario: 'high_volume',
      description: 'Created 50 orders for volume testing',
      data: {
        products: products.length,
        users: users.length,
        orders: orders.length,
        timestamp: new Date().toISOString()
      }
    });
  } else {
    resetData();
    res.json({
      success: true,
      message: 'Data seeded with default scenario',
      scenario: 'default',
      description: 'Initial data loaded',
      data: {
        products: products.length,
        users: users.length,
        orders: orders.length,
        timestamp: new Date().toISOString()
      }
    });
  }
});

// GET meta information about API and last reset
app.get('/api/meta', (req, res) => {
  res.json({
    success: true,
    data: {
      apiVersion: '1.0.0',
      environment: process.env.NODE_ENV || 'development',
      dataState: {
        products: products.length,
        users: users.length,
        orders: orders.length,
        cartItems: cart.length
      },
      features: {
        authentication: true,
        pagination: true,
        filtering: true,
        sorting: true,
        search: true,
        testDataControl: true,
        autoReset: '1 hour'
      },
      endpoints: {
        total: 30,
        categories: ['Health', 'Auth', 'Products', 'Users', 'Orders', 'Cart', 'Admin']
      },
      timestamp: new Date().toISOString(),
      uptime: `${Math.floor(process.uptime())}s`
    }
  });
});

// ==================== AUTHENTICATION ====================

// POST login user
app.post('/api/auth/login', authLimiter, (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Email and password are required'
    });
  }

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({
      success: false,
      message: 'Invalid email or password'
    });
  }

  // Generate simple token (in production, use JWT)
  const token = Buffer.from(`${user.id}:${Date.now()}`).toString('base64');

  res.json({
    success: true,
    message: 'Login successful',
    data: {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address
      }
    }
  });
});

// POST register new user
app.post('/api/auth/register', authLimiter, (req, res) => {
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
      message: 'Email already registered'
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

  // Generate token
  const token = Buffer.from(`${newUser.id}:${Date.now()}`).toString('base64');

  res.status(201).json({
    success: true,
    message: 'Registration successful',
    data: {
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        address: newUser.address
      }
    }
  });
});

// GET verify token
app.get('/api/auth/verify', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Token is required'
    });
  }

  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    const userId = decoded.split(':')[0];
    const user = users.find(u => u.id === userId);
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid token'
      });
    }

    res.json({
      success: true,
      message: 'Token is valid',
      data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        }
      }
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Invalid token'
    });
  }
});

// ==================== API INFO ====================

app.get('/api', (req, res) => {
  res.json({
    success: true,
    message: 'E-Commerce API',
    version: '1.0.0',
    endpoints: {
      health: 'GET /api/health',
      meta: 'GET /api/meta',
      auth: {
        login: 'POST /api/auth/login',
        register: 'POST /api/auth/register',
        verify: 'GET /api/auth/verify'
      },
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
      },
      admin: {
        reset: 'POST /api/admin/reset (requires x-admin-key header)',
        seed: 'POST /api/admin/seed?scenario=happy_path|low_stock|high_volume (requires x-admin-key header)'
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
