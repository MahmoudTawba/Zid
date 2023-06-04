import React, { useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import getListData from '../../utils/fake-data';
import { ListItem } from './components/item';

export interface IListItem {
  id: string;
  name: string;
  description: String;
  price: string;
  salePrice: any;
  brand: String;
}

const ListScreen = () => {
  const [page, setPage] = useState(0)
  const [listData, setListData] = useState([])
  const [pages, setPages] = useState([-1])

  // Check if the scrolling is close to the bottom of the page
  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: any) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  useEffect(() => {
    // Check that this is not the current page
    if (pages.length && pages[pages.length - 1] !== page) {
      // Append the new data to the old data list
      let newList = [...listData, ...getListData(page)]
      setListData(newList);
    }

    setPages([...pages, page])
  }, [page]  // Get the next page every time the page changes
  )
  return (
    <SafeAreaView edges={['top', 'bottom']} style={{ backgroundColor: "#F9F9F9" }}
    >
      {listData.length > 0 ? (
        <ScrollView contentContainerStyle={{ paddingHorizontal: 25 }} onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            setPage(page + 1); // Get next page when reaching the bottom
          }
        }}
          scrollEventThrottle={400} >
          {listData.map((item, indx) => <ListItem key={indx} item={item} />)}
        </ScrollView>
      ) : (<Text>Loading.....</Text>)}
    </SafeAreaView >
  );
};

export default ListScreen;
