import React, {useState} from 'react';
import {SafeAreaView, View, FlatList, StyleSheet} from 'react-native';
import data from './data.json';
import SongCard from './components/SongCard';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [list, setList] = useState(data);
  const renderSong = ({item}) => <SongCard song={item} />; //her data için func oluşturmasın tekrardan diye.

  const renderSeperator = () => <View style={styles.seperator} />;
  const handleSearch = text => {
    const filteredList = data.filter(song => {
      const searchedText = text.toLowerCase(); //input'a giirlen text
      const currentTitle = song.title.toLowerCase(); //her item(song)

      return currentTitle.indexOf(searchedText) > -1; //girilen text içinde index'leri eşleştir (0,1,2...)
    });
    setList(filteredList);
  };
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        keyExtractor={item => item.id}
        data={list} //artık data değil değerimiz list(filtrelenen yani)
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
