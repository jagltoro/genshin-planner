import React from 'react';
import { FlatList } from 'react-native';

import { Box, Text } from '../Components/Theme';
import Card from '../Components/Card';

import WeaponsData from '../../Data/Weapons';

const Weapons = () => {

  const fiveStars = Object.values(WeaponsData).filter(weapon => weapon.stars === 5);
  const fourStars = Object.values(WeaponsData).filter(weapon => weapon.stars === 4);
  const threeStars = Object.values(WeaponsData).filter(weapon => weapon.stars === 3);

  const all = [...fiveStars, ...fourStars, ...threeStars];

  return (
    <Box padding='s'>
      <Box paddingHorizontal='s'>
        <Text>AQUI LOS FILTROS (POR ARMA / CALIDAD)</Text>
      </Box>
      <FlatList
        data={Object.values(all)}
        columnWrapperStyle={{marginVertical: 10}}
        numColumns={3}
        keyExtractor={(item) => item.id.toString() }
        renderItem={(weapon) => <Card weapon={weapon.item}/> }
      />
    </Box>
  );
};

export default Weapons;