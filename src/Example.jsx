import React, { useState } from 'react';
import './Example.css';

const Example = () => {
  const [blurCount, setBlurCount] = useState(0);

  function handleBlur() {
    setBlurCount(blurCount + 1)
  }

  function handleMouseDown(event) {
    event.preventDefault();
  }

  return (
    <div className="example">
      <div>
        {`Input Blur Count: ${blurCount}`}
      </div>
      <input className="input" onBlur={handleBlur} />
      <div className="container" onMouseDown={handleMouseDown}>
        <div className="content">
          Focus the input. Clicking into this region should not cause the input to blur.
        </div>
      </div>
      <div>
        <p>
          Steps to reproduce scrollbar issue. (IE 10/11)
        </p>
        <ul>
          <li>Focus the input by clicking it</li>
          <li>Click the scrollbar inside of the dashed outlined container above</li>
          <li>Observe the blur event is always fired</li>
        </ul>

        <p>
          Steps to reproduce blur. (Custom Browser)
        </p>
        <ul>
          <li>Focus the input by clicking it</li>
          <li>Click anywhere inside the dashed outlined container</li>
          <li>Observe the blur event is always fired</li>
        </ul>
      </div>
    </div>
  )
}

export default Example;
