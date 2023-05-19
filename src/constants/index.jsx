import {facebook, frontend, vercel} from '../assets'

export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "discover",
      title: "Discover",
    },
    {
      id: "post a job",
      title: "Post a Job",
    },
    {
      id: "contact us",
      title: "Contact Us",
    },
  ];

  export const featureJobs = [
    {
        id: "Job-1",
        icon: frontend,
        title: "Front-End Developer",
        company: "Figma",
        content: "We are looking for an experienced front-end developer to join our team.",
        tools: "Rust",
        salary: "$70,000 - $100,000"
    },
    {
        id: "Job-2",
        icon: facebook,
        title: "Data Scientist",
        company: "Facebook",
        content: "We are seeking a data scientist to join our team.",
        tools: "Python",
        salary: "$100,000 - $130,000"
    },
    {
        id: "Job-3",
        icon:  vercel,
        title: "Technical Writter",
        company: "Vercel",
        content: "We are seeking a data scientist to join our team.",
        tools: "Documentation",
        salary: "$60,000 - $90,000"
    }
  ]