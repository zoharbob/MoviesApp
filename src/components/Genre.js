import React from 'react';
import { Text } from 'react-native';

const Genre = ({genre, isLast}) => (
    <Text>
        {genre}<Text>{isLast} </Text>
    </Text>
)

export default Genre;