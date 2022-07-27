// This react component acts as a main page of application
// Here, Splash screen stays for 3 seconds and jumps to navigation component
import React, { Component } from 'react';

import SplashScreen from './components/SplashScreen';
import MainNavigator from './components/MainNavigator';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
  }

  hide_Splash_Screen = () => {
    this.setState({
      isVisible: false,
    });
  };

  // To set isVisible to false after 3 seconds
  componentDidMount() {
    var that = this;
    setTimeout(function () {
      that.hide_Splash_Screen();
    },3000);
  }

  render() {
    return (
        this.state.isVisible == true ? <SplashScreen/> : <MainNavigator/>
    );
  }
}
