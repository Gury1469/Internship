import React from "react";
import FoodItem from "./FoodItem";
import EmptyListError from "./EmptyListError";

export default function FoodList(props) {
  let item = props.item;
  if (item.length === 0)
  {
    return (<EmptyListError/>)
  }
  else
  {
    return (
        <>
          <div className="container pt-4">
            <h3 className="pb-3">Food Items</h3>
            <ul className="list-group">
              {item.map((x) => {
                return (
                  <FoodItem x={x}/>
                );
              })}
            </ul>
          </div>
        </>
      );
  }
  
}
// import React from "react";

// export default function FoodList(props) {
//   return (
//     <>
//     <div className="container pt-4">
//     <h3 className="pb-3">Food Items</h3>
//       <ul className="list-group">
//         <li className="list-group-item">{props.item[0]}</li>
//         <li className="list-group-item">{props.item[1]}</li>
//         <li className="list-group-item">{props.item[2]}</li>
//         <li className="list-group-item">{props.item[3]}</li>
//         <li className="list-group-item">{props.item[4]}</li>
//       </ul>
//       </div>
//     </>
//   );
// }

// import React from "react";

// export default function FoodList(props) { //we can also use FoodList({item}) and remove let item...
//     let item=props.item
//   return (
//     <>
//     <div className="container pt-4">
//     <h3 className="pb-3">Food Items</h3>
//       <ul className="list-group">
//         <li className="list-group-item">{item[0]}</li>
//         <li className="list-group-item">{item[1]}</li>
//         <li className="list-group-item">{item[2]}</li>
//         <li className="list-group-item">{item[3]}</li>
//         <li className="list-group-item">{item[4]}</li>
//       </ul>
//       </div>
//     </>
//   );
// }
