import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Derek',
      email: 'admin@test.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'FooBar',
      email: 'FooBar@test.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: 1,
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: 2,
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: 3,
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      // _id: 4,
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },{
      // _id: 4,
      name: 'Apple iPhone 13 Blue',
      slug: 'apple-iphone-13.1',
      category: 'Smartphones',
      image: '/images/ph1.jpg',
      price: 1000,
      countInStock: 15,
      brand: 'Iphone',
      rating: 5.0,
      numReviews: 40,
      description: 'The most advanced dual-camera system ever on iPhone. Lightning-fast A15 Bionic chip. A big leap in battery life. Durable design. Superfast 5G.1 And a brighter Super Retina XDR display.',
    },{
      // _id: 4,
      name: 'Apple iPhone 13 Red',
      slug: 'apple-iphone-13.2',
      category: 'Smartphones',
      image: '/images/ph2.jpg',
      price: 1000,
      countInStock: 15,
      brand: 'Iphone',
      rating: 5.0,
      numReviews: 40,
      description: 'The most advanced dual-camera system ever on iPhone. Lightning-fast A15 Bionic chip. A big leap in battery life. Durable design. Superfast 5G.1 And a brighter Super Retina XDR display.',
    },{
      // _id: 4,
      name: 'Apple iPhone 13 Green',
      slug: 'apple-iphone-13.3',
      category: 'Smartphones',
      image: '/images/ph3.jpg',
      price: 1000,
      countInStock: 15,
      brand: 'Iphone',
      rating: 5.0,
      numReviews: 40,
      description: 'The most advanced dual-camera system ever on iPhone. Lightning-fast A15 Bionic chip. A big leap in battery life. Durable design. Superfast 5G.1 And a brighter Super Retina XDR display.',
    },{
      // _id: 4,
      name: 'Apple iPhone 13 Pink',
      slug: 'apple-iphone-13',
      category: 'Smartphones',
      image: '/images/ph4.jpg',
      price: 1000,
      countInStock: 15,
      brand: 'Iphone',
      rating: 5.0,
      numReviews: 40,
      description: 'The most advanced dual-camera system ever on iPhone. Lightning-fast A15 Bionic chip. A big leap in battery life. Durable design. Superfast 5G.1 And a brighter Super Retina XDR display.',
    },
  ],
};

export default data;
