import PlantsList from "./components/PlantsList";
import { Route, Link } from "react-router-dom";


function App() {
    return (
      <div className="container">
        <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
          <img src="" className="App-logo" alt="logo" />
         <nav className="my-2 my-md-0 mr-md-3">
             <Link className="p-2 text-dark" to="/">Home</Link>
             <Link className="p-2 text-dark" to="/About">About</Link>
             <Link className="p-2 text-dark" to="/">Plants</Link>
             <Link className="p-2 text-dark" to="/Login">Login</Link>
             <Link className="btn btn-outline-primary" to="/Signup">Sign up</Link>
        </nav>
        </header>
        <section>
            <PlantsList></PlantsList>
        </section>
      </div>
    );
  }
  
  export default App;