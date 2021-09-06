import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function Card({githubUser}) {
  return (
    <View style={style.card}>
      <Text style={style.nome}>{githubUser}</Text>
      <Image style={style.icone} source={{
        uri: `https://github.com/${githubUser}.png`
      }}
      />
      <Image style={style.foto} source={{
        uri: `https://github.com/${githubUser}.png`
      }}
      />
      <View>
        <Text style={style.like}>Like</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  icone: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  foto: {
    width: '100%',
    height: 350,
  },
  nome:{
    fontSize: 26  
  },
  like:{
    fontSize: 24
  },
  card: {
    marginBottom: 6
  }
})