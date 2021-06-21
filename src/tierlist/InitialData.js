const initialData = {
    items: {
      'item-1': { id: 'item-1', songURL: '', imgURL: null, title: 'golden liar', subtitle: 'bradio' },
      'item-2': { id: 'item-2', songURL: '', imgURL: null, title: 'Toorisugita Kisetsu No Sora De', subtitle: 'the oral cigarettes' },
      'item-3': { id: 'item-3', songURL: '', imgURL: null, title: 'pretender', subtitle: 'official hige dandism' },
      'item-4': { id: 'item-4', songURL: '', imgURL: null, title: 'kaerou', subtitle: 'fujii kaze' },
      'item-5': { id: 'item-5', songURL: '', imgURL: null, title: 'songs to flex the 2 i didn\'t get in AP Japanese bc I didn\'t take the exam', subtitle: null },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'S',
        color: '#1DB954',
        itemIds: ['item-1', 'item-2', 'item-3', 'item-4', 'item-5'],
      },
      'column-2': {
        id: 'column-2',
        title: 'A',
        color: '#1DB954',
        itemIds: [],
      },
    },
    columnOrder: ['column-1', 'column-2']
};
  
export default initialData;