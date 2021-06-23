

import './App.css';
import SideBar from './components/sideBar/sideBar';
import TopBar from './components/topBar/TopBar';
import Home from './pages/home/Home';

function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar />
        <Home />
      </div>


    </div>
  );
}

export default App;
