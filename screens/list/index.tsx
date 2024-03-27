import React, {useContext} from 'react';
import {ListContext} from '../../providers/ListProvider';
import {Text, View} from 'react-native';
import Section from '../../components/Section';

function ListView(): React.JSX.Element {
  const content = useContext(ListContext);

  console.log(content);

  return (
    <View>
      <Text>Hello</Text>
      {content &&
        content.map(item => {
          return <Section title={item.title} />;
        })}
    </View>
  );
}

export default ListView;
