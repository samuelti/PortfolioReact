import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header.js'
import About from './components/About/about';
import PortfolioContainer from './components/PortfolioContainer/portfolioContainer';
import Footer from './components/Footer/footer';
import MainContent from './components/MainContent/mainContent';

function App() {
  return (
    <div >
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
