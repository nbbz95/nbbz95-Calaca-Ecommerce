import React from 'react'
import ItemCount from '../../components/ItemCount/ItemCount'

const ItemListContainer = ({greeting}) => {

    const onAdd = (quantity) => {
      console.log(`Se agrego ${quantity} unidades`);
    }
  return (
    <div>
        <h1>{greeting}</h1>
        <ItemCount stock={10} initial={1} onAdd={onAdd} />
    </div>
  )
}

export default ItemListContainer