import React from 'react'
import { useEffect,useState } from 'react';

const Subtotal = ({iteam}) => {
    const [price, setPrice] = useState(0);
    const [totalitems,setTotalitems]=useState(0)
    useEffect(() => {
        totalAmount();
        totalItemsfun()
    }, [iteam]);

    const totalAmount = () => {
        let price = 0
        iteam.map((item) => {
            price += item.price.cost*item.quantity
        });
        setPrice(price)
    }
    const totalItemsfun = () => {
        let items= 0
        iteam.map((item) => {
            items+=item.quantity
        });
        setTotalitems(items)
    }
    return (
        <div className="sub_item">
            <h3>Subtotal ({totalitems} items):<strong style={{ fontWeight: "700", color: "#111" }}> ₹{price}.00</strong></h3>
        </div>
    )
}

export default Subtotal
