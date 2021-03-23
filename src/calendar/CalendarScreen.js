import {StatusBar} from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Agenda, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['일요일','월요일', '화요일','수요일','목요일','금요일','토요일'],
  dayNamesShort: ['일', '월','화','수','목','금','토'],
  today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';


const CalendarScreen = () => {
  const [calendarOpened, setCalendarOpened] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ flex: 1 }}>
        <Agenda
          items={{
            '2019-04-15': [{text: 'any js object'}],
            '2019-04-16': [{text: 'item 1 - any js object'}],
            '2019-04-17': [{text: 'item 2 - any js object'}, {text: 'item 3 - any js object'}],
          }}
          loadItemsForMonth={(month) => {console.log('trigger items loading')}}
          onDayPress={(day)=>{console.log('day pressed')}}
          onDayChange={(day)=>{console.log('day changed')}}
          selected={'2019-04-17'}
          minDate={'2000-01-01'}
          maxDate={'2030-12-31'}
          renderItem={(item, firstItemInDay) => (
            <View style={[styles.item, { height: item.height }]}>
              <Text>{item.text}</Text>
            </View>
          )}
          renderEmptyDate={() => (
            <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
          )}
          onCalendarToggled={(calendarOpened) => setCalendarOpened(calendarOpened)}
          renderEmptyData = {() => {return (<View><Text>empty data</Text></View>);}}
          rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
          onRefresh={() => console.log('refreshing...')}
          refreshing={false}
          refreshControl={null}
          calendarScrollable
          theme={{
            knobContainer: {
              backgroundColor: 'red'
            }
          }}
          style={{

          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30,
  },
});
export default CalendarScreen;