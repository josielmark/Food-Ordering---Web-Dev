// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";

import product_06_image_01 from "../images/JollySpaghetti.png";
import product_06_image_02 from "../images/JollySpaghetti2.png";
import product_06_image_03 from "../images/greenwich-spaghetti-large-pan.png";
import product_06_image_04 from "../images/Double-Jolly-SpaghettI.png";

import product_milk_tea_01 from "../images/taro-milk-tea.jpg";
import product_milk_tea_02 from "../images/milk-bubble-tea.png";
import product_milk_tea_03 from "../images/milktea03.png";

const products = [
  {
    id: "1",
    title: "Chicken Burger",
    price: 24.0,
    image01: product_01_image_01,
    category: "Burger",
    desc: "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",

  },

  {
    id: "2",
    title: "Vegetarian Pizza",
    price: 115.0,
    image01: product_02_image_01,
    category: "Pizza",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "3",
    title: "Double Cheese Margherita",
    price: 110.0,
    image01: product_03_image_01,
    category: "Pizza",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "4",
    title: "Maxican Green Wave",
    price: 110.0,
    image01: product_04_image_01,
    category: "Pizza",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "5",
    title: "Cheese Burger",
    price: 24.0,
    image01: product_05_image_01,
    category: "Burger",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "6",
    title: "Royal Cheese Burger",
    price: 24.0,
    image01: product_01_image_01,
    category: "Burger",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "7",
    title: "Seafood Pizza",
    price: 115.0,
    image01: product_02_image_02,
    category: "Pizza",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "8",
    title: "Thin Cheese Pizza",
    price: 110.0,
    image01: product_03_image_02,
    category: "Pizza",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "9",
    title: "Pizza With Mushroom",
    price: 110.0,
    image01: product_04_image_02,
    category: "Pizza",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "10",
    title: "Classic Hamburger",
    price: 24.0,
    image01: product_05_image_02,
    category: "Burger",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "1",
    title: "Jolli Spaghetti ",
    price: 135.0,
    image01: product_06_image_01,
    category: "Dessert",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "12",
    title: "Delicious Spaghetti ",
    price: 145.0,
    image01: product_06_image_02,
    category: "Dessert",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "13",
    title: "Greenwich Spaghetti ",
    price: 155.0,
    image01: product_06_image_03,
    category: "Dessert",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "14",
    title: "Double-Jolly-SpaghettI ",
    price: 255.0,
    image01: product_06_image_04,
    category: "Dessert",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "15",
    title: "Taro Milk Tea",
    price: 65.0,
    image01: product_milk_tea_01,
    category: "Drinks",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "16",
    title: "Bubble Milk Tea",
    price: 55.0,
    image01: product_milk_tea_02,
    category: "Drinks",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "17",
    title: "Mocha Chocolate Milk Tea",
    price: 75.0,
    image01: product_milk_tea_03,
    category: "Drinks",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

];

export default products;
