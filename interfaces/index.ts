import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  HomeScreen: undefined;
  ListView: {data: {title: string}[]};
};

export interface Navigation {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList,
    string | undefined
  >;
}
