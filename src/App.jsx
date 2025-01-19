import { BrowserRouter as Router } from "react-router-dom";
import { Nav } from "./components/Nav";
import { RourterComponent } from "./components/Common/RouterComponent";
import ConfigureStore from "./components/store/ConfigureStore";
import { Provider } from "react-redux"; // Import the Provider
import { Footer } from "./components/Common/Footer";

function App() {
  return (
    <Provider store={ConfigureStore}> {/* Wrap the app with the Provider and pass the store */}
      <div>
        <Nav />
        <RourterComponent />
        <Footer/>
        
    </div>
    </Provider >
  );
}

export default App;
