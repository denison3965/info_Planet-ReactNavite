import React from 'react';
import {Text, View,StyleSheet, Image, StatusBar, SafeAreaView } from 'react-native';

export default function Acconts() {
    return (
        <SafeAreaView>
            <StatusBar barStyle = "light-content" />
        <View style={styles.container}>

        <Text style={styles.title}>
            Contatos
        </Text>

        <Text style={{width: 370, height: 75, marginTop: 10 ,marginBottom: 20, backgroundColor: 'powderblue'}}>
            Guilherme
        </Text>
        
        <Text style={{width: 370, height: 75, marginBottom: 20, backgroundColor: 'powderblue'}}>
            Ana
        </Text>

        <Text style={{width: 370, height: 75, marginBottom: 20, backgroundColor: 'powderblue'}}>
            Felipe
        </Text>

        <Text style={{width: 370, height: 75, marginBottom: 20, backgroundColor: 'powderblue'}}>
            Caio
        </Text>

        <Text style={{width: 370, height: 75, marginBottom: 20, backgroundColor: 'powderblue'}}>
            Jason
        </Text>

        <Text style={{width: 370, height: 75, marginBottom: 20, backgroundColor: 'powderblue'}}>
            Denison
        </Text>

      </View>
      </SafeAreaView>

    );
  }
 

  const styles = StyleSheet.create({
    title:{
        color: '#52989E',
        fontSize: 20,
        fontWeight: 'bold',
    },
    container:{
        flex: 1,
        width: '100%',
        padding: 20,
        alignItems: 'center',
        alignItems: 'stretch',
        backgroundColor: '#3B3B40'
    },
  });