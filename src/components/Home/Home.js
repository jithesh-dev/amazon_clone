import React from "react";
import HeroImage from "../../img/amazon_landing_hero.jpg";
import "./Home.css";
import Product from "../Product/Product";
function Home() {
  return (
    <div className="home">
      <img src={HeroImage} alt="" className="home__image" />
      <div className="home__row">
        <Product
          id="12121212"
          title="The Lean Startup :How Contant Innovation Create"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
        />
        <Product
          id="15151536"
          title="Steelbird SBA-1 R2K Full Face Graphics Helmet in Matt Finish with Smoke Visor (Large 600 MM, Matt Black with Orange)"
          price={20.39}
          rating={4}
          image="https://www.amazon.in/images/I/51iCQIIoWyL._AC_UL320_.jpg"
        />
        <Product
          id="1515153c6"
          title="Amazon Brand - Symbol Amazon Brand - Symbol Women's Solid Regular Fit Half Sleeve..."
          price={20.39}
          rating={4}
          image="https://www.amazon.in/images/I/41qO5Bk0j-L._AC_UX500_SY400_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12121212"
          title="Redux Analogue Blue Dial Men’s & Boy's Watch RWS0216S"
          price={299}
          rating={5}
          image="https://www.amazon.in/images/I/81BDpSIwu3L._UL1500_.jpg"
        />
        <Product
          id="1515dsd1536"
          title="Racold ETERNO Pro SP 25V 2KW IV"
          price={20.39}
          rating={4}
          image="https://www.amazon.in/images/I/51qQQnn5adL._AC_UY218_.jpg"
        />
        <Product
          id="1515aa1536"
          title="Webby Walkie Talkie Toy with Range Upto 100 Feet (Multi-Color)"
          price={20.39}
          rating={2}
          image="https://www.amazon.in/images/I/41ySjBqw6JL._AC_SY200_.jpg"
        />
        <Product
          id="1515vcv1536"
          title="MAX Premium Car Care Kit (Pack of 6 Items - 200 ML Each and Foam 4 Pieces)"
          price={20.39}
          rating={1}
          image="https://www.amazon.in/images/I/81ENvzEptXL._AC_UL320_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
