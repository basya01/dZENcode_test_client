import { Header, SideBar } from './components';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Col, Container, Row } from 'react-bootstrap';

const App = () => {
  return (
    <div className="header-sidebar-container">
      <Header />
      <Row className="sidebar-row m-0">
        <SideBar />
        <Col sm={9} md={10} className="content">
          <Container fluid></Container>
        </Col>
      </Row>
    </div>
  );
};

export default App;
