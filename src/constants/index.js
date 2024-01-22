import {
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    Ceridian,
    CTSH,
    twin,
    Globallogic,
    tripguide,
    threejs,
    selenium,
    cucumber,
    mySql,
    contactmanager,
    movieland,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Developer - Intern",
      icon: Ceridian,
    },
    {
      title: "Senior Automation Tester",
      icon: twin,
    },
    {
      title: "Junior Automation Tester",
      icon: Globallogic,
    },
    {
      title: "Program Analyst",
      icon: CTSH,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "selenium",
      icon: selenium,
    },
    {
      name: "cucumber",
      icon: cucumber,
    },
    {
      name: "mySql",
      icon: mySql,
    },
  ];
  
  const experiences = [
    {
      title: "Software Deveoper - Intern",
      company_name: "Ceridian",
      icon: Ceridian,
      iconBg: "#383E56",
      date: "January 2023 - August 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Improved the performance of application from 7% to 80% on Lighthouse by applying lazy loading and fixed scalability problems by using analytical tools and practiced agile methodologies such as Scrum and kanban.",
        "Conducted in-depth analysis and testing of existing software systems to identify and address performance bottlenecks, leading to a 15% improvement in overall system efficiency",
        "Led the improvement of React’s progressive web app (PWA) performance by adding offline capability and implementing caching techniques for service workers",
      ],
    },
    {
      title: "Automation Engineer",
      company_name: "Twin Health",
      icon: twin,
      iconBg: "#E6DEDD",
      date: "May 2021 - December 2021",
      points: [
        "Led the development of a Selenium Automation Framework using Cucumber for scalability, process definition, and reusability.",
        "Implemented a fully functioning framework that ran over 100’s of regression tests, identifying major and minor defects within large data volumes.",
        "Conducted thorough manual and automation testing of APIs for functionality, performance, and compatibility.",
        "Developed and executed comprehensive test plans, test cases, and test scripts to ensure accurate and efficient API testing coverage.",
        "Contributed to technical documentation and shared best practices for automation test scripts.",
        "Enhanced to knowledge growth of the Automation test scripts through documenting and sharing best practices.",
      ],
    },
    {
      title: "Junior Automation Tester",
      company_name: "Globallogic India",
      icon: Globallogic,
      iconBg: "#383E56",
      date: "August 2020 - May 2021",
      points: [
        "Utilized the Selenium/Web-Driver framework with Java to create 400+ regression test cases along with Integration and functional testing uncovering deeply nested bugs increasing efficiency by 60%.",
        "Implemented a hybrid framework combining Cucumber and TestNG, resulting in a 60% reduction in regression cycle and faster, higher-quality application implementations.",
        "Designed and Developed automation scripts to automate API's and reduce 30% execution of UI test cases.",
        "Configured and integrated test suits with continuous integration (CI) environment.",
        "Increased coverage of unit test cases on an existing project by 23%.",
      ],
    },
    {
      title: "Program Analyst",
      company_name: "Cognizant",
      icon: CTSH,
      iconBg: "#E6DEDD",
      date: "July 2018 - April 2020",
      points: [
        "Spearheaded conversion of more than 200 manual test cases into automated tests, resulting in a 70% reduction in manual work.",
        "Conducted database testing to validate data integrity, consistency, and correctness, utilizing SQL and relational databases.",
        "Performed regression, sanity, and system integration testing in e-commerce applications, leveraging JIRA and other tracking tools.",
        "Developed the SOMS tool to facilitate continuous manual testing even during server downtimes, generating hundreds of manual orders.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Nikhil has been a great team player. His knowledge sincerety and hardwork has made him excel in the work he does. He has excellent expertise in Automation nad functional testing.",
      name: "Veera Saxena",
      designation: "QA Manager Engineering",
      company: "Twin Health",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "While at Twin Health Nikhil impressed as a highly competent QA Engineer. He was able to quickly come up to speed on new features while providing consistently comprehensive test coverage. I would definitely recommend him to any organization needing a highly focused, intelligent and effective Engineer.",
      name: "Ryan Smith",
      designation: "Senior Software Engineering Manager",
      company: "Twin Health",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Nikhil is very hardworking and extremely talented individual. He is good at automation testing and could work on any kind of automation framework.",
      name: "Anand Krishna",
      designation: "Technical Architect",
      company: "TCS",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Movie Land",
      description:
        "Single web-page implemented using Node and React Js which showcase movie cards based on the search input.",
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
      image: movieland,
      source_code_link: "https://movielandapplication.netlify.app/",
    },
    {
      name: "Contact Manager",
      description:
        "Web application that helps users to save contact details",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
      ],
      image: contactmanager,
      source_code_link: "https://contactsaverapplication.netlify.app/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };