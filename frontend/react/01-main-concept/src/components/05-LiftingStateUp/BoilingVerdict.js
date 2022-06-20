import React from 'react'


const BoilingVerdict = ({ celsius=0 }) => {
  return (
    <div>
      {(celsius >= 100)
        ? <p className="p-5 bg-green">The water would boil.</p>
        : <p className="p-5 bg-red">The water would not boil.</p>
      }
    </div>
  )
}

export default BoilingVerdict;
