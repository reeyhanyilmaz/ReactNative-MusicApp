import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './SearchBar.styles';

const SearchBar = props => {
  const onSearch = text => console.log(text);

  return (
    <View style={styles.container}>
      <TextInput placeholder="Search..." onChangeText={props.onSearch} />
    </View>
  );
};

export default SearchBar;
