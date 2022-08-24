import React, { useState } from 'react';
import './Block.scss';
import Box from './components/Box';

function Block() {
  const [firstBlock, setFirstBlock] = useState(false);
  const [secondBlock, setSecondBlock] = useState(false);
  const [thirdBlock, setThirdBlock] = useState(false);

  return (
    <div className='blockWrapper'>
      <div className='buttons'>
        <button onClick={() => setFirstBlock((prev) => !prev)}>
          블럭 1 버튼
        </button>
        <button onClick={() => setSecondBlock((prev) => !prev)}>
          블럭 2 버튼
        </button>
        <button onClick={() => setThirdBlock((prev) => !prev)}>
          블럭 3 버튼
        </button>
      </div>
      <div className='blocks'>
        {firstBlock && <Box num={1} />}
        {secondBlock && <Box num={2} />}
        {thirdBlock && <Box num={3} />}
      </div>
    </div>
  );
}

export default Block;
