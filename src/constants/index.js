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
        title: "JobQuest",
        description:
            "Web-based platform that allows users to view, save, and apply jobs from various recruiters, providing a convenient and efficient ways for job application.",
        tags: [ 'VueJs', 'Pinia', 'NuxtJS', 'Firebase', 'Tailwind', 'Vercel', 'Git'],
        image: './projects/jobquest.png',
        source_code_link: "https://github.com/oxcode-dev/jobquest",
        site_link: "https://app-jobquest.vercel.app/",
    },
    {
        title: "Barfresh",
        description:
            "The project is an e-commerce web application for skincare products, where users can shop variety of skincare products.",
        tags: ['NextJs', 'CSS', 'ReactJS', 'Tailwind', 'Firebase', 'Redux', 'Vercel', 'Git'],
        image: './projects/barfresh.png',
        source_code_link: "https://github.com/oxcode-dev/barfresh-ecommerce",
        site_link: "https://barfresh.vercel.app/"
    },
    {
        title: "Tobi DaSilva's Portfolio",
        description:
            "The project is a portfolio website for , where users can shop variety of skincare products.",
        tags: ['CSS', 'ReactJS', 'Tailwind', 'Netlify', 'Git'],
        image: './projects/tobi-dasilva.png',
        source_code_link: "https://github.com/oxcode-dev/tobiportfolio",
        site_link: "https://tobidasilva.com/about"
    },
];

// // import barfreshAdmin from "./../../public/projects/barfresh-admin.png";
// import JobQuestAdmin from "./projects/jobquest-admin.png";
// import parizzo from "./projects/parizzo.png";
// import quickremit from "./projects/quickremit.png";
// import tobiPortfolio from "./projects/tobi-dasilva.png";