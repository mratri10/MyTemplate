
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SigninSignup from './pages/signin-signup/signin-signup.component';
import React, { Component } from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action'
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userref = await createUserProfileDocument(userAuth)
        userref.onSnapshot(snapshot =>{
          setCurrentUser({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          })
        });
      }
      setCurrentUser({currentUser:false})
    });
  }
    componentWillUnmount(){
      this.unsubscribeFromAuth()
    }
  render() { 
    return (  
      <div className='App'>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop/:id" component={ShopPage}/>
        <Route exact path="/sign" render={() => JSON.stringify(this.props.currentUser) !== `{"currentUser":false}` ?(
          <Redirect to="/"/>
        ): (<SigninSignup /> )}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
      </Switch>
    </div>
    );
  }
}

const masStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapsDispacthToProps = dispacth =>({
  setCurrentUser: user => dispacth(
    setCurrentUser(user)
  )
})
export default connect(masStateToProps, mapsDispacthToProps)(App);
