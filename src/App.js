import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView} from 'react-native'
import Card from './components/Card';

const seguidores = ['Fernando-Rodrigo','matheuswferreira', 'thalescr', 'deigo-lps','paolaguedes' ,'erickmedrado', 'Lunatc', 'SeawardSalmon6']

function App() {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <Card githubUser='alexRicc2'/>
        <Card githubUser='omariosouto'/>
        {seguidores.map(seguidor => {
          return (<Card key={seguidor} githubUser={seguidor}/>)
        })}
        
        </ScrollView>
    </SafeAreaView>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

  },
  teste: {
    backgroundColor: '#ff0000',
    width: '100%',
  }
})

export default App;