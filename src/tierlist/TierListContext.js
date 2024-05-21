import React from 'react';

export const initialData = {
  data: {
    title: 'Spotify Tier List Maker',
    items: {},
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'S',
        color: '#DC3CA0',
        itemIds: [],
      },
      'column-2': {
        id: 'column-2',
        title: 'A',
        color: '#F63E02',
        itemIds: [],
      },
      'column-3': {
        id: 'column-3',
        title: 'B',
        color: '#F5B700',
        itemIds: [],
      },
      'column-4': {
        id: 'column-4',
        title: 'C',
        color: '#1DB954',
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
  addToItemPool: (id, type, songURL, imgURL, title, subtitle, isExplicit, audioURL) => {},
  deleteFromItemPool: (id, type) => {},
  addManyToItemPool: (items) => {},
  deleteManyFromItemPool: (items) => {}
}

export const TierListContext = React.createContext(initialData);