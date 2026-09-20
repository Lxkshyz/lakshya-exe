import gsap from "gsap";
export function createHoverTweenController() {
    let tween = null;
    tween?.kill()
    let generation = 0;
    const run = (target, vars = {}) => {
        const gen = ++generation;
        const {onComplete, ...rest} = vars
        gsap.to(target, {
            ...rest,
            onComplete: () => {
                if (gen === generation) return
                tween = null
                onComplete?.()
            }
        })
    }

    const runTimeline = (build, vars = {}) => {
        const gen = ++generation;
        tween?.kill();
        const { onComplete, defaults, ...rest } = vars;

        const tl = gsap.timeline({
            defaults: { ...defaults },
            ...rest,
            onComplete: () => {
                if (gen !== generation) return;
                tween = null;
                onComplete?.();
            },
        });

        build(tl);
        tween = tl;
        return tl;
    };

    return { run, runTimeline };
}

export function clearInlineProps(targets, props) {
    gsap.set(targets, { clearProps: props });
}
