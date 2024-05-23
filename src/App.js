import './App.css';
import { Test1, Test2, MyApp,MyComponent } from './Components/Task1';
import { Profile, Main } from './Components/Task2';
import { Ifrender } from './Components/Task3';
import { ShoppingList } from './Components/Task4'
import { Card } from './Components/Task5';

function App() {
  const user = {
    name: 'Bil rizz',
    imageUrl: 'bg.png',
    imageW: 260,
    imageH: 200,
  };
  const user2 = {
    name: 'Petro Poroshenko',
    imageUrl: 'bg.jpg',
    imageW: 300,
    imageH: 200,
  };

  const user52 = {
    name: 'K2 Black Panther',
    imageUrl: 'K2.jpg',
    imageW: 300,
    imageH: 200,
  };
  const user69 = {
    name: 'opezdal',
    surname: ' nasralovuch',
    numbe: '+052982285252 ',
    city:' markopopvka',
    exp: ' 5 years',
    perks:' srat v rakoviny',
    imageUrl: 'metal.jpg',
    imageW: 300,
    imageH: 200,
  };
  return (<div className='good'>
    <Profile user={user} text = "dawg"></Profile> 
    <Profile user={user2} text = "ouch"></Profile>
    <Profile user={user52} text = "K2 Black Panther is a South Korean fourth-generation main battle tank (MBT), designed by the Agency for Defense Development and manufactured by Hyundai Rotem. The tank's design began in the 1990s to meet the strategic requirements of the Republic of Korea Army's reform for three-dimensional, high-speed maneuver warfare based on use of network-centric warfare."></Profile>
    <Profile user={user69} text = "iyoch"></Profile>
    {/* <Ifrender></Ifrender>*/}
    {/* <Test1></Test1> */}
    {/*<Test2></Test2> */}
    {/* <MyComponent></MyComponent> */}
    {/* <ShoppingList></ShoppingList> */}
    {/* <MyApp></MyApp> */}
    {/* <Card user={user}></Card>
    <Card user={user2}></Card>
    <Card user={user}></Card>  */}
  </div>);
} export default App;


