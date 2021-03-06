/**
 * Created by TinySymphony on 2017-05-08.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import Calendar from './Calendar';

export default class calendar extends Component {
  constructor(props) {
    super(props);
    this.calendar = null;
    this.state = {
      startDate: null,
      endDate: null
    };
    this.openCalendar = this.openCalendar.bind(this);
    this.confirmDate = this.confirmDate.bind(this);
  }
  // when confirm button is clicked, an object is conveyed to outer component
  // contains following property:
  // startDate [Date Object], endDate [Date Object]
  // startMoment [Moment Object], endMoment [Moment Object]
  confirmDate ({startDate, endDate, startMoment, endMoment}) {
    console.log(startDate, endDate, startMoment, endMoment);
    this.setState({
      startDate,
      endDate
    });
  }
  openCalendar() {
    !!this.calendar && this.calendar.open();
  }
  render() {
    // It's an optional property, I use this to show the structure of customI18n object.
    let customI18n = {
      'w': ['', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
      'weekday': ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'text': {
        'start': 'Check in',
        'end': 'Check out',
        'date': 'Date',
        'save': 'Confirm',
        'clear': 'Reset'
      },
      'date': 'DD / MM'  // date format
    };
    // optional property, too.
    let color = {
      mainColor: '#19AA90'
    };
    const {
      startDate,
      endDate
    } = this.state;
    let text = startDate && endDate ? startDate + '  /  ' + endDate :
      'Please select a period';
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.btn}
          title="press"
          onPress={this.openCalendar}
          >
          <Text style={styles.btnFont}>Choose Dates</Text>
        </TouchableHighlight>
        <View>
          <Text style={styles.font}>{text}</Text>
        </View>
        <Calendar
          i18n="en"
          color={color}
          ref={(calendar) => {this.calendar = calendar;}}
          format="YYYYMMDD"
          minDate="20190510"
          maxDate="20200412"
          onConfirm={this.confirmDate}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    overflow: 'hidden',
    borderRadius: 6,
    marginBottom: 30,
    backgroundColor: '#19AA90'
  },
  btnFont: {
    color: '#fff',
    fontSize: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  font: {
    fontSize: 24,
    fontWeight: '400',
    color: '#304853'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('calendar', () => calendar);
