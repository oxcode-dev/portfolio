import { 
    reactjs, css, html, javascript, redux,tailwind, git, nextjs, pinia,  nuxtjs,figma, jquery, 
    vscode, bulma, bootstrap, vuejs, firebase, hyper, vercel, postman, chartjs, reactNative, typescript,
    vitest,
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
    { title: 'TypeScript', icon: typescript},
    { title: 'jQuery', icon: jquery},
    { title: 'Chart JS', icon: chartjs},
    { title: 'React Native', icon: reactNative},
    { title: 'Vitest', icon: vitest},
    { title: 'VSCode', icon: vscode},
    { title: 'Figma', icon: figma},
    { title: 'Git', icon: git},
    { title: 'Vercel', icon: vercel},
    { title: 'Firebase', icon: firebase},
    { title: 'Hyper', icon: hyper},
    { title: 'Postman', icon: postman},
]  

export const navigationLinks = [
    { title: 'Home', link: '/#', },
    { title: 'About', link: '/#about', },
    { title: 'Projects', link: '/#projects', },
    { title: 'Contact', link: '/#contact', },
]

export const socialLinks = [
    {name: 'GH', link: 'https://github.com/oxcode-dev'},
    {name: 'LN', link: 'https://www.linkedin.com/in/oxcode001'},
    {name: 'X', link: 'https://x.com/oxcode__'},
    {name: 'IN', link: 'https://www.instagram.com/oxcode__/'},
]

export const projects = [
    {
        title: "JobQuest",
        description:
            "Web-based platform that allows users to view, save, and apply jobs from various recruiters, providing a convenient and efficient ways for job application.",
        tags: [ 'VueJs', 'Pinia', 'NuxtJS', 'Firebase', 'Tailwind', 'Vercel', 'Git'],
        image: '/projects/jobquest.png',
        source_code_link: "https://github.com/oxcode-dev/jobquest",
        site_link: "https://app-jobquest.vercel.app/",
    },
    {
        title: "Barfresh",
        description:
            "The project is an e-commerce web application for skincare products, where users can shop variety of skincare products.",
        tags: ['NextJs', 'CSS', 'ReactJS', 'Tailwind', 'Firebase', 'Redux', 'Vercel', 'Git'],
        image: '/projects/barfresh.png',
        source_code_link: "https://github.com/oxcode-dev/barfresh-ecommerce",
        site_link: "https://barfresh.vercel.app/"
    },
    {
        title: "Tobi DaSilva's Portfolio",
        description:
            "This project is a portfolio for Digital Product Designer, based in Lagos, Nigeria, currently crafting digital experiences at Tech1M",
        tags: ['CSS', 'ReactJS', 'Tailwind', 'Vercel', 'Git'],
        image: '/projects/tobi-dasilva.png',
        source_code_link: null, //"https://github.com/oxcode-dev/parizzo",
        site_link: "https://tobidasilva.com"
    },
    {
        title: "Parizzo Carpool",
        description:
            "Parizzo carpool is beyond saving on transportation cost or making extra cash carpooling while communting to and from work daily, It’s about strengthening the human bond through pleasureable rides, networking with like minds, positive contribution to the environment, and promotion of good deeds.",
        tags: ['CSS', 'ReactJS', 'Tailwind', 'Netlify', 'Git'],
        image: '/projects/parizzo.png',
        source_code_link: null, //"https://github.com/oxcode-dev/tobiportfolio",
        site_link: "https://parizzo-test.netlify.app/"
    },
    {
        title: "JobQuest Admin",
        description:
            "JobQuest Content Management System is a project where the contents of the JobQuest Job Board are being manipulated.",
        tags: ['CSS', 'VueJS', 'Tailwind', 'Netlify', 'Git', 'Firebase', 'Pinia'],
        image: '/projects/jobquest-admin.png',
        source_code_link: "https://github.com/oxcode-dev/job-quest-admin",
        site_link: "https://jobquest-admin.netlify.app/"
    },
    {
        title: "QuickRemit",
        description:
            "QuickRemit was founded in 2018 with a strong social purpose to make transfers faster, cheaper and easier for people who support their loved ones back home",
        tags: ['CSS', 'ReactJS', 'Tailwind', 'Netlify', 'Git'],
        image: '/projects/quickremit.png',
        source_code_link: "https://github.com/oxcode-dev/quickremit",
        site_link: "https://quickremit.netlify.app/"
    },
];

