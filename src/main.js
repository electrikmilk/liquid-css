import './liquid.css';
import filters from './filters.svg?raw';

window.onload = () => {
    document.body.innerHTML += filters;

    animateWaterFilter();
};

const rad = Math.PI / 180;

function animateWaterFilter() {
    const img = document.querySelector('#water feTurbulence');
    let frames = 0;
    let bfx;
    let bfy;
    let bf;

    function AnimateBaseFrequency() {
        bfx = 0.001;
        bfy = .01;
        frames += .25;
        bfx += 0.001 * Math.cos(frames * rad);
        bfy += 0.005 * Math.sin(frames * rad);

        bf = bfx.toString() + ' ' + bfy.toString();
        img.setAttributeNS(null, 'baseFrequency', bf);

        window.requestAnimationFrame(AnimateBaseFrequency);
    }

    window.requestAnimationFrame(AnimateBaseFrequency);
}
