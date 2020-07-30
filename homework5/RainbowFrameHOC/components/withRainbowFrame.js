import React from 'react';

const withRainbowFrame = colors => Component => props => {
    let content = <Component {...props}>{props.children}</Component>;
    colors.forEach((color, i) =>
        content = <div key={i} style={{ border: "solid 6px " + color, padding: "10px" }}>{content}</div>
    );

    return <div className="framedDoubleButton">{content}</div>;
};

export { withRainbowFrame };
