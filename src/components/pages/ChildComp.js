// ChildComp.js
import React from 'react';

function ChildComp(props) {
    let a = props;
    console.log(a);
  return (
    <>
      <p>This is the Child Component</p>
      {/* My passed value of props is {props.c} */}
      <div>My passed value of props is {props.a}</div>
    </>
  );
}

export default ChildComp;
