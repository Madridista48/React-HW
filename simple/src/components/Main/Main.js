import React from 'react';
import Card from "./Card/Card";
import products from "../../assets/data/data";
import './main.css'

const Main = () => {
    return (
        <main className="products-grid">
            {products.map(item=>(
                <Card key={item.id} image={item.image} name={item.name} price={item.priceCents} stars={item.rating.stars} count={item.rating.count}/>
            ))}
        </main>
    );
};

export default Main;