import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { words } from "../../../data/data.js";

gsap.registerPlugin(TextPlugin, ScrollTrigger);
export default function useTypeWriterAnimation(sectionRef) {
    useEffect(() => {
        if (!sectionRef.current) return
        const cursor = gsap.to(".cursorEffect", {
            opacity: 0,
            duration: 0.4,
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true
        });

        let master = gsap.timeline({repeat: -1});
        words.forEach(word => {
            master.to(".text", {
                duration: 1,
                ease: "none",
                text: word
                })
                .to({}, {
                    duration: 1.5
                })
                .to(".text", {
                    duration: 0.6,
                    ease: "none",
                    text: ""
                })
        })
        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top 90%",
            end: "bottom 10%",

            onEnter: () => {
                master.play();
                cursor.play();
            },

            onEnterBack: () => {
                master.play();
                cursor.play();
            },

            onLeave: () => {
                master.pause();
                cursor.pause();
            },

            onLeaveBack: () => {
                master.pause();
                cursor.pause();
            }
        });
        return () => {
            master.kill()
            cursor.kill()
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
    }, []);
}