import React, { useEffect, useState } from 'react';
import { FlatList, Pressable } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import { Box } from 'components/Theme';
import Card from 'components/Card';

import CharactersData from 'data/Characters';
import { Ionicons } from '@expo/vector-icons';
import Filter from './Components/Filter';

export interface IFilter {
  weapon: string[];
  element: string[];
}

const Characters = () => {
  const fiveStars = Object.values(CharactersData).filter(character => character.stars === 5);
  const fourStars = Object.values(CharactersData).filter(character => character.stars === 4);
  const all = [...fiveStars, ...fourStars];

  const [showFilters, setShowFilters] = useState(false);
  const [filter, setFilter] = useState<IFilter>({weapon:[], element:[]});
  const [characters, setCharacters] = useState(all);


  const marginTop = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    marginTop.value = showFilters ? 150 : 0;
    return {
      marginTop: withTiming(marginTop.value, {duration: 750})
    };
  }, [showFilters]);

  useEffect(() => {
    let filteredCharacters = [...all];
    if(filter.weapon.length > 0 || filter.element.length > 0) {
      if(filter.weapon.length > 0 && filter.element.length > 0) {
        filteredCharacters = all.filter(character => filter.weapon.includes(character.weapon) && filter.element.includes(character.element));
      } else {
        if(filter.weapon.length > 0) {
          filteredCharacters = Object.values(all).filter(character => filter.weapon.includes(character.weapon));
        }
        if(filter.element.length > 0){
          filteredCharacters = Object.values(all).filter(character => filter.element.includes(character.element));
        }
      }
    }
    setCharacters(filteredCharacters);
  }, [filter])


  const handleElementFilter = (type: "weapon" | "element", element: string) => {
    const filterCpy = {...filter};

    if (filterCpy) {
      if (filterCpy[type].includes(element)) {
        filterCpy[type] = filterCpy[type].filter(e => e !== element);
      }else{
        filterCpy[type].push(element);
      }
    }
    setFilter(filterCpy);
  };


  return (
    <Box padding='s'>
      <Pressable style={{alignSelf: 'flex-end', marginRight: 10}} onPress={() => setShowFilters(!showFilters)}>
        <Ionicons name='funnel' size={25} color='#fff' />
      </Pressable>

      {
        showFilters && (
          <Filter {...{showFilters, setShowFilters, filter, handleElementFilter}} />
        )
      }
      <Animated.View style={[animatedStyle]}/>
      <FlatList
        data={Object.values(characters)}
        columnWrapperStyle={{marginVertical: 10}}
        numColumns={3}
        keyExtractor={(item) => item.id.toString() }
        renderItem={(character) => <Card character={character.item}/> }
      />
    </Box>
  );
};

export default Characters;