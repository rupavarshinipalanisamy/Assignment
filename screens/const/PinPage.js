import React, { useState } from 'react';
import { View, Button } from 'react-native';

const App = () => {
  const [clickedValues, setClickedValues] = useState([]);
  //const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [emptyButtonsColor, setEmptyButtonsColor] = useState(['white', 'white', 'white', 'white']);

  const handleClick = (value) => {
    setClickedValues([...clickedValues, value]);
    const newEmptyButtonsColor = [...emptyButtonsColor];
    newEmptyButtonsColor[clickedValues.length] = 'black';
    setEmptyButtonsColor(newEmptyButtonsColor);
    if (clickedValues.length === 3) {
  
      if (JSON.stringify(clickedValues) === JSON.stringify([1, 2, 3, 4])) {
        console.log('Success!');
      } else {
        console.log('Failed!');
      }
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ flexDirection: 'row' }}>
        <Button title="1" onPress={() => handleClick(1)}  />
        <Button title="2" onPress={() => handleClick(2)} />
        <Button title="3" onPress={() => handleClick(3)}  />
        <Button title="4" onPress={() => handleClick(4)}  />
        <Button title="5" onPress={() => handleClick(1)}  />
        <Button title="6" onPress={() => handleClick(1)}  />
        <Button title="7" onPress={() => handleClick(1)}  />
        <Button title="8" onPress={() => handleClick(1)}  />
        <Button title="9" onPress={() => handleClick(1)}  />
        <Button title="0" onPress={() => handleClick(1)}  />
      </View>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <View style={{ backgroundColor: emptyButtonsColor[0], width: 30, height: 30, borderRadius: 15, marginRight: 10 }} />
        <View style={{ backgroundColor: emptyButtonsColor[1], width: 30, height: 30, borderRadius: 15, marginRight: 10 }} />
        <View style={{ backgroundColor: emptyButtonsColor[2], width: 30, height: 30, borderRadius: 15, marginRight: 10 }} />
        <View style={{ backgroundColor: emptyButtonsColor[3], width: 30, height: 30, borderRadius: 15, marginRight: 10 }} />
      </View>
    </View>
  );
};

export default App;