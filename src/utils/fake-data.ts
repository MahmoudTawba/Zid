import { faker } from '@faker-js/faker';

import { IListItem } from '../screens/list';

function getListData(page = 0, resultsPerPage = 10) {
  const list_data: IListItem[] = [];
  const start = page * resultsPerPage
  for (let index = start; index < start + resultsPerPage; index++) {
    const price = faker.commerce.price();
    const priceInt = parseFloat(faker.commerce.price());

    list_data.push({
      id: index,
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: price,
      salePrice: faker.helpers.maybe(
        () => faker.commerce.price(priceInt * 0.5, priceInt * 0.9),
        { probability: 0.1 },
      ),
      brand: faker.company.name(),
    });
  }
  return list_data
}

export default getListData;
