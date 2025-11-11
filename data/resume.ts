export const personalInfo = {
  name: "Nathan Bissell",
  title: "Full Stack Web Developer",
  location: "Connecticut",
  email: "nathantbissell@gmail.com",
  phone: "401-556-2161",
  summary:
    "Five years as a full stack web developer with experience in C#, ASP.NET Core, Ruby on Rails, JavaScript, React, and TypeScript. Currently part of the Applications Team in higher education, partnering with faculty, staff, and students to deliver reliable digital experiences.",
  linkedin: "https://www.linkedin.com/in/nathan-bissell/",
  github: "https://github.com/nathantbissell",
};

export const skills = {
  languages: ["TypeScript", "JavaScript", "C#", "Ruby", "SQL"],
  frontend: ["React", "Next.js", "Redux", "Tailwind CSS", "HTML/CSS"],
  backend: ["Node.js", "ASP.NET Core", "Ruby on Rails", "Express.js", "Entity Framework"],
  databases: ["SQL Server", "MongoDB", "PostgreSQL", "DynamoDB"],
  cloud: ["AWS (Lambda, S3, DynamoDB)", "Azure DevOps"],
  tools: ["Git", "Docker", "Postman", "Jira", "HubSpot"],
  apis: ["OpenAI", "Zoom", "Shopify", "QuickBooks", "Stripe", "AudienceView"],
};

export const experience = [
  {
    company: "College of the Holy Cross",
    role: "Full Stack Web Developer",
    period: "May 2023 - Present",
    location: "Worcester, MA",
    description:
      "Lead AI automations and data integration projects for Information Technology Services, delivering solutions that serve the broader campus community on schedule.",
    achievements: [
      "AI Contract Review Service: Built a customer-facing portal in Ruby on Rails with OpenAI integration for automated contract review with customizable LLM prompts and validation criteria.",
      "Saderbot AI Assistant: Designed and deployed a ChatGPT-powered Zoom chatbot using Node.js and AWS to automate campus-wide information retrieval.",
      "UKG Attendance Bot: Built an automated daily attendance system using Node.js, AWS Lambda/DynamoDB, and Zoom Chat APIs, eliminating manual reporting for 50+ employees.",
      "Campus Events Syndication: Designed an event aggregation API platform (Ruby on Rails, SolidQueue, ActiveRecord) powering both intranet and public event endpoints.",
      "Atrium Meal Dashboard: Developed a real-time meal swipe dashboard in React/TypeScript with live API data integration.",
    ],
  },
  {
    company: "Connex eCommerce",
    role: "Software Engineer II",
    period: "March 2020 - May 2023",
    location: "Remote",
    description:
      "Worked across a C#, ASP.NET Core, and Entity Framework application supporting hundreds of merchants, with a focus on reliability, integrations, and customer success.",
    achievements: [
      "Reduced total support tickets by 21% and increased gross sales volume by 45% in one year.",
      "Led an eight-month project to consolidate multiple ASP.NET MVC 5 codebases into a single ASP.NET Core application.",
      "Built an AI-based reporting tool (connexreporting.com) with five major eCommerce integrations (Shopify, Amazon, WooCommerce, ShipStation, Stripe).",
      "Served as the primary escalation contact for debugging eCommerce API issues and QuickBooks QBXML mapping.",
    ],
  },
];

export const projects = [
  {
    title: "AI Contract Review Service",
    description:
      "Customer-facing portal for automated contract review using OpenAI with customizable validation criteria.",
    technologies: ["Ruby on Rails", "OpenAI API", "PostgreSQL", "JavaScript"],
    highlights: ["Acted as a first point of contact for new service contracts proposed to The College", "Fully customizable settings to control number of reviews, custom LLM personality prompts, and failure safeguards.", "Immediately diagnosed issues with any contract requirements and ensured basic compliance standards are met", "Automated emails to provide transparency and ensure stakeholders are notified when contracts passed validation"],
  },
  {
    title: "Saderbot AI Assistant",
    description:
      "A Zoom chatbot fully integrated with OpenAI's Assistant API.",
    technologies: ["Node.js", "AWS Lambda", "OpenAI API", "Zoom API"],
    highlights: ["Promoted adoption of Zoom Chat, as many team members were more accustomed to Slack", "Automatic context resetting after one hour to ensure context limits were not reached", "Took the place of a primitive Slack bot previously implemented by ITS department"],
  },
  {
    title: "UKG Attendance Bot",
    description:
      "Automated attendance reports to the entire ITS department using UKG and Zoom Chat APIs.",
    technologies: ["Node.js", "AWS Lambda", "DynamoDB", "Zoom Chat API"],
    highlights: ["Allowed better transparency into who was available during work day", "Ensured meetings are scheduled with available participants", "Allowed ad-hoc reports on public and private channels"],
  },
  {
    title: "Campus Events Syndication Platform",
    description:
      "Event aggregation API powering intranet and public endpoints with daily data sync.",
    technologies: ["Ruby on Rails", "SolidQueue", "ActiveRecord", "RESTful APIs"],
    highlights: ["Promoted adoption of newly implemented campus Intranet system", "Allowed for events to be staged directly on holycross.edu/events as a public facing API", "Fully automated daily synchronization of events from multiple campus departments into a single source of truth", "Full admin views with a searchable Scheduled Events list, Syndication Rules, and Destinations."],
  },
    {
    title: "Atrium Meal Dashboard",
    description:
      "Real-time meal swipe dashboard with live API data and time-based reporting.",
    technologies: ["React", "TypeScript", "REST API", "Real-time Data"],
    highlights: ["Currently displayed in the back of house kitchen area for all dining staff", "Provides excellent data visualization and insight to the amount of meal swipes being used on a daily basis"],
  },
  {
    title: "Connex Reporting Tool",
    description:
      "A reporting platform with five major eCommerce platform integrations.",
    technologies: ["ASP.NET Core", "React", "TypeScript", "Redux", "Entity Framework"],
    highlights: ["Multi-API Integration (Stripe, ShipStation, WooCommerce, Shopify, Amazon)", "Integrated directly with an existing QuickBooks Online connection to inject reporting data"],
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Science",
    school: "Rhode Island College",
    year: "2017",
    awards: ["Most Active Freshman - Student Community Government Awards 2012"],
  },
  {
    degree: "Web Developer Immersive Coding Boot Camp",
    school: "General Assembly",
    year: "2019",
    awards: [
      "Completed 500-hour immersive curriculum with a capstone full-stack project using React and Node.js",
    ],
  },
];
