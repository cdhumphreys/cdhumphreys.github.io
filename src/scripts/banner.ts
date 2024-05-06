(function () {
    const banner = document.querySelector<HTMLElement>('#banner');

    if (!banner) return;

    banner.addEventListener('mousemove', function (e: MouseEvent) {
        const { x, y } = e;

        banner.style.setProperty('--x', `${x}px`);
        banner.style.setProperty('--y', `${y}px`);
    })

})();