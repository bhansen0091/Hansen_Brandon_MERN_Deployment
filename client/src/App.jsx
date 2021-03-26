import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Link} from '@reach/router';
import Create from './views/Create';
import Edit from './views/Edit';
import Show from './views/Show';
import Main from './views/Main'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="d-flex col-6 mx-auto flex-wrap">
        <div className="col px-0 d-flex justify-content-between">
          <div className="">
            <h1>Pet Shelter</h1>
          </div>
          <div>
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
      <Router>
        <Main path="/" />
        <Create path="/new" />
        <Edit path="/edit/:id" />
        <Show path="/show/:id" />
      </Router>
    </div>
  );
}

export default App;
