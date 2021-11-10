import styled from "styled-components";

const PlacePickerForm = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    gap: 35px;
    align-items: center;
    width: 86vw;
    height: calc(90vh - 405px);
`;

const PlacePickerButton = styled.button`
    border: none;
    border-radius: 2px;
    background-color: white;
    box-shadow: 0 0 1px 1px #808080e7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #808080e7;
    height: 500px;
    width: 350px;
    font-size: 28px;
    text-transform: uppercase;
    &:focus{
        outline: none;
    }
    &:active{
        background-color: #dadada;
    }
    img{
        height: 200px;
        margin-bottom: 40px;
    }
`;
export {
    PlacePickerForm,
    PlacePickerButton
  };