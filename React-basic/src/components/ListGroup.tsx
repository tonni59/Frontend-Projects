import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
//import type { MouseEvent } from "react";

// { items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event handler
  //const handleClick = (event: MouseEvent) => console.log(event);

  // const message = items.length === 0 ? <p>No item found</p> : null

  /*
  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  }*/

  return (
    <Fragment>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
