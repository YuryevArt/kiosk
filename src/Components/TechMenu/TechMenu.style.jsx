import styled from 'styled-components'

const TechMenuBody = styled.div`
    width: 56vw;
    /* height: calc(60vh - 405px); */
    height: auto;
    padding: 0 100px 50px;
    overflow-y: auto;
`;

const PasswordField = styled.div`
    margin-bottom: 20px;
    border: 1px solid #808080e6;
    color: black;
    border-radius: 2px;
    padding: 8px 5px 8px 10px;
    font-size: 35px;
    display: flex;
    align-items: center;
    font-weight: bold;
    height: 60px;
`;

const KeyboardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    
    gap: 10px;
`;

const KeyboardButton = styled.button`
    height: 128px;
    font-size: 55px;
    padding: 10px 0;
    font-weight: 300;
    color: #808080;
    /* background-color: #d4d4d4e0; */
    /* border: none;; */
    &:active{
        background-color: #cecece;
        border: 1px solid gray;
        border-radius: 2px;
    }
`;
const KeyboardButtonCancelSell = styled.button`
    height: 69px;
    font-size: 25px;
    padding: 5px 0;
    font-weight: 300;
    color: #808080;
    /* background-color: #d4d4d4e0; */
    /* border: none;; */
    &:active{
        background-color: #cecece;
        border: 1px solid gray;
        border-radius: 2px;
    }
`;

const FunctionButtonGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const ParagraphTitle = styled.h5`
    margin-bottom: 12px;
`;

const FunctionButton = styled.button`
    font-size: 25px;
    padding: 10px 0;
    font-weight: 300;
    color: #808080;
    /* background-color: #d4d4d4e0; */
    /* border: none;; */
    &:active{
        background-color: #cecece;
        border: 1px solid gray;
        border-radius: 2px;
    }
`;

export { TechMenuBody, KeyboardGrid, KeyboardButton, PasswordField, FunctionButtonGrid, FunctionButton, ParagraphTitle, KeyboardButtonCancelSell };