import React from 'react';
import IMAGE from '../../../assets/images/products/athletic-cotton-socks-6-pairs.jpg'
import Stars0 from '../../../assets/ratings/rating-0.png'
import Stars5 from '../../../assets/ratings/rating-05.png'
import Stars10 from '../../../assets/ratings/rating-10.png'
import Stars15 from '../../../assets/ratings/rating-15.png'
import Stars20 from '../../../assets/ratings/rating-20.png'
import Stars25 from '../../../assets/ratings/rating-25.png'
import Stars30 from '../../../assets/ratings/rating-30.png'
import Stars35 from '../../../assets/ratings/rating-35.png'
import Stars40 from '../../../assets/ratings/rating-40.png'
import Stars45 from '../../../assets/ratings/rating-45.png'
import Stars50 from '../../../assets/ratings/rating-50.png'
import Button from "./Button/Button";

const Card = ({name,image,price,stars,count}) => {
    return (
        <div className="product-container">
                <div className="product-image-container">
                    <img className="product-image"
                         src={IMAGE}/>
                </div>

                <div className="product-name limit-text-to-2-lines">
                    {name}
                </div>

                <div className="product-rating-container">
                    <img className="product-rating-stars"
                         src={stars === 1? Stars10: stars === 1.5? Stars15: stars === 2? Stars20: stars === 2.5? Stars25: stars === 3? Stars30: stars === 3.5? Stars35: stars === 4? Stars40: stars === 4.5? Stars45: stars === 5? Stars50: Stars0}/>
                    <div className="product-rating-count link-primary">
                        {count}
                    </div>
                </div>

                <div className="product-price">
                    ${(price / 100).toFixed(2)}
                </div>

                <div className="product-quantity-container">
                    <select>
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
            <Button/>
        </div>
    );
};

export default Card;
