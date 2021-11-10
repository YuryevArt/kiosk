import axios from 'axios';
import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Catalog, Loading, Cart, Error, WaitScreen } from './Pages'
import { CartContext } from "./Contexts/CartContext";
import { PlaceContext } from "./Contexts/PlaceContext";

function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [activePlace, setActivePlace] = useState({ active: true, place: null });
  const [cart, setCart] = useState([
  ]);
  console.log('root update');
  // let eventSource = new EventSource(`${process.env.REACT_APP_SERVER_API}/stream`);
  //   eventSource.onmessage = function (e) {
  //     console.log(e.data);
  //     if (e.data === "errorKKT") {
  //       window.location.href = '/error'
  //     }
  //   };
  //   eventSource.onerror = function (e) {
  //     console.log(e);
  //   };
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_API}/catalog`)
      .then((r) => {
        setDataLoaded(r.data);
      }).catch((e) => {
        axios.get(`${process.env.REACT_APP_SERVER_API}/error-catalog`)
      })
  }, [])
  console.log('rerender App')
  return (
    <div className="App">
      <CartContext.Provider value={[cart, setCart]}>
        <PlaceContext.Provider value={[activePlace, setActivePlace]}>
          <Route path="/" render={dataLoaded ? () => <Catalog UTSdump={dataLoaded} setData={setDataLoaded} /> : () => <Loading />} exact />
          <Route path="/cart" component={Cart} exact />
          <Route path="/error" component={Error} exact />
          <Route path="/waiting" render={dataLoaded ? () => <WaitScreen screens={dataLoaded['screens']} /> : () => <Loading />} exact />
        </PlaceContext.Provider>
      </CartContext.Provider>
    </div>
  );
}

export default App;
