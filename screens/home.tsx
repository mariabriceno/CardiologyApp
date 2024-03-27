// import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import {RootStackParamList} from '../interfaces';
import {View, Text} from 'react-native';
// import {data} from '../data';
// import {dataEs} from '../data-es';
// import {useState} from 'react';

// type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

function HomeScreen(): React.JSX.Element {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* <Button title={'Spanish'} onPress={() => handleClick(dataEs)} />
      <Button title={'English'} onPress={() => handleClick(data)} /> */}
      <Text>hello</Text>
    </View>
  );
}

export default HomeScreen;
