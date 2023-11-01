import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  StyleSheet,
} from 'react-native';

const WheelOfFortune = () => {
  const wheelItems = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
  ];
  const numItems = wheelItems.length;
  const itemAngle = 360 / numItems;
  const rotation = useRef(new Animated.Value(0)).current;
  const [selectedItem, setSelectedItem] = useState(null);
  const isSpinning = useRef(false);

  const rotateWheel = () => {
    if (isSpinning.current) {
      return;
    }

    isSpinning.current = true;

    const randomDegree = Math.floor(Math.random() * 360) + 720;
    rotation.setValue(0);
    Animated.timing(rotation, {
      toValue: randomDegree,
      duration: 3000,
      easing: Easing.inOut(Easing.quad), // Adicione aqui a easing "in and out"
      useNativeDriver: true,
    }).start(() => {
      isSpinning.current = false;
      const selectedItemIndex = Math.floor((randomDegree % 360) / itemAngle);
      const selectedValue = wheelItems[selectedItemIndex];
      setSelectedItem(selectedValue);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.wheelContainer}>
        <View style={styles.wheelBackground} />
        <Animated.View
          style={[
            styles.wheel,
            {
              transform: [
                {
                  rotate: rotation.interpolate({
                    inputRange: [0, 360],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            },
          ]}>
          {wheelItems.map((item, index) => (
            <View
              key={index}
              style={{
                position: 'absolute',
                width: 100,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                transform: [
                  {rotate: `${index * itemAngle}deg`},
                  {translateX: 50},
                ],
              }}>
              <Text>{item}</Text>
            </View>
          ))}
          <View style={styles.centerBall} />
        </Animated.View>
      </View>
      <TouchableOpacity style={styles.spinButton} onPress={rotateWheel}>
        <Text style={styles.spinButtonText}>Spin</Text>
      </TouchableOpacity>
      {selectedItem && (
        <Text style={styles.selectedItemText}>
          Selected item: {selectedItem}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wheelContainer: {
    position: 'relative',
  },
  wheelBackground: {
    width: 200,
    height: 200,
    backgroundColor: '#ccc',
    borderRadius: 100,
    position: 'absolute',
  },
  wheel: {
    width: 200,
    height: 200,
    backgroundColor: 'transparent',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerBall: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    borderRadius: 10,
    position: 'absolute',
  },
  spinButton: {
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  spinButtonText: {
    color: 'white',
  },
  selectedItemText: {
    marginTop: 20,
    fontSize: 20,
  },
});

export default WheelOfFortune;
