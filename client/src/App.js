import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Link } from '@reach/router';
import NewPet from './Components/NewPet';
import AllPets from './Components/AllPets';
import DetailsPets from './Components/DetailsPets';
import EditPet from './Components/EditPet';



function App() {
  return (
    <div className="container">
      <Router>
        <AllPets  path="/" />
        <NewPet path="/new" />
        <DetailsPets path="/view/:_id" />
        <EditPet path="/edit/:_id" />
      </Router>

    </div>
  );
}

export default App;

