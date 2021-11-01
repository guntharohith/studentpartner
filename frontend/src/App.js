import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar'
import LearningProvider from './context/learningpartner';
import Home from './Pages/Home';
import Login from './Pages/Login'
import AddLearningPath from './Pages/AddLearingPath';
import Resources from './Pages/Resources';
import Signup from './Pages/Signup';
import LearningPath from './Pages/LearningPath';
import { PrivateRoute } from './utils/PrivateRoute';
import SingleLearningPath from './Pages/SingleLearningPath';
import Notes from './Pages/Notes';
import Welcome from './Components/Welcome';
import history from './utils/history';
const isLogged = localStorage.getItem("token") === "" || !localStorage.getItem("token") ? false : true

function App() {
  return (
    <LearningProvider>
      <Router history={history}>
        {isLogged && <Navbar />}
        {isLogged && <Sidebar />}
        {!isLogged && <Welcome/>}
        <Switch>
            <Route exact path="/" render={()=> <Redirect to="/login"/>}/>
            <Route exact path="/login"><Login/></Route>
            <PrivateRoute exact path="/home" component={Home}/>
            <Route exact path="/signup"><Signup/></Route>
            <PrivateRoute exact path="/resources" component={Resources} />
            <PrivateRoute exact path="/add-learning-path" component={AddLearningPath}/>
            <PrivateRoute exact path="/learning-paths" component={LearningPath}/>
            <PrivateRoute exact path="/learning-paths/:id" children={<SingleLearningPath />}/>
            <PrivateRoute exact path="/notes" component={Notes}/>
        </Switch>
        <Footer />
      </Router>
    </LearningProvider>
  )
}

export default App;
