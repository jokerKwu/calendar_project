import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Calendar, CalendarList, Agenda,LocaleConfig} from 'react-native-calendars';
LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['일요일','월요일', '화요일','수요일','목요일','금요일','토요일'],
  dayNamesShort: ['일', '월','화','수','목','금','토'],
  today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';


 function CalendarScreen() {
  const [markedDates, setMarkedDates] = React.useState(null);
  const [dates, setDates] = React.useState(['2021-03-05', '2021-03-20']);
  function addDates() { let obj = dates.reduce( (c, v) => Object.assign(c, { [v]: { marked: true, dotColor: 'red' }, }), {}, ); console.log(obj); setMarkedDates(obj); }


    return (  
      <View style={{flex:1}}>
        <View style={styles.container}>
          <Text style={styles.title}>캘린더</Text>
        </View>
        <CalendarList>
        <Calendar
        onDayPress={(day) =>{ addDates(); }} 
        markedDates={markedDates}
        />
        

        </CalendarList>
        </View>
    );
}
const styles = StyleSheet.create({
  container: {
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      backgroundColor:'#A3CCF0',
  },title: {
    padding:15,
    fontSize:18,
    textAlign:'center'
}
});

export default CalendarScreen;