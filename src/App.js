// import logo from './logo.svg';
import './App.css';
import toys from './models/toy';
import Toys from './components/Toys';


// state
const state = {
  toys
}

function App() {
  return (
    <div className="toyBox">
      <h1 className='toyTitle'>TOYS</h1>
      {/* set props */}
      <Toys toyList={state.toys[0]}/>
      <Toys toyList={state.toys[1]}/>
      <Toys toyList={state.toys[2]}/>
    </div>
  );
}

export default App;
