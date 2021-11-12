import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Contact from './pages/Contact/Contact';
import Dashboard from './pages/Dashboard/Dashboard';
import Explore from './pages/Home/Explore/Explore';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Payment from './pages/Payment/Payment';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Purchase from './pages/Purchase/Purchase';
import Register from './pages/Register/Register';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/explore'>
              <Explore></Explore>
            </Route>
            <Route exact path='/contact'>
              <Contact></Contact>
            </Route>
            <Route exact path='/dashboard'>
              <Dashboard></Dashboard>
            </Route>
            <PrivateRoute exact path='/purchase/:purchaseId'>
              <Purchase></Purchase>
            </PrivateRoute>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/register'>
              <Register></Register>
            </Route>
            {/* <Route exact path='/payment'>
              <Payment></Payment>
            </Route> */}


            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
