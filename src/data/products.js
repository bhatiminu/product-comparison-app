import iPhone14Img from '../assets/iphone-14.jpg';
import galaxyImg from '../assets/galaxy.jpg';
import pixelImg from '../assets/pixel-7.webp';

const products = [
  {
    id: 1,
    name: "iPhone 14",
    brand: "Apple",
    price: "$799",
    image: iPhone14Img,
    features: ["Battery: 20h", "Screen: 6.1\"", "Camera: 12MP"]
  },
  {
    id: 2,
    name: "Galaxy S23",
    brand: "Samsung",
    price: "$749",
    image: galaxyImg,
    features: ["Battery: 22h", "Screen: 6.2\"", "Camera: 50MP"]
  },
  {
    id: 3,
    name: "Pixel 7",
    brand: "Google",
    price: "$699",
    image: pixelImg,
    features: ["Battery: 21h", "Screen: 6.3\"", "Camera: 48MP"]
  },
   {
    id: 4,
    name: "Pixel 8",
    brand: "Google",
    price: "$999",
    image: pixelImg,
    features: ["Battery: 21h", "Screen: 6.3\"", "Camera: 48MP"]
  },
   {
    id: 5,
    name: "Pixel 9",
    brand: "Google",
    price: "$500",
    image: pixelImg,
    features: ["Battery: 21h", "Screen: 6.3\"", "Camera: 48MP"]
  },
];

export default products;
