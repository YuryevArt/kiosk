import React, { useState } from 'react'
import { TechMenuBody, PasswordField, KeyboardGrid, KeyboardButton, FunctionButtonGrid, FunctionButton, ParagraphTitle, KeyboardButtonCancelSell } from './TechMenu.style'
import { Modal } from '../.'
import axios from 'axios';

function TechMenu({ active, setActive }) {
    const [password, setPassword] = useState("");
    const [authorized, setAuthorized] = useState(false);
    const [cancelSellForm, setCancelSellForm] = useState({ active: false, summa: "" });
    const [makeAction, setMakeAction] = useState({ active: false, message: '' })
    const zReport = () => {
        axios.get(`${process.env.REACT_APP_SERVER_API}/z-report`)
    }
    const makeAuthorized = () => {
        if (password === "090821") {
            setAuthorized(true);
            setPassword('')
        }
    }
    const makeOperation = () => {
        if (makeAction.message === "z-report") {
            zReport();
            setMakeAction({ active: false, message: '' })
        } else {
            if (makeAction.message === "cancel-sell") {
                setCancelSellForm({ active: true, summa: "" })
            } else{
                if (makeAction.message === "check-tape"){
                    axios.get(`${process.env.REACT_APP_SERVER_API}/check-tape`)
                    setMakeAction({ active: false, message: '' })
                }
            }
        }

    }

    // const controlTape = () => {
    //     axios.get(`${process.env.REACT_APP_SERVER_API}/control-tape`)
    // }
    const cancelSell = (summa) => {
        axios.post(`${process.env.REACT_APP_SERVER_API}/cancel-sell`, { summa: summa });
        setCancelSellForm({active: false, summa: ''});
        setMakeAction({ active:false, message: ""})
    }

    const closeModal = () => {
        setPassword('');
        setAuthorized(false);
        setActive({ active: false });
        setCancelSellForm({active: false, summa: ''});
        setMakeAction({ active:false, message: ""})
    }
    return (
        <Modal active={active.active} setActive={closeModal}>
            {authorized ? (<TechMenuBody>
                <h3>Тех меню</h3>
                {makeAction.active ? (
                    cancelSellForm.active ? (
                        <>
                        <ParagraphTitle>Введите сумму чека</ParagraphTitle>
                            <PasswordField>
                                {cancelSellForm.summa}
                            </PasswordField>
                            <KeyboardGrid>
                                <KeyboardButtonCancelSell onClick={() => { setCancelSellForm(prevstate => { return { ...prevstate, summa: prevstate.summa + '1' } }) }}>1</KeyboardButtonCancelSell>
                                <KeyboardButtonCancelSell onClick={() => { setCancelSellForm(prevstate => { return { ...prevstate, summa: prevstate.summa + '2' } }) }}>2</KeyboardButtonCancelSell>
                                <KeyboardButtonCancelSell onClick={() => { setCancelSellForm(prevstate => { return { ...prevstate, summa: prevstate.summa + '3' } }) }}>3</KeyboardButtonCancelSell>
                                <KeyboardButtonCancelSell onClick={() => { setCancelSellForm(prevstate => { return { ...prevstate, summa: prevstate.summa + '4' } }) }}>4</KeyboardButtonCancelSell>
                                <KeyboardButtonCancelSell onClick={() => { setCancelSellForm(prevstate => { return { ...prevstate, summa: prevstate.summa + '5' } }) }}>5</KeyboardButtonCancelSell>
                                <KeyboardButtonCancelSell onClick={() => { setCancelSellForm(prevstate => { return { ...prevstate, summa: prevstate.summa + '6' } }) }}>6</KeyboardButtonCancelSell>
                                <KeyboardButtonCancelSell onClick={() => { setCancelSellForm(prevstate => { return { ...prevstate, summa: prevstate.summa + '7' } }) }}>7</KeyboardButtonCancelSell>
                                <KeyboardButtonCancelSell onClick={() => { setCancelSellForm(prevstate => { return { ...prevstate, summa: prevstate.summa + '8' } }) }}>8</KeyboardButtonCancelSell>
                                <KeyboardButtonCancelSell onClick={() => { setCancelSellForm(prevstate => { return { ...prevstate, summa: prevstate.summa + '9' } }) }}>9</KeyboardButtonCancelSell>
                                <KeyboardButtonCancelSell onClick={() => { setCancelSellForm(prevstate => { return { ...prevstate, summa: prevstate.summa.slice(0, prevstate.summa.length - 1) } }) }}>⌫</KeyboardButtonCancelSell>
                                <KeyboardButtonCancelSell onClick={() => { setCancelSellForm(prevstate => { return { ...prevstate, summa: prevstate.summa + '0' } }) }}>0</KeyboardButtonCancelSell>
                                <KeyboardButtonCancelSell onClick={() => {cancelSell(Number(cancelSellForm.summa))}}>✔</KeyboardButtonCancelSell>
                            </KeyboardGrid>
                        </>
                    ) : (
                        <>
                            <h4>Выполнить "{makeAction.message}" ?</h4>
                            <FunctionButton onClick={makeOperation}>ОК</FunctionButton>
                        </>
                    )
                ) : (
                    <>
                        <ParagraphTitle>Операции со сменой</ParagraphTitle>
                        <FunctionButtonGrid>
                            <FunctionButton onClick={() => { setMakeAction({ message: 'z-report', active: true }) }}>Закрыть смену</FunctionButton>
                        </FunctionButtonGrid>
                        <ParagraphTitle>Операции с эквайрингом</ParagraphTitle>
                        <FunctionButtonGrid>
                            <FunctionButton onClick={() => { setMakeAction({ message: 'cancel-sell', active: true }) }}>Отмена оплаты</FunctionButton>
                            {/* <FunctionButton>Сверка итогов</FunctionButton> */}
                            <FunctionButton onClick={() => { setMakeAction({ message: 'check-tape', active: true }) }}>Контрольная лента</FunctionButton>
                        </FunctionButtonGrid>
                        <ParagraphTitle>Управление киоском</ParagraphTitle>
                        <FunctionButtonGrid>
                            <FunctionButton style={{width: "250px"}} onClick={() => { window.location.href = '/waiting' }}>Вернуться к стартовому экрану</FunctionButton>
                        </FunctionButtonGrid>
                    </>
                )}

            </TechMenuBody>) : (
                <TechMenuBody>
                    <h3>Код</h3>
                    <PasswordField>
                        {'*'.repeat(password.length)}
                        {/* {password} */}
                    </PasswordField>
                    <KeyboardGrid>
                        <KeyboardButton onClick={() => { setPassword(prevstate => { return prevstate + '1' }) }}>1</KeyboardButton>
                        <KeyboardButton onClick={() => { setPassword(prevstate => { return prevstate + '2' }) }}>2</KeyboardButton>
                        <KeyboardButton onClick={() => { setPassword(prevstate => { return prevstate + '3' }) }}>3</KeyboardButton>
                        <KeyboardButton onClick={() => { setPassword(prevstate => { return prevstate + '4' }) }}>4</KeyboardButton>
                        <KeyboardButton onClick={() => { setPassword(prevstate => { return prevstate + '5' }) }}>5</KeyboardButton>
                        <KeyboardButton onClick={() => { setPassword(prevstate => { return prevstate + '6' }) }}>6</KeyboardButton>
                        <KeyboardButton onClick={() => { setPassword(prevstate => { return prevstate + '7' }) }}>7</KeyboardButton>
                        <KeyboardButton onClick={() => { setPassword(prevstate => { return prevstate + '8' }) }}>8</KeyboardButton>
                        <KeyboardButton onClick={() => { setPassword(prevstate => { return prevstate + '9' }) }}>9</KeyboardButton>
                        <KeyboardButton onClick={() => { setPassword(prevstate => { return prevstate.slice(0, prevstate.length - 1) }) }}>⌫</KeyboardButton>
                        <KeyboardButton onClick={() => { setPassword(prevstate => { return prevstate + '0' }) }}>0</KeyboardButton>
                        <KeyboardButton onClick={makeAuthorized}>✔</KeyboardButton>
                    </KeyboardGrid>


                </TechMenuBody>
            )}

        </Modal>
    )
}

export default TechMenu
