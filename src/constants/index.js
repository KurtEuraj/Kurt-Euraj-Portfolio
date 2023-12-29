import {github_logo, LinkedIn, GC_thumbnail, Webflow, HTMLIcon, cssIcon, jsIcon, FC_thumbnail, NG_thumbnail, reactIcon, tailwind, node} from "../assets"

export const navLinks = [
    {
        id: "projects",
        title: "Projects"
    },
    {
        id: "about-me",
        title: "About Me"
    },
];

export const navExternalLinks = [
    {
        id: "github",
        title: "Github",
        img: github_logo,
        link: "https://github.com/KurtEuraj"
    },
    {
        id: "LinkedIn",
        title: "linkedIn",
        img: LinkedIn,
        link: "https://www.linkedin.com/in/kurt-euraj-45253826b/"
    },
];

export const projects = [
    {
        name: "GolfCave",
        img: GC_thumbnail,
        link: "https://www.golfcave.com/",
        // description: "GolfCave is a website that utilizes location specific content, interactive maps, and other JS solutions to encourage users to book time at their nearest location. I developed this project in Webflow. The Biggest challenge was getting the data (location coordinates, booking links, phone, etc.) across the site to update based on the location the user selects. To solve this, I created multiple objects that pull data from each Webflow CMS Location and put them in an array. These objects help populate the data across the site and whenever the location is changed, we get the data in that specific location's object. Due to timeline constraints, the project was completed in 2.5 weeks.",
        description: {
            problem: "GolfCave, an indoor golf facility, were starting their franchising journey to expand into multiple locations in the US. Their website was restrictive and didn’t support their goals to branch out.",
            solution: "Facing a tight timeline, I employed JavaScript to dynamically update data based on the user's location. I created an array of location objects derived from our CMS, allowing for efficient organization and real-time updates of location-specific content. Additionally, I integrated Mapbox for interactive maps, contributing to a seamless user experience.",
        },
        tech: [
            {name: "Webflow", img: Webflow},
            {name: "HTML", img: HTMLIcon},
            {name: "CSS", img: cssIcon},
            {name: "JavaScript", img: jsIcon},
        ]
    },
    {
        name: "Ferraz Creative",
        img: FC_thumbnail,
        link: "https://ferrazcreative.com/",
        // description: "The Ferraz Creative website was built for the agency I currently work at. It's very design focused and showcases the capabilities and aesthetic of our team. One of the most important features of the site was the client questionnaire. The main focus was to have all of the questionnaire data automatically go to ClickUp once submitted. Utilizing Make (an automation tool), I was able to designate where inquires go and how they're handled. As well as catch errors and duplicate inquires. This was useful for our existing clients as well. I hadn't used Make before so I was forced to adapt and understand the workflow for this project.",
        description: {
            problem: "Ferraz Creative sought a website redesign to overcome limitations in their current solution. The focus was on enhancing the user experience, considering the absence of a structured client inquiry process.",
            solution: "To address this, we utilized Make, an automation tool. This allowed me to create a workflow directing client questionnaire data to ClickUp. The workflow was configured to generate folders for new clients and store inquiries for existing clients, while also preventing errors and duplicate submissions. This implementation streamlined our processes, aiding the team in organizing tasks and managing new clients.",
        },
        tech: [
            {name: "Webflow", img: Webflow},
            {name: "HTML", img: HTMLIcon},
            {name: "CSS", img: cssIcon},
            {name: "JavaScript", img: jsIcon},
        ]
    },
]

export const technologies = [
    {
        name: "HTML",
        percent: "80%",
        level: "Professional"
    },
    {
        name: "CSS",
        percent: "80%",
        level: "Professional"
    },
    {
        name: "JavaScript",
        percent: "80%",
        level: "Professional"
    },
    {
        name: "React",
        percent: "70%",
        level: "Advanced"
    }
]

export const skills = [
    {name: "Bootstrap"},
    {name: "Responsive Desgin"},
    {name: "Node.js"},
    {name: "Express"},
    {name: "Webflow"},
    {name: "Wordpress"},
    {name: "Git"}
]

export const sliderLogos = [
    {
        name: "HTML",
        img: HTMLIcon
    },
    {
        name: "CSS",
        img: cssIcon
    },
    {
        name: "JS",
        img: jsIcon
    },
    {
        name: "Webflow",
        img: Webflow
    },
    {
        name: "Github",
        img: github_logo
    },
    {
        name: "React",
        img: reactIcon
    },
    {
        name: "Tailwind",
        img: tailwind
    },
    {
        name: "NodeJs",
        img: node
    },
]

export const footerInfo = {
    email: "kurteurajdev@gmail.com",
}