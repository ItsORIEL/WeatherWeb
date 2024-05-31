import './App.css';
import Navbar from './components/Navbar/Navbar';
import Card from './components/InfoCard/Card';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="cards-container">
        <Card place="ניו יורק" />
        <Card place="לונדון" />
        <Card place="אילת" />
        <Card place="אלסקה" />
      </div>
    </div>
  );
}

export default App;
