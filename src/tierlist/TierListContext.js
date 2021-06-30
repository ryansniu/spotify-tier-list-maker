import React from 'react';

export const initialData = {
  data: {
    items: {},
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'S',
        color: 'purple',
        itemIds: [],
      },
      'column-2': {
        id: 'column-2',
        title: 'A',
        color: '#1DB954',
        itemIds: [],
      },
      'column-3': {
        id: 'column-3',
        title: 'B',
        color: 'blue',
        itemIds: [],
      },
      'column-4': {
        id: 'column-4',
        title: 'C',
        color: 'grey',
        itemIds: [],
      },
      'item-pool': {
        id: 'item-pool',
        itemIds: [],
      }
    },
    columnOrder: ['column-1', 'column-2', 'column-3','column-4']
  },
  containsItem: (id) => {},
  addToItemPool: (id, songURL, imgURL, title, subtitle) => {},
}

export const TierListContext = React.createContext(initialData);