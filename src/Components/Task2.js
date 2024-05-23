import React from 'react';

const user = {
  name: 'Bill Gates',
  imageUrl: 'bg.png',
  imageW: 290,
  imageH: 200,

};
var style = {
  margin: "10px",
  border: "1px solid red",
  color: "blue",
  height: 552,
  width: 300
}

export function Profile(props) {

  return (
    <div style={style}>
      {/* интерполяция - встраивание значения перменной в строку */}
      <h1>{props.user.name}</h1>
      <h1>{props.user.surname}</h1>
      <h2>{props.user.numbe}</h2>
      <h2>{props.user.city}</h2>
      <h2>{props.user.exp}</h2>
      <h3>{props.user.perks}</h3>

      <img
        src={props.user.imageUrl}
        alt={'Фото ' + props.user.name + props.user.surname + props.user.numbe + props.user.city + props.user.exp + props.user.perks}
        style={{ width: props.user.imageW, height: props.user.imageH }} />
      <p>{props.text}</p>
    </div>


  );
}


