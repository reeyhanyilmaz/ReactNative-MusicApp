import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inner_container: {
    padding: 10,
    flex: 1, //bulunduğu alanı kaplasın diye, ekrandan taşmasın diye verdik.
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 27,
  },
  info_container: {
    flex: 1, //konumlamayı sağladık. tükendi sağa ötelendi
    flexDirection: 'row',
    alignItems: 'center',
  },
  year: {
    marginLeft: 10,
    color: 'gray',
    fontWeight: 'bold',
  },
  soldout_container: {
    borderWidth: 2,
    borderColor: '#9387f4',
    padding: 5,
    borderRadius: 5,
  },
  soldout_title: {
    color: '#9387f4',
    fontWeight: 'bold',
  },
  content_container: {
    flexDirection: 'row',
  },
});
