import DesignSystem from './components/DesignSystem/DesignSystem';
import logo from './logo.svg';
import './sass/main.scss';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */}
      <DesignSystem /> 
        <div className="lines">
         <div className="col"></div>
         <div className="col"></div>
         <div className="col"></div>
         <div className="col"></div>
         <div className="col"></div>
         <div className="col"></div>
         <div className="col"></div>
         <div className="col"></div>
         <div className="col"></div>
         <div className="col"></div>
         <div className="col"></div>
         <div className="col"></div>
        </div>
      
        
      <section className='basic'>
        <div className='header'>
          1
        </div>
        <div className='body'>
          <div className="container">
          <div className="col">
          
          </div>
          </div>
          <div className="container">
          <div className="col">
          
          </div><div className="col">
          
          </div>
          </div>
          <div className="container">
          <div className="col">
          
          </div><div className="col">
          
          </div><div className="col">
          </div><div className="col">
          
          </div><div className="col">
          </div><div className="col">
          
          </div><div className="col">
          </div><div className="col">
          
          </div><div className="col">
          </div><div className="col">
          
          </div><div className="col">
          </div><div className="col">
         
          
          </div>
          </div>
        </div>
        <div className='footer'>
          3
        </div>
      </section>
      <section className='studyCase'>
        <div className='header'>
          1
        </div>
        <div className='leftSidebar'>
          2
        </div>
        <div className='body'>
          3
        </div>
        <div className='rightSidebar'>
          4
        </div>
        <div className='footer'>
          5
        </div>
      </section>
    </div>
  );
}

export default App;
