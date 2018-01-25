import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
  debugger;
  return (
    <Card>
      <CardSection>
        <Text>{props.data.title}</Text>
      </CardSection>

      <CardSection>
        <Text>{props.data.url}</Text>
      </CardSection>

      <CardSection>
        <Text>{props.data.image}</Text>
      </CardSection>
    </Card>
  );
};


export default AlbumDetail;
