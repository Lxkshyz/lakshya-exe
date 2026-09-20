import { useEffect, useState } from "react";
import Work from "../ui/assets/Work.jsx";
import Pill from "../ui/Button/Pill.jsx";
import Slider from "../ui/Slider.jsx";
import {
    getRepos,
    WORK_COLORS,
    LANG_COLORS,
} from "../../data/data.js";
import useSectionHoverAnimation from "../../animations/core/useSectionHoverAnimation.jsx";

function Projects() {
    const [repos, setRepos] = useState([]);
    const [sliderOpen, setSliderOpen] = useState(false);

    const { enter, exit } =
        useSectionHoverAnimation("var(--color-orange)");

    useEffect(() => {
        let active = true;

        getRepos()
            .then((data) => {
                if (active) setRepos(data);
            })
            .catch(console.error);

        return () => {
            active = false;
        };
    }, []);

    const renderWork = (repo, index) => (
        <Work
            key={repo.url}
            project={repo.name}
            year={repo.year}
            color={WORK_COLORS[index % WORK_COLORS.length]}
            linkGithub={repo.url}
            tech={repo.languages.map((lang) => (
                <Pill
                    key={lang}
                    pillColor={
                        LANG_COLORS[lang] || "var(--color-purple)"
                    }
                >
                    {lang}
                </Pill>
            ))}
        >
            {repo.description || "No description provided."}
        </Work>
    );

    return (
        <section
            onMouseEnter={enter}
            onMouseLeave={exit}
            className="section-box col-span-full bg-card border-4 border-border rounded-4xl p-8 md:p-10"
        >
            <div className="flex justify-between items-center mb-2">
                <h1 className="hoverColor section-title mb-4.5 font-mono text-secondary-text font-thin text-sm md:text-md">
                    SELECTED WORK
                </h1>

                <Pill
                    pillColor="var(--color-white)"
                    onClick={() => setSliderOpen(true)}
                >
                    SELECTED WORK
                </Pill>
            </div>

            <div className="flex flex-col lg:flex-row gap-2">
                {repos.slice(0, 3).map(renderWork)}
            </div>

            <Slider
                open={sliderOpen}
                onClose={() => setSliderOpen(false)}
            >
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-3">
                        <h2 className="font-archiveblack text-2xl text-[#111111]">
                            SELECTED WORK
                        </h2>

                        <Pill
                            pillColor="var(--color-red)"
                            onClick={() => setSliderOpen(false)}
                        >
                            CLOSE
                        </Pill>
                    </div>

                    <div className="flex flex-col gap-2">
                        {repos.map(renderWork)}
                    </div>
                </div>
            </Slider>
        </section>
    );
}

export default Projects;