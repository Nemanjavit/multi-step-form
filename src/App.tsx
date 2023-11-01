import "./App.scss";
import Form from "./components/form/form";
import Stepper from "./components/stepper/stepper";

// const Layout = () => {};

function App() {
  return (
    <div className="App">
      <div className="d-flex">
        <Stepper />
        <Form />
      </div>
    </div>
  );
}

export default App;
