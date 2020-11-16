import React from "react";
import Product from "./Product";

const ProductsList = () => {
  //assume we got these products list from database for now
  //no dummy api nor the dtabase

  const productsList = [
    {
      name: "Mind Hunter DVD",
      price: 5.99,
      description: "Series of crimes cases solved by FBI",
      image:
        "https://m.media-amazon.com/images/M/MV5BNWNmYzQ1ZWUtYTQ3ZS00Y2UwLTlkMDctZThlOTJkMGJiNzBiXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg",

      id: 1,
    },
    {
      name: "How to lie with statistics (Book)",
      price: 4.99,
      description: "how tos by a journalist Darrell Huff",
      image:
        "https://img.thriftbooks.com/api/images/i/m/947FC0E0C46A1502299333589CCBC66BCC079623.jpg",
      id: 2,
    },
    {
      name: "Spy a Lie",
      price: 6.5,
      description: "Former CIA officers teach you how to detect deception ",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1403963056l/22598263.jpg",
      id: 3,
    },
  ];

  return (
    <div>
      {productsList.map((item) => (
        <Product {...item} key={item.id} />
      ))}
    </div>
  );
}; //end of the function

export default ProductsList;
