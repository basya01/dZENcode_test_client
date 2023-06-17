import { Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';

import { Header, SideBar, Main } from './components';
import { NotFound, Orders, Products } from './pages';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const App = () => (
  <div className="vh-100 d-flex flex-column">
    <Header />
    <Row className="m-0 flex-grow-1">
      <SideBar />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Row>
    <div id="modal_root"></div>
  </div>
);

export default App;
