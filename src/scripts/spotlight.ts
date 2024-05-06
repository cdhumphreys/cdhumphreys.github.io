import { animate, spring } from "motion";

(function () {
    const body = document.body

    const spotlight = document.querySelector<HTMLElement>('.js-spotlight')!;

    if (!spotlight) return;

    const spotlightHalfWidth = 0.5 * spotlight.offsetWidth;
    const spotlightHalfHeight = 0.5 * spotlight.offsetHeight;

    body.addEventListener('mousemove', function (e: MouseEvent) {
        const { x, y } = e;
        // const xPerc = 100 * x / banner.offsetWidth;
        // const yPerc = 100 * y / banner.offsetHeight;

        animate(spotlight, { x: x - spotlightHalfWidth, y: y - spotlightHalfHeight }, { easing: spring({ stiffness: 500, damping: 30 }) })

    })

})();