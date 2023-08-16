import {
  bootstrap_48,
  css_48,
  django_50,
  docker_48,
  filezilla_48,
  github_48,
  heroku_48,
  html_48,
  java_48,
  javascript_48,
  kotlin_48,
  nodejs_48,
  postman_48,
  putty_48,
  python_48,
  react_48,
  spring_boot_48,
  tailwind_48,
  netlify_48,
  css,
  django,
  docker,
  filezilla,
  firebase,
  heroku,
  html,
  java,
  javascript,
  kotlin,
  node,
  postman,
  putty,
  python,
  react,
  spring_boot,
  tailwind,
  capybara,
  facebook,
  linkedin,
  instagram,
  github,
  capybara_thuglife,
  youtube,
  youtube_white,
  bootstrap,
  GuideTogo,
  celery,
  redis,
  netlify,
  thammasart,
  contact_app,
  kbtg,
  mg_solution,
  aws,
  smart_traffic,
  portfolio,
  chat_group,
} from "../assets";

const icons = [
  {
    name: "linkedin",
    link: "https://www.linkedin.com",
    image: linkedin,
  },
  {
    name: "instagram",
    link: "https://www.instagram.com",
    image: instagram,
  },
  {
    name: "github",
    link: "https://www.github.com",
    image: github,
  },
  {
    name: "facebook",
    link: "https://www.facebook.com",
    image: facebook,
  },
];

