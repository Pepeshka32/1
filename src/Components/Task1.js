import React from 'react';

export function Test1()
 {
    return <h1>Hello world</h1>;
 }

 export function MyComponent()
 {
  const obj={
    name:'oleg',
    surname:'mafioznik',
    age:'52',

  };
  return <div>
  <p>name - {obj.name}</p>
  <p>surname - {obj.surname}</p>
  <p>age - {obj.age}</p>
  </div>
 }

export class Test2 extends React.Component {
    render() 
    {
      return <h1>Привет мир</h1>;
    } 
  }

// Вложенные компоненты
function MyButton() 
{
    return (
      <button>OK</button>
    );
}

export function MyApp() {
  var style={
    margin:"10px 10px 10px 20px",
    border:"1px solid red",
    color:"blue"
  }
    return (
      <div style={style}>
        <h1>Добро пожаловать в моё приложение</h1>
        
        <MyButton/>
        
      </div>
    );
  }

  // Обратите внимание на то, что <MyButton /> начинается с 
  // заглавной буквы. Это отличительная черта компонентов React. 
  // Названия компонентов в React всегда должны начинаться с 
  // заглавной буквы, а теги HTML — с маленькой.