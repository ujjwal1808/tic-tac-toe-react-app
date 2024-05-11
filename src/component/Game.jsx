import React, { useEffect, useState } from 'react';

const Game = () => {
  const [all, setAll] = useState('X');
  const [one, setOne] = useState('');
  const [two, setTwo] = useState('');
  const [three, setThree] = useState('');
  const [four, setFour] = useState('');
  const [five, setFive] = useState('');
  const [six, setSix] = useState('');
  const [seven, setSeven] = useState('');
  const [eight, setEight] = useState('');
  const [nine, setNine] = useState('');
  const [winner, setWinner] = useState('');
  const [count, setCount] = useState(1);

  const checkWinner = () => {
    // Define winning combinations
    const winningCombos = [
      [one, two, three],
      [four, five, six],
      [seven, eight, nine],
      [one, four, seven],
      [two, five, eight],
      [three, six, nine],
      [one, five, nine],
      [three, five, seven],
    ];

    // Check each winning combination
    if (count != 10) {

      for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (a && a === b && b === c) {
          setWinner(a + "wins");
          break;
        }
      }
    }
    else {
      setWinner("it's Draw");
    }
  };

  useEffect(() => {
    checkWinner();

  })

  const resetHandle = () => {
    setOne('');
    setTwo('');
    setThree('');
    setFour('');
    setFive('');
    setSix('');
    setSeven('');
    setEight('');
    setNine('');
    setWinner('');
    setCount(1);
  }

  const handleClick = (positionValue, positionSetter) => {
    if (positionValue === "") {
      if (!winner && !positionValue) {

        positionSetter(all);
        setAll(all === '0' ? 'X' : '0');
        setCount(count + 1);
        console.log(count);
      }
    } else {
      alert("Please select another box");
    }
  };


  return (
    <>
      <div className='border-2 border-white w-fit display-flex m-auto p-4 shadow-white shadow-2xl rounded-xl'>

        <div className='text-6xl text-white'>
          {winner ? `+------- ${winner} -------+` : `${all} Turn`}
        </div>
        <div className='border-solid border-black border-2 w-fit p-2 bg-blue-300 rounded-3xl display-flex m-auto'>
          <div>
            <button className='w-16 h-16 text-xl align-center p-4 bg-white rounded-full shadow-xl shadow-gray-600 m-2 justify-center border-solid border-black border-2' onClick={() => handleClick(one, setOne)}>{one}</button>
            <button className='w-16 h-16 text-xl align-center p-4 bg-white rounded-full shadow-xl shadow-gray-600 m-2 justify-center border-solid border-black border-2' onClick={() => handleClick(two, setTwo)}>{two}</button>
            <button className='w-16 h-16 text-xl align-center p-4 bg-white rounded-full shadow-xl shadow-gray-600 m-2 justify-center border-solid border-black border-2' onClick={() => handleClick(three, setThree)}>{three}</button>
          </div>
          <div>
            <button className='w-16 h-16 text-xl align-center p-4 bg-white rounded-full shadow-xl shadow-gray-600 m-2 justify-center border-solid border-black border-2' onClick={() => handleClick(four, setFour)}>{four}</button>
            <button className='w-16 h-16 text-xl align-center p-4 bg-white rounded-full shadow-xl shadow-gray-600 m-2 justify-center border-solid border-black border-2' onClick={() => handleClick(five, setFive)}>{five}</button>
            <button className='w-16 h-16 text-xl align-center p-4 bg-white rounded-full shadow-xl shadow-gray-600 m-2 justify-center border-solid border-black border-2' onClick={() => handleClick(six, setSix)}>{six}</button>
          </div>
          <div>
            <button className='w-16 h-16 text-xl align-center p-4 bg-white rounded-full shadow-xl shadow-gray-600 m-2 justify-center border-solid border-black border-2' onClick={() => handleClick(seven, setSeven)}>{seven}</button>
            <button className='w-16 h-16 text-xl align-center p-4 bg-white rounded-full shadow-xl shadow-gray-600 m-2 justify-center border-solid border-black border-2' onClick={() => handleClick(eight, setEight)}>{eight}</button>
            <button className='w-16 h-16 text-xl align-center p-4 bg-white rounded-full shadow-xl shadow-gray-600 m-2 justify-center border-solid border-black border-2' onClick={() => handleClick(nine, setNine)}>{nine}</button>
          </div>
        </div>
        <button className='bg-black p-5 rounded-xl text-white m-2 border-white border-2' onClick={resetHandle}>RESET</button>
      </div>
    </>
  );
};

export default Game;
