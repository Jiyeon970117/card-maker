import styles from './App.module.css';
import Login from './components/login/login';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Maker from './components/maker/maker';

function App({FileInput, authService, cardRepository}) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Login authService={authService}/>} />
          <Route path='/maker' element={<Maker FileInput={FileInput}  authService={authService} cardRepository={cardRepository}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
