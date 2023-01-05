import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet} from 'react-native';
import data from './data.json';
import SongCard from './components/SongCard';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const renderSong = ({item}) => <SongCard song={item} />;
  //bu şekilde her data için func oluşturmasın tekrardan diye.

  const renderSeperator = () => <View style={styles.seperator} />;

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
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
