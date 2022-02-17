import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { getKeyValue } from './Helpers';
import { Box, Text } from './Theme';
import Colors from 'data/Colors';

import { ICharacter, IWeapon, RootStackParamList } from '../../types';

import characterImages from 'assets/char';
import weaponImages from 'assets/weapons';

import CharactersDataTranslation from '../../Data/EN/Characters.json';
import WeaponsDataTranslation from '../../Data/EN/Weapons.json';

interface CardProps {
  weapon?: IWeapon;
  character?: ICharacter;
}

const Card = ({ character, weapon }: CardProps) => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const data = weapon || character;
  const translation = weapon ? WeaponsDataTranslation : CharactersDataTranslation;
  const images = weapon ? weaponImages.regular : characterImages.small;

  const image = getKeyValue(data!.img.toLowerCase())(images)
  return (
    <Box justifyContent='center' alignItems='center' flex={1/3}>
      <Pressable onPress={() => navigation.navigate('Details', {
          id: data!.id,
          type: weapon ? 'weapon' : 'character',
        })}>
        <LinearGradient
          style={styles.imageGradient}
          locations={[0,0.39,0.8]}
          colors={
            data!.stars === 5 ? Colors.fiveStars:
            data!.stars === 4 ? Colors.fourStars:
            Colors.threeStars
          }>
          <Image source={image} style={styles.image} />
        </LinearGradient>
        <Text variant='body' numberOfLines={1} style={styles.characterName}>{getKeyValue(data!.name)(translation)}</Text>
      </Pressable>
    </Box>
  )
};

export default Card;

const styles = StyleSheet.create({
  characterName: { 
    width: 100, 
    textAlign: 'center'
  },
  imageGradient: {
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000000',
  }
});
