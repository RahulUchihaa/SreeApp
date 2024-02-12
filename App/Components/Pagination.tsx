import { StyleSheet, View } from 'react-native';
import React from 'react';
import { COLORS } from '../Helpers/Constants';

type PaginationProps = {
  index: number;
  data: any[];
};

const Pagination: React.FC<PaginationProps> = ({ index, data }) => {
  return (
    <View style={styles.pagination}>
      {data.map((_, i) => (
        <View
          key={i}
          style={i === index ? styles.activeDot : styles.dot}
        />
      ))}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  pagination: {
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    margin: 5,
    backgroundColor: COLORS.theme,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    margin: 5,
    backgroundColor: '#888',
  },
});
