import './App.css';
import './component/styles.css'
import City from './component/City';
import Temperature from './component/Temperature';

function App() {
  return (
    <div className="App">
      <City />
      <Temperature />
      <div className="weather-conditions">Mostly Cloudy</div>
      <div className="temp-sum">
        <div className="high">H:27<span>&#176</span></div>
        <div className="low">L: 12</div>
      </div>
    </div>
  );
}

export default App;
