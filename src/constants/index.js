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
            problem: "GolfCave, an indoor golfing simulator experience, required a website integrating location-specific content, interactive maps, and other JS solutions to enhance the user experience and drive bookings.",
            solution: "Tasked with devising a robust solution within a tight timeline, I leveraged my expertise in Webflow to dynamically update data based on the user's selected location. I implemented a solution by creating multiple location objects from our CMS, organizing them into an array. This approach enables real-time updates of location-specific content for each location on the site. The result is a seamless experience that allows users to effortlessly book time at their nearest GolfCave and enjoy their simulator, improving overall accessibility and user satisfaction.",
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
            problem: "As the main developer for the Ferraz Creative team, I was tasked with building the agency's website. The Ferraz Creative website needed to streamline the client inquiry process, with a specific focus on the client questionnaire. The goal was to efficiently route all questionnaire data to ClickUp upon submission, creating an organized workflow for our team.",
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