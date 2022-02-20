import Sidenav from "./components/Sidenav";
import Content from './components/Content'
import Aside from './components/Aside'
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
    <Aside/>
    </div>
  </div>
  );
}

export default App;
