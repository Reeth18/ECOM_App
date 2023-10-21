import Header from './components/pages/Header';
import ChildComp from './components/pages/ChildComp';
import Main from './components/pages/Main';
import Footer from './components/pages/Footer';
import { useState } from 'react';
import Register from './components/auth/Register';
export function App() {
  // props
  // let a = 5;
  // let b = {
  //   name: 'Rayith'
  // };

  // let c = [1,2,3,4,5]
  // Hooks: are special js functions used for manipulating data accross components
  // Major used fundamental hooks: useState and UseEffect.....
  // useState: by using this we store info or data or state of component.....
  // [stateVariable, stateFunction]
  // const [count, setCount] = useState(0) // default or initial value
  // console.log(count, 'Value of My State Variable');

  // const [x, setX] = useState({
  //   name: 'Snehal'
  // })
  // console.log(x, "this is value of my State Variable");

  // Creating a simple function
  // function increment() {
  //   // console.log("clicking + btn");
  //   setCount((prev) => {
  //     return prev + 1;
  //   })
  // }

  // function decrement() {
  //   // console.log("clicking + btn");
  //   setCount((next) => {
  //     return next - 1;
  //   })
  // }
  return (
    <>
      {/* <Header a={a} b={b} count={count} x={x} setX={setX}/> */}
      {/* <ChildComp c={c}/> */}
      {/* <ChildComp a = {props.a} /> */}
      <Register />
      <Header />
      <Main />
      <Footer />
      {/* <button onClick={increment}> + </button>
      {count}
      <button onClick={decrement}> - </button>

      <p>This is Name of User: {x.name}</p> */}
    </>
  );
}
