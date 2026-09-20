const words = [
    'AI Engineer',
    'Software Engineer',
    'System Designer',
    'Full Stack Developer',
    'Problem Solver',
    'Builder'
]

const WORK_COLORS = [
    "var(--color-blue)",
    "var(--color-pink)",
    "var(--color-orange)",
    "var(--color-red)",
    "var(--color-teal)"
];

const LANG_COLORS = {
    JavaScript: "var(--color-yellow)",
    TypeScript: "var(--color-blue)",
    Python: "var(--color-green)",
    HTML: "var(--color-orange)",
    CSS: "var(--color-purple)",
    Java: "var(--color-red)",
    Go: "var(--color-teal)",
    Rust: "var(--color-orange)",
    Shell: "var(--color-lime)",
    Dockerfile: "var(--color-blue)",
};

function getDate() {
    const date = new Date();
    const pad = (num) => String(num).padStart(2, "0");

    return {
        time: {
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

            timezoneName: new Intl.DateTimeFormat("en-IN", {
                timeZoneName: "short"
            })
                .formatToParts(date)
                .find(part => part.type === "timeZoneName").value,

            hours: String((date.getHours() % 12) || 12),
            minutes: pad(date.getMinutes()),
            seconds: pad(date.getSeconds()),
            ampm: date.getHours() >= 12 ? "PM" : "AM"
        },

        date: {
            week: (() => {
                const num = date.getDay();
                switch (num) {
                    case 0: return 'Sunday';
                    case 1: return 'Monday';
                    case 2: return 'Tuesday';
                    case 3: return 'Wednesday';
                    case 4: return 'Thursday';
                    case 5: return 'Friday';
                    case 6: return 'Saturday';
                    case 7: return 'Sunday';
                }
            })(),
            day: date.getDate(),
            month: (() => {
                const num = date.getMonth() + 1;

                switch (num) {
                    case 1: return "January";
                    case 2: return "February";
                    case 3: return "March";
                    case 4: return "April";
                    case 5: return "May";
                    case 6: return "June";
                    case 7: return "July";
                    case 8: return "August";
                    case 9: return "September";
                    case 10: return "October";
                    case 11: return "November";
                    case 12: return "December";
                    default: throw new Error("Date not found error");
                }
            })(),

            year: date.getFullYear()
        }
    };
}

async function getRepos() {
    const res = await fetch(
        "https://api.github.com/users/Lxkshyz/repos"
    );

    if (!res.ok) {
        throw new Error(`GitHub API error: ${res.status}`);
    }

    const repos = await res.json();

    return Promise.all(
        repos.map(async (repo) => {
            const langRes = await fetch(
                `https://api.github.com/repos/Lxkshyz/${repo.name}/languages`
            );

            if (!langRes.ok) {
                throw new Error(
                    `Language API error: ${langRes.status}`
                );
            }

            const languages = await langRes.json();

            return {
                name: repo.name,
                url: repo.html_url,
                description: repo.description,
                languages: Object.keys(languages)
            };
        })
    );
}

const arr = await getRepos();

console.log(arr);

export { words, getDate, LANG_COLORS, WORK_COLORS, getRepos }