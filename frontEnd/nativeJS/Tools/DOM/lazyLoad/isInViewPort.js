import viewPortSize from './../viewPortSize.js';

const isInViewPort = dom => {
    const [vpWidth, vpHeight] = viewPortSize();
    const {
        top,
        left,
        width,
        height,
    } = dom.getBoundingClientRect();

    const isInVerticalVP = top < 0 && Math.abs(top) < height || top > 0 && top < vpHeight;
    const isInHorizontalVP = left < 0 && Math.abs(left) < width || left > 0 && left < vpWidth;

    return isInVerticalVP && isInHorizontalVP;
};

export default isInViewPort;
