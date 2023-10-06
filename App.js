
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { getExchangeRates } from './Components/API';
import CurrencyBlock from './Components/CurrencyBlock';


export default function App() {

  const [rates, setRates] = useState({});
  const RUB = 'RUB';
  const usdRate = `🦅 1 USD = ${rates.USD?.Value} ${RUB} 🪆`;

  useEffect(() => {
    getExchangeRates().then(data => {
      setRates(data.Valute);
    });
  }, []);

  return (
    <View style={styles.container}>
      <CurrencyBlock 
        rate={usdRate}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#fff', 
    borderRadius: 10,
    padding: 20,
    marginVertical: 10    
  },

  currency: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444'
  },

  rate: {
    fontSize: 24,
    fontWeight: '600',
    color: '#08c' 
  }
});