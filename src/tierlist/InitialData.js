const initialData = {
    tasks: {
      'task-1': { id: 'task-1', content: 'bradio' },
      'task-2': { id: 'task-2', content: 'the oral cigarettes' },
      'task-3': { id: 'task-3', content: 'official hige dandism' },
      'task-4': { id: 'task-4', content: 'yu-peng chen' },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'S',
        color: '#1DB954',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
      },
      'column-2': {
        id: 'column-2',
        title: 'A',
        color: '#1DB954',
        taskIds: [],
      },
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2'],
};
  
export default initialData;