import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


export default function Sample() {
  const [activeButton, setActiveButton] = useState(0); // Initialize to the first button

  // Define the content for each button
  const buttonContents = [
    "Content for Button 1",
    "Content for Button 2",
    "Content for Button 3",
    "Content for Button 4",
    "Content for Button 5",
  ];

  // Function to handle button click
  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <View>
      <View style={{ 
        flexDirection: 'row' ,
        
      }}>
        {buttonContents.map((content, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleButtonClick(index)}
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              backgroundColor: activeButton === index ? 'blue' : 'gray',
            }}
          >
            <Text>{`Button ${index + 1}`}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View>
        <Text>{buttonContents[activeButton]}</Text>
      </View>
    </View>
  );
}
