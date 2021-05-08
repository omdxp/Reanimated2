// import react native
import React, {FC} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {runOnUI} from 'react-native-reanimated';

// define Sandbox props interface
interface SandboxProps {}

// export Sandbox component
const Sandbox: FC<SandboxProps> = ({}): JSX.Element => {
  function someWorklet(greeting: string) {
    'worklet';
    console.log(greeting, 'From the UI thread');
  }
  function onPress() {
    runOnUI(someWorklet)('Howdy');
  }
  return (
    <View style={styles.mainView}>
      <View style={styles.centerView}>
        <Button onPress={onPress} title={'Run On UI'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    padding: 9,
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Sandbox;