const projects = [
  {
    name: "GuideToGo",
    description:
      "This web application is tailored for both customers seeking tours and guides looking to create engaging experiences. The platform facilitates tour searches and incorporates a blog section that serves as a valuable resource for users and guides alike.",
    tags: [
      {
        name: "django",
        image: django,
      },
      {
        name: "heroku",
        image: heroku,
      },
      {
        name: "html",
        image: html,
      },
      {
        name: "css",
        image: css,
      },
      {
        name: "bootstrap",
        image: bootstrap,
      },
    ],
    image: GuideTogo,
    source_code_link: "https://github.com/6310682775/guidetogo",
  },
  {
    name: "Contact App",
    description:
      "Develop an Android app for handling contacts. It lets you add, modify, and remove contacts. Plus, you can easily switch between dark mode and light mode themes.",
    tags: [
      {
        name: "kotlin",
        image: kotlin,
      },
      {
        name: "firebase",
        image: firebase,
      },
    ],
    image: contact_app,
    source_code_link: "https://github.com/6310682775/cn333as5",
  },
  {
    name: "Smart traffic",
    description:
      "The web app integrates Deep Learning to count and classify cars at intersections for improved traffic management. It employs Celery with Redis for task handling and produces Video Result files in CSV and RAW DATA formats.",
    tags: [
      {
        name: "django",
        image: django,
      },
      {
        name: "html",
        image: html,
      },
      {
        name: "css",
        image: css,
      },
      {
        name: "bootstrap",
        image: bootstrap,
      },
      {
        name: "celery",
        image: celery,
      },
      {
        name: "redis",
        image: redis,
      },
    ],
    image: smart_traffic,
    source_code_link: "https://github.com/6310682775/PROJECTPIV2",
  },
  {
    name: "Portfolio",
    description:
      "A responsive website designed to showcase a portfolio, developed using react-libraries and deployed using own domain name.",
    tags: [
      {
        name: "react",
        image: react,
      },
      {
        name: "tailwind",
        image: tailwind,
      },
      {
        name: "netlify",
        image: netlify,
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/tridtay/portfolio-trid-tay",
  },
  {
    name: "Chat Group",
    description:
      "This is a chat application in Java with a GUI built using Swing. It employs WebSockets for real-time communication and utilizes multithreading to manage concurrent interactions.",
    tags: [
      {
        name: "java",
        image: java,
      },
    ],
    image: chat_group,
    source_code_link: "https://github.com/",
  },
];

const experiences = [
  {
    title: "Computer Engineering",
    company_name: "THAMMASART",
    icon: thammasart,
    iconBg: "#fcd444",
    iconMainColor: "#fcd444",
    date: "August 2020 - Present",
    company_link: "https://ece.engr.tu.ac.th/",
    points: [
      "Started studying at thammasart university, Faculty of Computer Engineering",
    ],
  },
  {
    title: "Java Software Engineering",
    company_name: "KBTG Tech KAMPUS ClassNest",
    icon: kbtg,
    iconBg: "#040404",
    iconMainColor: "#63c9c2",
    date: "February 2022 - March 2022",
    company_link: "https://kbtgclassnest.skooldio.com/",
    points: [
      "Completing this bootcamp successfully entailed fulfilling the following criteria: accomplishing two coding assessments utilizing Spring Boot and microservice concepts tackling two multiple-choice assessments grounded in weekly on-demand video content and culminating in an open-ended exam. This final exam encompassed a scenario presented b",
      "In my opinion, it's too little time for studying the content and practical after the course. What I got is that it will be in terms of various concepts of use. but still unable to put into practice",
    ],
  },
  {
    title: "Web Developer",
    company_name: "MG SOLUTION",
    icon: mg_solution,
    iconBg: "white",
    iconMainColor: "#456ba2",
    date: "June 2023 - July 2023",
    company_link: "https://www.mgsolution.co.th/",
    points: [
      "Is a web company for issuing documents in the form of pdf, excel and word to the government. The website that I have participated in the development is the Elderly Fund website. The front-end uses React and the back-end uses Nodejs, which integrates with JSreport.",
      "Developing features to design forms in formats such as PDF, Excel, and Word correctly according to requirements involves the entire process from the front-end, which uses React, to the back-end, which utilizes Node.js.",
    ],
  },
  {
    title: "AWS re/Start",
    company_name: "AWS",
    icon: aws,
    iconBg: "white",
    iconMainColor: "#fc9c04",
    date: "July 2023 - Present",
    company_link:
      "https://themasteracademy.co/courses/aws-re-start-2nd-batch-group-2/",
    points: [
      "AWS re/Start is a long-term learning program. It is provided in collaboration between The Master Academy and AWS.",
      "Earn the AWS official digital badge (certificate of completion) upon completion of the program.",
      "Take the AWS Certified Cloud Practitioner certification exam for free (one time only) for those who complete all courses.",
    ],
  },
];

const skills = [
  {
    name: "Programming Language",
    description:
      "Web-application platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "java",
        image: java_48,
      },
      {
        name: "python",
        image: python_48,
      },
      {
        name: "javascript",
        image: javascript_48,
      },
      {
        name: "kotlin",
        image: kotlin_48,
      },
      {
        name: "html",
        image: html_48,
      },
      {
        name: "css",
        image: css_48,
      },
    ],
  },
  {
    name: "Framework",
    description:
      "Web-application platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "django",
        image: django_50,
      },
      {
        name: "node",
        image: nodejs_48,
      },
      {
        name: "react",
        image: react_48,
      },
      {
        name: "spring_boot",
        image: spring_boot_48,
      },
      {
        name: "bootstrap",
        image: bootstrap_48,
      },
      {
        name: "tailwind",
        image: tailwind_48,
      },
    ],
  },
  {
    name: "Tool",
    description:
      "Web-application platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "docker",
        image: docker_48,
      },
      {
        name: "github",
        image: github_48,
      },
      {
        name: "postman",
        image: postman_48,
      },
      {
        name: "filezilla",
        image: filezilla_48,
      },
      {
        name: "putty",
        image: putty_48,
      },
      {
        name: "heroku",
        image: heroku_48,
      },
      {
        name: "netlify",
        image: netlify_48,
      },
    ],
  },
];

const icons_skill = [
  {
    name: "docker",
    image: docker,
  },
  {
    name: "github",
    image: github,
  },
  {
    name: "postman",
    image: postman,
  },
  {
    name: "filezilla",
    image: filezilla,
  },
  {
    name: "putty",
    image: putty,
  },
  {
    name: "heroku",
    image: heroku,
  },
  {
    name: "netlify",
    image: netlify,
  },
];

export { icons, projects, experiences, skills, icons_skill };
