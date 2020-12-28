import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([
    {
      _id: "1",
      title: "Adidas Ultraboost",
      images: [
        "https://media.endclothing.com/media/f_auto,q_auto:eco,w_400,h_400/prodmedia/media/catalog/product/2/2/22-08-2018_adidas_ultraboost40_white_bb6168_ka_1.jpG",
        "https://media.endclothing.com/media/f_auto,q_auto:eco,w_400,h_400/prodmedia/media/catalog/product/2/2/22-08-2018_adidas_ultraboost40_white_bb6168_ka_3.jpg",
        "https://media.endclothing.com/media/f_auto,q_auto:eco,w_400,h_400/prodmedia/media/catalog/product/2/2/22-08-2018_adidas_ultraboost40_white_bb6168_ka_6.jpg",
        "https://media.endclothing.com/media/f_auto,q_auto:eco,w_400,h_400/prodmedia/media/catalog/product/2/2/22-08-2018_adidas_ultraboost40_white_bb6168_ka_7.jpg",
      ],
      description: "White",
      content:
        "Comfort is in the Ultraboost’s DNA, and the latest from adidas continues to prove that. It’s crafted from soft white Primeknit — a partially recycled variant, though, that repurposes ocean plastic — and supported with synthetic three stripe caging. Repsonsive boost™ cushioning forms the midsole, as always, for unrivalled comfort.",
      colors: ["red", "black", "teal"],
      sizes: ["8", "9", "10", "11", "12"],
      price: 180,
      count: 5,
    },
    {
      _id: "2",
      title: "Nike AF1",
      images: [
        "https://media.endclothing.com/media/f_auto,q_auto:eco,w_400,h_400/prodmedia/media/catalog/product/3/0/30-11-2020_jm_CI0919-100_m1_1.jpg",
        "https://media.endclothing.com/media/f_auto,q_auto:eco,w_400,h_400/prodmedia/media/catalog/product/3/0/30-11-2020_jm_CI0919-100_m1_1.jpg",
        "https://media.endclothing.com/media/f_auto,q_auto:eco,w_400,h_400/prodmedia/media/catalog/product/3/0/30-11-2020_jm_CI0919-100_m1_1.jpg",
        "https://media.endclothing.com/media/f_auto,q_auto:eco,w_400,h_400/prodmedia/media/catalog/product/3/0/30-11-2020_jm_CI0919-100_m1_1.jpg",
      ],
      description: "White / Black",
      content: "Nice shoes.",
      colors: ["red", "black", "teal"],
      sizes: ["8", "9", "10", "11", "12"],
      price: 102,
      count: 1,
    },
    {
      _id: "3",
      title: "Common Projects",
      images: [
        "https://media.endclothing.com/media/f_auto,q_auto:eco,w_400,h_400/prodmedia/media/catalog/product/2/1/21-08-2019_commonprojects_originalachilleslow_white_1528-0506_jm_1x.jpg",
        "https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/2/9/29-11-2019_acnestudios_nashtee_opticwhite_25e173-183_aj_1.jpg",
        "https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/2/9/29-11-2019_acnestudios_nashtee_opticwhite_25e173-183_aj_1.jpg",
        "https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/2/9/29-11-2019_acnestudios_nashtee_opticwhite_25e173-183_aj_1.jpg",
      ],
      description: "White",
      content: "Nice shoes.",
      colors: ["red", "black", "teal"],
      sizes: ["8", "9", "10", "11", "12"],
      price: 103,
      count: 1,
    },
    {
      _id: "4",
      title: "Nike Air Max 95 Essential",
      images: [
        "https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/2/0/20-11-2020_SI_CT1268-100_1_1.jpg",
        "https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/2/0/20-11-2020_SI_CT1268-100_1_1.jpg",
        "https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/2/0/20-11-2020_SI_CT1268-100_1_1.jpg",
        "https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/2/0/20-11-2020_SI_CT1268-100_1_1.jpg",
      ],
      description: "White",
      content: "Good shoes",
      colors: ["red", "black", "teal"],
      sizes: ["8", "9", "10", "11", "12"],
      price: 104,
      count: 1,
    },
    {
      _id: "5",
      title: "New Balance",
      images: [
        "https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/2/7/27-11-2020_jm_M990GL5_1_1.jpg",
        "https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/2/7/27-11-2020_jm_M990GL5_1_1.jpg",
        "https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/2/7/27-11-2020_jm_M990GL5_1_1.jpg",
        "https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/2/7/27-11-2020_jm_M990GL5_1_1.jpg",
      ],
      description: "Gray",
      content: "Good shoes",
      colors: ["red", "black", "teal"],
      sizes: ["8", "9", "10", "11", "12"],
      price: 105,
      count: 1,
    },
    {
      _id: "6",
      title: "Saint Laurent",
      images: [
        "https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/1/3/13-11-2019_saintlaurent_sl10courtperf_leathersneaker_triplewhite_603223-1jz10-9030_bl_1.jpg",
        "https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/1/3/13-11-2019_saintlaurent_sl10courtperf_leathersneaker_triplewhite_603223-1jz10-9030_bl_4.jpg",
        "https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/1/3/13-11-2019_saintlaurent_sl10courtperf_leathersneaker_triplewhite_603223-1jz10-9030_bl_5.jpg",
        "https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/2/7/27-10-2020_jd_603223-1jz10-9030_m7.jpg",
      ],
      description: "White",
      content: "Nice shoes.",
      colors: ["red", "black", "teal"],
      sizes: ["8", "9", "10", "11", "12"],
      price: 106,
      count: 1,
    },
  ]);

  const [cart, setCart] = useState([]);

  console.log(cart); // create the cart array

  // returns true if the item is not already in the cart. If checking is true, then add the product into the cart.
  const addCart = (id) => {
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert("The product has been already added to cart.");
    }
  };

  //Localhost

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) setCart(dataCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart), [cart]);
  });

  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addCart: addCart,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};

export default DataProvider;
