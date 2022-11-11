import React from "react";
import "./Home.css";
import Product from "../Product";
import bodybackGround from "../../Images/bodybackGround.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={bodybackGround}
          alt="bodybackground"
        />
        <div className="home__row">
          <Product
            id={6234}
            title="Limited Edition WristWatches Limited Edition WristWatches Limited Edition WristWatches"
            price={29.99}
            rating={5}
            image="https://i.postimg.cc/cJgSsQ2T/Wrist-Watch.jpg"
          />
          <Product
            id={4214}
            title="Silver Necklace from Savvy Accessories Affordable Silver Necklace from "
            price={29.99}
            rating={4}
            image="https://i.postimg.cc/50WVMz2Z/Necklace.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={8224}
            title="Gold Color Bracelets of the best qualities Trade with Savvy Accessories Bracelets."
            price={29.99}
            rating={5}
            image="https://i.postimg.cc/8zPLjvnJ/Bracelets.jpg"
          />
          <Product
            id={1254}
            title="Limited Edition Affordable Bangles from Savvy Accessories"
            price={29.99}
            rating={2}
            image="https://i.postimg.cc/858FBfwb/Bangles.jpg"
          />
          <Product
            id={1134}
            title="ChainNecklace of the best beauty and quality from Savvy Accessories"
            price={29.99}
            rating={3}
            image="https://i.postimg.cc/BQBkjyQ7/Chain-Necklace.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={1134}
            title="ChainNecklace of the best beauty and quality from Savvy Accessories"
            price={29.99}
            rating={3}
            image="https://i.postimg.cc/BQBkjyQ7/Chain-Necklace.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
