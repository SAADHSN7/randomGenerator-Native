import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


export default function App() {


  const [quote, setQuote] = useState('Loading ...')
  const [author, setAuthor] = useState('Loading ...')
  const [isLoading, setIsLoading] = useState(false)

  const randomQuote = () => {
    setIsLoading(true)
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => { 
      // console.log(result.content)
      setQuote(result.content)
      setAuthor(result.author)
      setIsLoading(false)
    }) 
  }

useEffect(() => {
  randomQuote();
},[]);


  return (
    <View style={styles.container}>
      <View style={styles.card}>
        
        <Text style={styles.cardHeader}>Quote</Text>
        
       <FontAwesome5 name='quote-left' style={styles.leftQuote} />
        <Text style={styles.cardText}>
          {quote}
        </Text>
        <FontAwesome5 name='quote-right' style={styles.rightQuote} />

        <Text style={styles.authorName}>{author}</Text>
        <TouchableOpacity onPress={randomQuote} style={styles.button}>
          <Text style={styles.buttonText}>{ isLoading ? "Loading ..." : "New Quote"}</Text>
        </TouchableOpacity>

        {/* <View style={styles.accessoryButtons}>
          <TouchableOpacity onPress={() => {}} style={styles.volumeUp}>
            <FontAwesome name='volume-up' size={22} color='#5372F0'/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.copy}>
            <FontAwesome5 name='copy' size={22} color='#5372F0'/>
          </TouchableOpacity>

        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5372F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    fontSize: 20,
  },
  cardHeader: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    color: '#333',
    marginBottom: 18
  },
  cardText: {
    color: '#000',
    fontSize: 16,
    lineHeight: 26,
    letterSpacing: 1.1,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 10,
    paddingHorizontal: 30,
  },
  button: {
    backgroundColor: '#5372F0',
    padding: 20,
    borderRadius: 30,
    marginVertical: 20
  },
  buttonText: { 
    color: '#000',
    textAlign: 'center',
    fontSize: 18
  },
  authorName: {
    textAlign: 'right',
    fontWeight: '300',
    fontSize: 15,
    color: '#000'
  },
  leftQuote: {
    fontSize: 10,
    color: '#000',
    marginBottom: -12
  },
  rightQuote: {
    fontSize: 10,
    color: '#000',
    textAlign: 'right',
    marginTop: -20,
    marginBottom: 20
  },
  // accessoryButtons: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-evenly'
  // },
  // volumeUp: {
  //   borderWidth: 2,
  //   borderColor: '#5372F0',
  //   borderRadius: 50,
  //   padding: 15
  // },
  // copy: {
  //   borderWidth: 2,
  //   borderColor: '#5372F0',
  //   borderRadius: 50,
  //   padding: 15
  // }

});
