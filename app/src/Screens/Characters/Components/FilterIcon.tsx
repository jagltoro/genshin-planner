import { Box } from 'components/Theme';
import React from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';

import { IFilter } from '..';

interface FilterIconProps {
  image: number | {uri: string};
  filterElement: string;
  type: 'element' | 'weapon';
  filter: IFilter | undefined;
  handleFilter: (type: "weapon" | "element", element: string) => void;
}

const FilterIcon = ({image,filterElement, type, filter, handleFilter}: FilterIconProps) => {
  return (
    <Box 
      backgroundColor={filter && filter[type].includes(filterElement) ? 'primary' : 'transparent'}
      borderColor='primary' 
      borderWidth={1} 
      borderRadius='m' 
      padding='s'>
        <Pressable onPress={() => handleFilter(type,filterElement)}>
          <Image source={image} style={styles.image} />
        </Pressable>
    </Box>
  );
};

export default FilterIcon;

const styles = StyleSheet.create({
  image: {
    width: 30, 
    height: 30
  }
});
