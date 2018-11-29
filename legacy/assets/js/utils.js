// Optimized resize
// https://developer.mozilla.org/ru/docs/Web/Events/resize
(function () {
    const throttle = function (type, name, obj) {
        obj = obj || window;
        let running = false;
        const func = function () {
            if (running) {
                return;
            }
            running = true;
            requestAnimationFrame(function () {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    throttle('resize', 'optimizedResize');
})();

// Font Face Observer
// https://fontfaceobserver.com/
const font = new FontFaceObserver('Raleway');

font.load();

// Check even/odd
function isEven(n) {
    return n % 2 === 0;
}

function isOdd(n) {
    return Math.abs(n % 2) === 1;
}
