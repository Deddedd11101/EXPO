
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native'; 

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '40%'
    },
    
    box: {
      backgroundColor: '#000',
      borderRadius: 10,
      padding: 20,
      margin: 20,
    },
  
    title: {
      color: '#fff',
      fontSize: 25,
      fontWeight: 'bold',
      lineHeight: 50
    },
  
    rate: {
      color: '#fff',
      fontSize: 22,
      lineHeight: 40
    }
  });

import dayjs from 'dayjs';
const currentDate = dayjs().format('DD.MM.YYYY');
export default function CurrencyBlock({rate}) {

    return (
        <View style={styles.container}>
        <View style={styles.box}>
         <Text  style={styles.title}>Курс 💲на  {currentDate}</Text>
        <Text style={styles.rate}>{rate}</Text>
      </View>
      </View>
    );
  
  }