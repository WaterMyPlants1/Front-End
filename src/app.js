import PlantsList from "./components/PlantsList";

function App() {
    return (
      <div className="container">
        <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
          <img src="" className="App-logo" alt="logo" />
         <nav className="my-2 my-md-0 mr-md-3">
             <a className="p-2 text-dark" href="#">Home</a>
             <a className="p-2 text-dark" href="#">About</a>
             <a className="p-2 text-dark" href="#">Plants</a>
             <a className="p-2 text-dark" href="#">Login</a>
             <a class="btn btn-outline-primary" href="#">Sign up</a>
        </nav>
        </header>
        <section>
            <PlantsList></PlantsList>
        </section>
      </div>
    );
  }
  
  export default App;