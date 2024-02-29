import reactImg from '@/public/uploads/skills/reactjs.png'
import nextImg from '@/public/uploads/skills/nextjs.png'
import nodeImg from '@/public/uploads/skills/nodejs.svg'
import mongoImg from '@/public/uploads/skills/mongodb.jpeg'
import mySqlImg from '@/public/uploads/skills/mySql.png'
import reduxImg from '@/public/uploads/skills/redux.jpeg'
import expressImg from '@/public/uploads/skills/expressjs.jpeg'
import gitImg from '@/public/uploads/skills/git.jpeg'
import githubImg from '@/public/uploads/skills/github.jpeg'
import htmlImg from '@/public/uploads/skills/html.jpeg'
import cssImg from '@/public/uploads/skills/css.jpeg'
export const navLinks=[
    {
        href:"/",
        title:"Home"
    },
    {
        href: "/projects",
        title: "Work"
    },
    {
        href: "/about",
        title: "About"
    }
]
export const social_media_accounts=[
   {
        href: "https://linkedin.com/in/ali",
        icon:"LD"
   },
    {
        href: "https://twitter.com/in/ali",
        icon: "TW"
    },
    {
        href: "https://github.com/ali",
        icon: "GH"
    }
]


export const skills=[
    {
        name :"ReactJs",
        icon:reactImg,
        ratio:75
    },
    {
        name: "NodeJs",
        icon: nodeImg,
        ratio: 70
    },
    {
        name: "NextJs",
        icon: nextImg,
        ratio: 70
    },
    {
        name: "HTML5",
        icon: htmlImg,
        ratio: 80
    },
    {
        name: "Css",
        icon: cssImg,
        ratio: 70
    },
    {
        name: "ExpressJs",
        icon: expressImg,
        ratio: 80
    },
    {
        name: "GitHub",
        icon: githubImg,
        ratio: 80
    },
    {
        name: "Git",
        icon: gitImg,
        ratio: 70
    },
    {
        name: "MySQL",
        icon: mySqlImg,
        ratio: 85
    },
    {
        name: "MongoDB",
        icon: mongoImg,
        ratio: 75
    },
    {
        name: "Redux",
        icon: reduxImg,
        ratio: 70
    }

]