interface IAbility {
  name: string;
  img: string;
  const?: number;
}

export interface ICharacter {
  name: string;
  id: number;
  img: string;
  weapon: string;
  element: string;
  stars: number;
  mats: string[];
  abilities: IAbility[] | IAbility[][];
  talent: string[];
}

export interface IWeapon {
  name: string;
  stars: number;
  id: number;
  img: string;
  type: string;
  effect: (string | string[][])[];
  atkInit: number;
  statInit: number;
  stat: number;
  atkCurve: string;
  statCurve: string;
  atkAdd: number[];
  mats: string[];
}

export type RootStackParamList = {
  Details: {
    id: string | number;
    type: string;
  };
};
