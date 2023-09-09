import { Text } from 'react-native'
import React, {useState} from 'react'
import styles from "./styles";

const Title = () => {
  const [stateText, setText] = useState('');
  console.log('Update');

  const onTextPress = () => {
    setText('Updated State')
  }

  return (
    <Text onPress={onTextPress} style={styles.title}>{stateText}</Text>
  )
}

Title.defaultProps ={
  text: 'Default Text!'
}

export default React.memo(Title);