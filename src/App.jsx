import { BrowserRouter as Router } from "react-router-dom";
import { Nav } from "./components/Nav";
import { RourterComponent } from "./components/Common/RouterComponent";
import ConfigureStore from "./components/store/ConfigureStore";
import { Provider } from "react-redux"; // Import the Provider

function App() {
  return (
    <Provider store={ConfigureStore}> {/* Wrap the app with the Provider and pass the store */}
        <div>
          <Nav />
          <RourterComponent />
          <footer className="bg-gray-800 text-white p-4 text-center">
            <p>&copy; 2024 Your Company</p>
          </footer>
        </div>
    </Provider>
  );
}

export default App;
