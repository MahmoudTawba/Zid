import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getImage } from '../../../utils/image';
import { Typography } from '../../../components/typography';
import { RootStackParamList } from '../../../stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IListItem } from '../index';
import { Avatar } from '../../../components/avatar';
import styles from "./Styles";


export const ListItem: React.FC<{ item: IListItem }> = ({ item }) => {
  const thumbnailSize = 600;
  const nav =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'ListScreen'>
    >();

  return (
    <TouchableOpacity onPress={() => nav.navigate('ItemScreen', { item: item })} style={styles.ListItemContainer}>
      <Avatar style={styles.image} source={{ uri: getImage(thumbnailSize, item.id) }} />

      <View style={styles.flex}>
        <Typography weight="medium">{item.name}</Typography>
        {!item.salePrice ? (
          <Typography style={item.salePrice ? styles.discounted : undefined}>SAR {item.price}</Typography>
        ) : null}

        {item.salePrice ? (
          <Typography color="#DA2121">
            <Typography style={item.salePrice ? styles.discounted : undefined}>SAR {item.price}</Typography>
            {'  '}SAR {item.salePrice}
          </Typography>
        ) : null}

        <Typography fontSize={14} color="#545454">Brand: {item.name}</Typography>
      </View>
    </TouchableOpacity>
  );
};

