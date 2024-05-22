import { 
    reactjs, css, html, javascript, redux,tailwind, git, nextjs, pinia,  nuxtjs,figma, jquery, 
    vscode, bulma, bootstrap, vuejs, firebase, hyper, vercel, postman, chartjs, reactNative,
} from '../components/assets'

export const technologies = [
    { title: 'HTML', icon: html},
    { title: 'CSS3', icon: css},
    { title: 'JavaScript', icon: javascript},
    { title: 'ReactJS', icon: reactjs},
    { title: 'VueJS', icon: vuejs},
    { title: 'TailwindCSS', icon: tailwind},
    { title: 'BootstrapCSS', icon: bootstrap},
    { title: 'BulmaCSS', icon: bulma},
    { title: 'Redux', icon: redux},
    { title: 'Pinia', icon: pinia},
    { title: 'Next JS', icon: nextjs},
    { title: 'Nuxt JS', icon: nuxtjs},
    { title: 'jQuery', icon: jquery},
    { title: 'Chart JS', icon: chartjs},
    { title: 'React Native', icon: reactNative},
    { title: 'VSCode', icon: vscode},
    { title: 'Figma', icon: figma},
    { title: 'Git', icon: git},
    { title: 'Vercel', icon: vercel},
    { title: 'Firebase', icon: firebase},
    { title: 'Hyper', icon: hyper},
    { title: 'Postman', icon: postman},
]  

export const socialLinks = [
    {name: 'GH', link: 'https://github.com/oxcode-dev'},
    {name: 'LN', link: 'www.linkedin.com/in/oxcode001'},
    {name: 'X', link: 'https://x.com/oxcode__'},
    {name: 'IN', link: 'https://www.instagram.com/oxcode__/'},
]

export const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        // image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        // image: jobit,
        source_code_link: "https://github.com/",
    },
];