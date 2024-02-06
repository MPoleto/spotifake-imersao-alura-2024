import './styles/components/_App.scss';
import { Sidebar } from "./components/Sidebar";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="app__container">
      <div className="app__container__display">
        <Sidebar />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
