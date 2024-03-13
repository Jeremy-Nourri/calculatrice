import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import KeyComponent from './components/KeyComponent';
import { keys } from './data/data';
import { evaluate } from 'mathjs';

export default function App() {

  const [operation, setOperation] = useState(0);

  const handlePress = (title) => {

    if (operation === 'Erreur') {
      setOperation(0);
    }

    if (title === '=') {
      handleoperation();
    } else if (title === 'AC') {
      setOperation(0);
    } else if (title === 'DEL') {
        setOperation(operation.slice(0, -1));
    } else if (title === '^') {
      setOperation(operation + '**');
    } else if (title === '%') {
      setOperation(operation + '/100');
    } else if (title === 'x') {
      setOperation(operation + '*');
    } else {
      setOperation(operation + title);
    }
  };

  const handleoperation = () => {
    if (operation === '') {
      setOperation(0);
    } else if (/[+/*-]$/g.test(operation) || operation.length === 0) {
      setOperation('Erreur');
    } else {
      setOperation(evaluate(operation));
    }
  };

  return (
    <View style={styles.container}>

        <Text style={styles.title}>Calculatrice</Text>

        <Text style={styles.text}>{operation}</Text>

      <View style={styles.ContainerFlatList}>
        <FlatList
          data={keys}
          numColumns={4}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <KeyComponent title={item.value} handlePress={handlePress} />
          )}
          style={styles.flatList}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  title: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    fontSize: 50,
  },
  text: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    textAlign: 'right',
    color: 'white',
    fontSize: 40,
  },
  ContainerFlatList: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    flex: 1,
  },

});
