import { StyleSheet, Text, View, TextInput, Button} from 'react-native'
import React, { useState } from 'react'

const App = () => {

  const [text, setText] = useState('');
  const [submittedText, setsubmittedText] = useState('');

  const handleSubmit = () => {
    setsubmittedText(text);
    setText('');
    console.log('Submitted Text:', submittedText);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User input test.....</Text>
      <TextInput
        placeholder='Enter some text here....'
        style={styles.input}
        value={text}
        onChangeText={setText}
      />

      <Button title='Submit' onPress={handleSubmit}></Button>
      {submittedText ? <Text>Submitted Text: {submittedText}</Text> : null}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333'
  },
  input: {
    width: '80%',
    cursor: 'pointer',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 20
  }
})