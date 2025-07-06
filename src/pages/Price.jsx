import React from 'react'
import { ProductList } from '../helpers/ProductList';
import ProductItem from '../components/ProductItem';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "../styles/Price.css"

function Price() {
    return (
        <div className='products'>
            <h1 className='productTitle'>Price</h1>
            <div className='productList'>
                {ProductList.map((productItem, key) => {
                    return (
                        <ProductItem
                            key={key}
                            image={productItem.image}
                            name={productItem.name}
                            description={productItem.description}
                            price={productItem.price}
                        />
                    );
                })}
            </div>
            <div className='buttonContainer'>
                <a href="https://wa.me/6281225294402" target="_blank" rel="noopener noreferrer">
                    <button className='waButton'>
                        <WhatsAppIcon style={{ marginRight: "8px" }} />
                        Hubungi Kami
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Price
