import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../interfaces';
import { View, Text, Button } from 'react-native';
import { data } from '../data';
import { dataEs } from '../data-es';

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

function HomeScreen({navigation, setLanguage}: Props): React.JSX.Element {
  
  const handleClick = (lang: { title: string; }[]) => {
    setLanguage(lang);
  }

  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hi dad!</Text>
        <Button title={'Spanish'} onPress={() => handleClick(dataEs)} />
        <Button title={'English'} onPress={() => handleClick(data)} />
      </View>
    );
  }

  export default HomeScreen;