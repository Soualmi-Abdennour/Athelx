import React from 'react'

function Ellipse({width,height,left,top}) {
    return (
      <div
        className="rounded-full  absolute -z-20"
        style={{
            width: `${width}px`,
            height: `${height}px`,
            left: `${left}px`,
            top: `${top}px`,
            background:`linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),radial-gradient(41.41% 41.36% at 50% 50%, #42C0FA 0%, #24B6EA 100%)`,
            filter:`blur(73px)`,
            opacity:0.3

        }}
      ></div>
    );
}

export default Ellipse
