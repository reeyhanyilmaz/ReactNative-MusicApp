import React from 'react';
import {SafeAreaView, Text, View, FlatList, StyleSheet} from 'react-native';
import data from './data.json';
import SongCard from './components/SongCard';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const renderSong = ({item}) => <SongCard song={item} />;
  //bu şekilde her data için func oluşturmasın tekrardan diye.

  const renderSeperator = () => <View style={styles.seperator} />;

  const handleSearch = text => console.log(text);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        keyExtractor={item => item.id}
        data={data}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeperator} //üstte ve en alta seperatör koymaz
      />
    </SafeAreaView>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});
