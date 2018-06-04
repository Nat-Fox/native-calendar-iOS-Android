import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import RNCalendarEvents from 'react-native-calendar-events';

export default class App extends React.Component {
  state = {
    status: 'Not used',
    events: []
  };

  componentDidMount() {
    RNCalendarEvents.authorizeEventStore()
    .then(status => {
      this.setState({
        status: status
      });
    })
    .catch(err => {
      this.setState({
        status: err
      });      
    });

    // RNCalendarEvents.authorizationStatus()
    // .then(status => {
    //   this.setState({
    //     status: status
    //   });
    // })
    // .catch(err => {
    //   this.setState({
    //     status: err
    //   });      
    // });
  }


  fetchCalendarEvents = () => {
    RNCalendarEvents.fetchAllEvents('2018-01-01T19:26:00.000Z', '2018-03-01T19:26:00.000Z', [])
      .then(calendarEvents => {
        this.setState({events: calendarEvents});
        //console.warn(JSON.stringify(calendarEvents, null, 4));
      })
      .catch(error => {
        console.warn(JSON.stringify(error));
      });
  }

  render() {
    let length = this.state.events.length;
    return (      
      <View style={styles.container}>            
        {          
          // Android
          this.state.events.slice(15,length).map((e, k) => {
          // iOS
          //this.state.events.slice(1,length).map((e, k) => {
          return <Text style={styles.event} key={k}>
          <Text style={styles.bold}>Event Name: </Text>{e.title}
          </Text>;
        })}

        <TouchableHighlight style={styles.button} onPress={this.fetchCalendarEvents}>
          <Text> Obtener Todos Los Eventos</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  event: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    width: 300
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    position: 'absolute',
    bottom: 80
  },
  bold: {
    fontWeight: 'bold'
  }
});
