import './App.css';
import randomColor from 'randomcolor';
import React, { useState } from 'react';

const RandomColorGenerator = () => {
  const [color, setColor] = useState('#000'); // initial variable
  // const color = randomColor();
  const changeColor = () => {
    setColor(randomColor);
  };
  const mystyle = {
    color: 'white',
    backgroundColor: 'DodgerBlue',
    padding: '10px',
    fontFamily: 'Arial',
  };
  return (
    <div
      style={{
        backgroundColor: color,
      }}
    >
      <button onClick={changeColor}>Change Color</button>
      <text>Erase this Text if you can!</text>
    </div>
  );
};

export default RandomColorGenerator;

// import React, { useState } from 'react';
// import { SketchPicker } from 'react-color';

// export default function;

// class Component extends React.Component {

//   render() {
//     return <SketchPicker />
//   }
// }

// RandomColorGenerator() {
//   const { randomcolor, setrandomcolor } = useState(color.random().color);
//   return (
//     <div>
//       <div>(color)</div>
//       <button> onClick={() => setColor('red')}>Update Color</button>
//     </div>
//   );
// }
// {/* <div class="input-color">
//   <input type="text" value="Orange" />
//   <div class="color-box" style="background-color: #FF850A;"></div>
//   // Replace "#FF850A" to change the color
// </div>; */}

// -----------------
