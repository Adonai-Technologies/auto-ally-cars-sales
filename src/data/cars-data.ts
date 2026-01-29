// src/data/cars-data.ts

import carElantra from "@/assets/car-elantra1.jpeg";
import carElantra2 from "@/assets/car-elantra2.jpeg";
import carElantra3 from "@/assets/car-elantra3.jpeg";
import carElantra5 from "@/assets/car-elantra5.jpeg";
import carElantra6 from "@/assets/car-elantra6.jpeg";
import carElantra8 from "@/assets/car-elantra8.jpeg";
import carElantra9 from "@/assets/car-elantra9.jpeg";

import carHighlander1 from "@/assets/car-highlander1.jpeg";
import carHighlander2 from "@/assets/car-highlander2.jpeg";
import carHighlander3 from "@/assets/car-highlander3.jpeg";
import carHighlander4 from "@/assets/car-highlander4.jpeg";
import carHighlander5 from "@/assets/car-highlander5.jpeg";
import carHighlander6 from "@/assets/car-highlander6.jpeg";
import carHighlander7 from "@/assets/car-highlander7.jpeg";
import carHighlander8 from "@/assets/car-highlander8.jpeg";
import carHighlander9 from "@/assets/car-highlander9.jpeg";
import carHighlander10 from "@/assets/car-highlander10.jpeg";
import carHighlander11 from "@/assets/car-highlander11.jpeg";

import carFord1 from "@/assets/car-ford1.jpeg";
import carFord2 from "@/assets/car-ford2.jpeg";
import carFord3 from "@/assets/car-ford3.jpeg";
import carFord4 from "@/assets/car-ford4.jpeg";
import carFord5 from "@/assets/car-ford5.jpeg";
import carFord6 from "@/assets/car-ford6.jpeg";
import carFord7 from "@/assets/car-ford7.jpeg";

import carNissan from "@/assets/car-nissan.png";
import carNissan1 from "@/assets/car-nissan1.jpeg";
import carNissan2 from "@/assets/car-nissan2.jpeg";
import carNissan3 from "@/assets/car-nissan3.jpeg";
import carNissan4 from "@/assets/car-nissan4.jpeg";
import carNissan5 from "@/assets/car-nissan5.jpeg";
import carNissan6 from "@/assets/car-nissan6.jpeg";
import carNissan7 from "@/assets/car-nissan7.jpeg";
import carNissan8 from "@/assets/car-nissan8.jpeg";
import carNissan9 from "@/assets/car-nissan9.jpeg";

import carPrado from "@/assets/car-prado.png";
import carPrado1 from "@/assets/car-prado1.jpeg";
import carPrado2 from "@/assets/car-prado2.jpeg";
import carPrado3 from "@/assets/car-prado3.jpeg";
import carPrado4 from "@/assets/car-prado4.jpeg";
import carPrado5 from "@/assets/car-prado5.jpeg";
import carPrado6 from "@/assets/car-prado6.jpeg";
import carPrado7 from "@/assets/car-prado7.jpeg";
import carPrado8 from "@/assets/car-prado8.jpeg";
import carPrado9 from "@/assets/car-prado9.jpeg";
import carPrado10 from "@/assets/car-prado10.jpeg";
import carPrado11 from "@/assets/car-prado11.jpeg";
import carPrado12 from "@/assets/car-prado12.jpeg";

export const PHONE_NUMBER = "+233277184474";

export const cars = [
  {
    id: 1,
    name: "Hyundai Elantra",
    make: "Hyundai",
    model: "GLS",
    year: 2016,
    mileage: 45230,
    category: "SOLD",
    price: 115000,
    images: [
      carElantra,
      carElantra2,
      carElantra3,
      carElantra5,
      carElantra6,
      carElantra8,
      carElantra9,
    ],
    specs: {
      fuel: "Petrol",
      power: "145 HP",
      transmission: "6-Speed Auto",
    },
  },
  {
    id: 2,
    name: "Toyota Highlander",
    make: "Toyota",
    model: "4WD",
    year: 2012,
    mileage: 67890,
    category: "SUV",
    price: 175000,
    images: [
      carHighlander1,
      carHighlander2,
      carHighlander3,
      carHighlander4,
      carHighlander5,
      carHighlander6,
      carHighlander7,
      carHighlander8,
      carHighlander9,
      carHighlander10,
      carHighlander11,
    ],
    specs: {
      fuel: "Petrol",
      power: "187 HP",
      transmission: "6-Speed Auto",
    },
  },
  {
    id: 3,
    name: "Ford Escape",
    make: "Ford",
    model: "SE",
    year: 2016,
    mileage: 56789,
    category: "SUV",
    price: 230000,
    images: [
      carFord1,
      carFord2,
      carFord3,
      carFord4,
      carFord5,
      carFord6,
      carFord7,
    ],
    specs: {
      fuel: "Petrol",
      power: "250 HP",
      transmission: "6-Speed Auto",
    },
  },
  {
    id: 4,
    name: "Nissan Versa",
    make: "Nissan",
    model: "SE",
    year: 2015,
    mileage: 53000,
    category: "Saloon",
    price: 75000,
    images: [
      carNissan,
      carNissan1,
      carNissan2,
      carNissan3,
      carNissan4,
      carNissan5,
      carNissan6,
      carNissan7,
      carNissan8,
      carNissan9,
    ],
    specs: {
      fuel: "Petrol",
      power: "181 HP",
      transmission: "6-Speed Auto",
    },
  },
  {
    id: 5,
    name: "Toyota Prado",
    make: "Toyota",
    model: "TXL",
    year: 2012,
    mileage: 120000,
    category: "SUV",
    price: 261000,
    images: [
      carPrado,
      carPrado1,
      carPrado2,
      carPrado3,
      carPrado4,
      carPrado5,
      carPrado6,
      carPrado7,
      carPrado8,
      carPrado9,
      carPrado10,
      carPrado11,
      carPrado12,
    ],
    specs: {
      fuel: "Petrol",
      power: "185 HP",
      transmission: "CVT Auto",
    },
  },
];
