import gsap from "gsap";

export function createHoverTweenController() {
    let tween = null;
    let generation = 0;

    const run = (target, vars = {}) => {
        const gen = ++generation;
        tween?.kill();
        const { onComplete, ...rest } = vars;
        tween = gsap.to(target, {
            ...rest,
            overwrite: "auto",
            onComplete: () => {
                if (gen !== generation) return;
                tween = null;
                onComplete?.();
            },
        });
        return tween;
    };

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
