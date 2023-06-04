import React, { useState } from 'react';
import { Dimensions, ScrollView, SafeAreaView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import styled from '@emotion/native';
import { faker } from '@faker-js/faker';
import { RootStackParamList } from '../../stack';
import { getImage } from '../../utils/image';
import { Container } from '../../components/container';
import { Typography } from '../../components/typography';
import { DetailsLine } from '../../components/details-line';
import { DetailsTitle } from '../../components/details-title';
import { Cart } from '../../components/cart';

const SPEC_1 = faker.color.human();
const SPEC_2 = faker.vehicle.vin();
const SPEC_3 = faker.commerce.product();
const SPEC_4 = faker.datatype.float({ min: 0.1, max: 10, precision: 0.1 });

export const Item = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'ItemScreen'>>();

  const [quantity, setQuantity] = useState<number>(1);

  if (!params) {
    return <Typography>Loading ...</Typography>;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Container>
          <ItemImage
            source={{ uri: getImage(900, params.item.id) }}
            size={Dimensions.get('screen').width * 0.9}
          />
          <Typography fontSize={18} weight="semiBold">
            {params.item.name}
          </Typography>
          {params.item.salePrice ? (
            <Typography fontSize={18} color="red">
              <ItemDiscountedPrice>SAR {params.item.price}</ItemDiscountedPrice>
              {'  '}
              SAR {params.item.price}
            </Typography>
          ) : (
            <Typography fontSize={18}>SAR {params.item.price}</Typography>
          )}

          <Typography style={{ marginTop: 22 }}>{params.item.description}</Typography>

          <DetailsTitle>Details</DetailsTitle>
          <DetailsLine label="Brand">{params.item.brand}</DetailsLine>
          <DetailsLine label="Color">{SPEC_1}</DetailsLine>
          <DetailsLine label="SKU">{SPEC_2}</DetailsLine>

          <Typography weight="medium" />
          <Typography weight="medium">Specifications</Typography>
          <DetailsLine label="Type">{SPEC_3}</DetailsLine>
          <DetailsLine label="Weight">
            {SPEC_4} kg
          </DetailsLine>
        </Container>
      </ScrollView>

      <Cart quantity={quantity} update={setQuantity} />
    </SafeAreaView>
  );
};

const ItemImage = styled.Image<{ size: number }>(props => ({
  width: props.size,
  height: props.size,
  marginTop: 20,
  marginBottom: 12,
  borderRadius: 8,
}));

const ItemDiscountedPrice = styled(Typography)({
  textDecorationLine: 'line-through',
});

ItemDiscountedPrice.defaultProps = {
  fontSize: 18,
  color: 'black',
};
