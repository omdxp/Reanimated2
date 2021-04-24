
// import react native
import React, {FC} from 'react';
import {Text, View} from 'react-native';

// define Sandbox props interface
interface SandboxProps {}

// export Sandbox component
const Sandbox: FC<SandboxProps> = ({}): JSX.Element => {
  return (
    <View>
      <Text>Sandbox component created!</Text>
    </View>
  );
};
export default Sandbox;
