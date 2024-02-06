import React from 'react';
import {Text, View} from 'react-native';
import Section from '../../components/Section';

function ListView (data: { title: string; }[]): React.JSX.Element {
  return (
    <View>
      <Text>Hello</Text>
      {data && data.map((item) => {
        return (
          <Section title={item.title} />
        )
      })}
    </View>
  )
}


export default ListView;
