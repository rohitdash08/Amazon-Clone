import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/Phase3/J23_P3B_PC_NTA_Hero_C4_EM_2x._CB574165812_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="000"
            title="Acer Nitro VG280K 28 Inch (71.12 Cm) UHD 4K 3840 x 2160 IPS Gaming LCD Monitor with LED Back Light Technology I AMD Freesync, HDR10 I 2 x HDMI, 1 x DP, Inbox HDMI Cable I Stereo Speakers I Eye Care"
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/71Ny6IrYQdL._SX450_.jpg"
          />
          <Product
            id="001"
            title="realme narzo N53 (Feather Gold, 4GB+64GB) 33W Segment Fastest Charging | Slimmest Phone in Segment | 90 Hz Smooth Display"
            price={299.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/71dEY4Neo3L._SX569_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="002"
            title="Amazon Brand - Jam & Honey Penguin, Plush/Soft Toy for Boys, Girls and Kids, Super-Soft, Safe, Great Birthday Gift (Black and White, 17 cm)"
            price={19.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61A2ddWFQxL._SX522_.jpg"
          />
          <Product
            id="003"
            title="Adidas Men's Clinch-X M Running Shoe"
            price={299.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/71sfbi31lhL._SX500_.jpg"
          />
          <Product
            id="003"
            title="Apple 2022 10.9-inch iPad (Wi-Fi, 256GB) - Blue (10th Generation)"
            price={599.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/61uA2UVnYWL._SX522_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="004"
            title="Apple 2023 iMac (24-inch, M3 chip with 8‑core CPU and 8‑core GPU, 8GB Unified Memory, 256GB) - Silver"
            price={1199.99}
            rating={6}
            image="https://m.media-amazon.com/images/I/61KBIj28ZUL._SX522_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
