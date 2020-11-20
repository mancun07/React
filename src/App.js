import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import CreateProject from './components/projects/CreateProject'
import './index.css';


function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='/project/create' component={CreateProject}/>
            <Route path='/project/:id' component={ProjectDetails}/>
          </Switch>
        </div>
    </BrowserRouter>
  );

}

export default App;
