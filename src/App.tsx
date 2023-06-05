import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.scss';
import { Header } from './components/Layout';

const MainContent = () => {
  return (
    <Container>
      <h1>Заголовок страницы</h1>
      <p>Основное содержимое страницы...</p>
    </Container>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
};

export default App;
