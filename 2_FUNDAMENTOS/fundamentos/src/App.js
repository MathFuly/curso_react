// components
import FirstComponent from "./componets/FirstComponent"
import TemplateExpressions from "./componets/TemplateExpressions";
import MyComponent from "./componets/MyComponent";
import Events from "./componets/Events";

// styles / CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
    </div>
  );
}

export default App;
