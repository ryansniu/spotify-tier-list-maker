// src/components/Column.tsx
import React from 'react'
import Item from './Item'
import { Droppable } from 'react-beautiful-dnd'

// TypeScript only
interface ColumnProps {
    col: {
      id: string
      list: string[]
    }
  }
  
  const Column: React.FC<ColumnProps> = ({ col: { list, id } }) => {
    return (
      <Droppable droppableId={id}>
        {provided => (
          <div
            className='tier-col'
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
            >
            <h2>{id}</h2>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '120px'
              }}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {list.map((text, index) => (
                <Item key={text} text={text} index={index} />
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    )
}

export default Column