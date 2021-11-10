import React, { useState } from 'react';
import axios from 'axios'
import { Link, useHistory } from "react-router-dom";

function WaitScreen({ screens }) {
    const [screen, setScreen] = useState(0);
    const history = useHistory();
    React.useEffect(() => {
        const timerId = setTimeout(() => {
            setScreen((prevstate) => {
                if (prevstate === screens.length - 1) {
                    return 0
                } else {
                    return prevstate + 1
                }
            })
        }, 5000)
        return () => clearTimeout(timerId);
    }, [screen]);
    return (
        <Link
            style={{
                position: 'fixed',
                left: '0',
                right: '0',
                top: '0',
                bottom: '0',
                width: '100%',
                height: '100%'
            }}
            to={"/"}
            onClick={(e) => {
                axios.get(`${process.env.REACT_APP_SERVER_API}/check-service-uts`).then(
                    (r) => {
                        history.push("/");
                    }).catch((e) => {
                        history.push("/error");
                    })
                e.preventDefault()
            }}
        >
            <img style={{ width: '100%', height: '100%' }} src={`${process.env.REACT_APP_SERVER_API}/static/img/screens/${screens[screen]}`} alt={screens[screen]} />
        </Link>
    )
}

export default WaitScreen
