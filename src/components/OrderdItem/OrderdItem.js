import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const OrderdItem = ({ item,deleteItem }) => {
    const { name, img, price, quantity, id } = item;
    return (
        <div className='d-flex w-75 mx-auto mt-4 shadow-lg rounded p-3 align-items-center'>
            <img width={90} height={90} src={img} alt="" />
            <div className='d-flex justify-content-between w-100 align-items-center mx-4'>
                <div>
                    <p>{name}</p>
                    <p>Price: ${price}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div>
                    <FontAwesomeIcon onClick={()=>deleteItem(id)} className='fs-4 text-danger' icon={faTrashAlt}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
};

export default OrderdItem;