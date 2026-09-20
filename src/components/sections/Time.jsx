import { useEffect, useState } from "react";
import { getDate } from "../../data/data.js";
import RollingNumber from "../../animations/core/RollingNumber.jsx";
import useSectionHoverAnimation from "../../animations/core/useSectionHoverAnimation.jsx";

function Time() {
    const { enter: sectionEnter, exit: sectionExit } = useSectionHoverAnimation("var(--color-teal)");
    const [date, setDate] = useState(getDate());

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(getDate());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="section-box flex flex-col gap-3 col-span-full md:col-span-4 bg-card border-4 border-border rounded-4xl py-6 px-8"
            onMouseEnter={e => sectionEnter(e)}
            onMouseLeave={e => sectionExit(e)}
        >
            <span className="hoverColor font-mono text-xs text-secondary-text">
                {date.time.timezoneName} · {date.time.timezone}
            </span>

            <span
                className="time-container font-archiveblack text-4xl text-text"
                aria-label={`${date.time.hours}:${date.time.minutes}:${date.time.seconds}`}
            >
                <RollingNumber
                    value={date.time.hours}
                    className="hoverColor hour"
                />
                <span className="text-secondary-text">:</span>
                <RollingNumber
                    value={date.time.minutes}
                    className="hoverColor minute"
                />
                <span className="text-secondary-text">:</span>
                <RollingNumber
                    value={date.time.seconds}
                    className="hoverColor second text-2xl"
                />
            </span>

            <span className="hoverColor font-mono text-sm text-secondary-text">
                <p className="mb-0.5">
                    {date.date.week}
                </p>

                <span>
                    {date.date.month.slice(0, 3)} {date.date.day},{" "}{date.date.year}
                </span>
            </span>
        </div>
    );
}

export default Time;