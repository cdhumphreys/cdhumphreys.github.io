export function inViewObs(element: HTMLElement, callback: () => void = () => { }) {
    const options: IntersectionObserverInit = {
        threshold: 0.1
    }
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                callback();
                obs.disconnect();
            }
        })
    }, options);

    observer.observe(element);
}