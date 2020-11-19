import React from 'react';
import {Text, View,StyleSheet, Image, StatusBar, SafeAreaView } from 'react-native';

export default function Home() {
    return (
      <SafeAreaView> 
         <StatusBar barStyle = "light-content" />
        <View>
        <Image style={styles.img} 
        source ={{
          uri: 'https://image.freepik.com/fotos-gratis/uma-bela-galaxia-colorida-no-escuro-espaco-estrelado_181624-11597.jpg'
        }}
        />
      </View>
      
      <View style = {styles.elipse}> 
      </View>

      </SafeAreaView>

    );
  }
 

  const styles = StyleSheet.create({
    img:{
      width: 450,
      height: 450,
    },
    elipse:{
      backgroundColor: '#FFF',
      marginTop: -40,
      borderTopRightRadius: 70,
      borderTopLeftRadius: 70,
      height: 40,
    }
  });