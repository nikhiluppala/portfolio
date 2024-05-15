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
    mysql,
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
      title: "Software Development Engineer - Intern",
      icon: Ceridian,
    },
    {
      title: "Software Engineer",
      icon: twin,
    },
    {
      title: "Software Engineer",
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
      icon: mysql,
    },
  ];
  
  const experiences = [
    {
      title: "Software Deveopment Engineer - Intern",
      company_name: "Ceridian",
      icon: Ceridian,
      iconBg: "#383E56",
      date: "January 2023 - August 2023",
      points: [
        "Designed and maintained automated test scripts using Cypress, enhancing test coverage by 40%.",
        "Improved the performance of applicaOon from 7% to 80% on Lighthouse by applying lazy loading and fixed scalability problems by using analyOcal tools and practiced agile methodologies such as Scrum and kanban.",
        "Identified and documented software defects using JIRA X-ray, facilitating their resolution, and ensuring quality.",
        "Implemented data redshifting practices using AWS services to anonymize sensitive data for software testing purposes, ensuring data privacy and security in non-producHon environments.",
        "Leveraged Apache Spark to preprocess and analyze vast datasets, boosHng tesHng data quality and reliability by 30% through efficient data processing and insights extracHon.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Twin Health",
      icon: twin,
      iconBg: "#E6DEDD",
      date: "May 2021 - December 2021",
      points: [
        "Implemented a fully functioning framework that ran over 1000’s of regression tests, identifying major and minor defects within large data volumes.",
        "Collaborate with cross-functional teams to design and implement comprehensive test plans and strategies for web and mobile applications.",
        "Spearheaded the integration of performance testing within the framework, resulting in a 20% reduction in mean response time and a 35% increase in throughput. This facilitated the early identification of scalability and efficiency issues, ensuring optimal API performance under various load conditions.",
        "Leveraged Postman to automate over 100 collections, each comprising a minimum of 5 APIs, streamlining testing processes and enhancing efficiency in API testing.",
        "Spearheaded comprehensive microservices testing strategy, ensuring robustness, scalability, and reliability of distributed systems through meticulous API testing, and end-to-end testing methodologies."
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Globallogic India",
      icon: Globallogic,
      iconBg: "#383E56",
      date: "August 2020 - May 2021",
      points: [
        "Utilized the Selenium/Web-Driver with Cucumber framework with Java to create 1000+ regression test cases along with Integration and functional testing uncovering deeply nested bugs increasing efficiency by 60%.",
        "Assisted the manual team in creating test plans, scenarios, and cases using TestRail, enhancing testing efficiency and documentation accuracy.",
        "Implemented a hybrid framework combining Cucumber and TestNG, resulting in a 60% reduction in regression cycle and faster, higher-quality application implementations.",
        "Developed an API automation framework integrated with the UI automation suite, utilizing JSON for payload and Cucumber as the framework. Achieved a 60% reduction in UI test case execution time.",
        "Orchestrated the implementation of a streamlined CI/CD pipeline leveraging Jenkins and Groovy, resulting 40% increase in automation coverage through automated script execution post-deployment.",
      ],
    },
    {
      title: "Program Analyst",
      company_name: "Cognizant",
      icon: CTSH,
      iconBg: "#E6DEDD",
      date: "July 2018 - April 2020",
      points: [
        "Achieved a significant reduction of 90% in time consumption for manual order placement by leveraging SOMS, thereby enhancing operational efficiency, and minimizing downtime impact.",
        "Led the design phase of the Robot Framework, defining architecture, components, and specifications in collaboration with stakeholders, ensuring scalability, compatibility, and adherence to project requirements.",
        "Supported and guided the manual team at Arcadia to adopt Cucumber automation over WebdriverIO, achieving 30% reduction in automation execution time.",
        "Automated over 100 user stories within 3 months using the CITS automation tool, including database automation. Developed custom Java jar files and integrated them into the CITS tool, resulting in a 30% reduction in script development.",
        "Implemented cross-browser automation testing and database automation at Adorama to ensure consistent application functionality across various web browsers, resulting in a 30% increase in efficiency."
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
      name: "Crypto Tracker",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "SCSS",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://crypto-beryl-seven.vercel.app/bitcoin",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };