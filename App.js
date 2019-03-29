import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://rtb.corp.adobe.com'}}
        style={{marginTop: 35}}
        scalesPageToFit={false}
      />
    );
  }
}
