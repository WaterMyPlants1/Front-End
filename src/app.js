import PlantsList from "./components/PlantsList";

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="" className="App-logo" alt="logo" />
         <nav>
             <a href="#">Home</a>
             <a href="#">About</a>
             <a href="#">Plants</a>
             <a href="#">Login</a>
             <a href="#">Register</a>
        </nav>
        </header>
        <section>
            <PlantsList></PlantsList>
        </section>
      </div>
    );
  }
  
  export default App;