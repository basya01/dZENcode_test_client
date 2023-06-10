import { Header, SideBar } from './components';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Col, Container, Row } from 'react-bootstrap';
import Main from './components/Layout/Main';

const App = () => {
  return (
    <div className="header-sidebar-container">
      <Header />
      <Row className="sidebar-row m-0">
        <SideBar />
        <Main />
      </Row>
    </div>
  );
};

export default App;
