import { Ionicons } from '@expo/vector-icons';
import { Box } from 'components/Theme';
import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import Animated, { FadeInLeft, FadeOutLeft } from 'react-native-reanimated';

import Elements from 'assets/elements';
import { types } from 'assets/weapons';
import FilterIcon from './FilterIcon';

import {IFilter} from '..';

interface FilterProps {
  showFilters: boolean;
  setShowFilters: (showFilters: boolean) => void;
  filter: IFilter | undefined;
  handleElementFilter: (type: "weapon" | "element", element: string) => void;
}


const Filter = ({showFilters, setShowFilters, filter, handleElementFilter}: FilterProps) => {

  return (
    <Animated.View 
      entering={FadeInLeft.delay(350)} 
      exiting={FadeOutLeft} 
      style={{position: 'absolute', zIndex: 11, top: 0, left: 0, right: 0, backgroundColor: '#1D3461', paddingTop: 50}}
    >
      <Pressable onPress={() => setShowFilters(!showFilters)} style={{position: 'absolute', top: 5, right: 5}}>
        <Ionicons name='ios-close' size={25} color='#fff'/>
      </Pressable>

      <Box paddingHorizontal='s'>
        <Box flexDirection='row' justifyContent='space-between' marginBottom='m'>
          {
            Elements.map(element => (
              <FilterIcon 
                key={element.element}
                image={{uri: element.image}}
                filterElement={element.element.toLowerCase()}
                filter={filter}
                type={'element'}
                handleFilter={handleElementFilter}
              />
            ))
          }
        </Box>
      </Box>
      <Box paddingHorizontal='s'>
        <Box flexDirection='row' justifyContent='space-between' marginBottom='m'>
          {
            Object.values(types).map(weaponType => (
              <FilterIcon 
                key={weaponType.name}
                image={weaponType.image}
                filterElement={weaponType.name.toLowerCase()}
                filter={filter}
                type={'weapon'}
                handleFilter={handleElementFilter}
              />
            ))
          }
        </Box>
      </Box>
    </Animated.View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {}
});
