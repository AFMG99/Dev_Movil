import { StyleSheet } from 'react-native';
import globalStyles from './globalStyles';

const itemListStyles = StyleSheet.create({
  ...globalStyles,
  container: {
    ...globalStyles.container,
    backgroundColor: '#fff'
  },
  image: {
    ...globalStyles.image,
    width: 80,
    height: 80,
  },
  itemPrice: {
    ...globalStyles.itemPrice,
    marginLeft: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#000',
    padding: 8,
    borderRadius: 8,
  },
  backButton: {
    fontSize: 24,
    color: '#fff',
  },
  searchIcon: {
    fontSize: 24,
    color: '#fff',
  },
  listItem: {
    backgroundColor: '#fff',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  itemTitle: {
    fontSize: 18,
    color: '#4a148c',
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  itemDescription: {
    fontSize: 15,
    paddingLeft: 10,
    color: '#757575',
  },
  listContent: {
    paddingBottom: 16,
  },
});

export default itemListStyles;
