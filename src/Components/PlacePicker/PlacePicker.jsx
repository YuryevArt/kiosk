import React from 'react'
import {Modal} from '..'
import {PlacePickerForm, PlacePickerButton} from './PlacePicker.style'

//img
import cafeImg from '../../Assets/img/placeCafe.png'
import bagImg from '../../Assets/img/placeBag.png'

function PlacePicker({active,setActive }) {
    const setPlace = (place) => {
        setActive((prevstate) =>{
            return {...prevstate, place: place }
        })
    };
    return (
        <Modal active={active} setActive={setActive}>
            <PlacePickerForm>
                {/* <PlacePickerButton onClick={()=> {setPlace('cafe')}}>
                    <img src={cafeImg} alt={cafeImg}/>
                    В кафе
                </PlacePickerButton> */}
                <PlacePickerButton onClick={()=> {setPlace('self')}}>
                    <img src={bagImg} alt={bagImg}/>
                    С собой
                </PlacePickerButton>
            </PlacePickerForm>
        </Modal>
    )
}

export default PlacePicker
