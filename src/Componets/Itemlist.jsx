import { Item } from "./Item";

export const Itemlist =({items})=>{
  return( <>
    {items.map((item) => {
        return <Item item={item} key={item.id} />;
    })}

    </>
)}