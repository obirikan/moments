import Sidenav from "./components/Sidenav";
import Content from './components/Content'
import './App.css'
function App() {
  return (
  <div className="parent">
    <div className="child1">
    <Sidenav/>
    </div>
    <div className="ch  ild2">
      <Content/>
    </div>
    <div className="child3">
    <Sidenav/>
    </div>
  </div>
  );
}

export default App;
