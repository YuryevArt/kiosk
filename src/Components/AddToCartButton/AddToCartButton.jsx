import React from 'react'
import {ButtonBody} from './AddToCartButton.style';
import CartIcon from '../../Assets/img/cartSVG';

function AddToCartButton({onClickHandler}) {
    return (
        <ButtonBody onClick={onClickHandler}>
            <CartIcon/>
            В корзину
        </ButtonBody>
    )
}

export default AddToCartButton
