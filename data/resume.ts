export const personalInfo = {
  name: "Nathan Bissell",
  title: "Senior Full Stack Software Engineer",
  location: "Connecticut",
  email: "nathantbissell@gmail.com",
  phone: "401-556-2161",
  summary: "Five years as a Full Stack Web Developer with experience in C#, ASP.NET Core, Ruby on Rails, JavaScript, React, and TypeScript. Currently working as part of the Applications Team in higher education, where major stakeholders are faculty, staff, and students of a competitive Liberal Arts College.",
  linkedin: "", // Add your LinkedIn URL
  github: "", // Add your GitHub URL
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
    company: "College of The Holy Cross",
    role: "Full Stack Web Developer",
    period: "May 2023 – Present",
    location: "Worcester, MA",
    description: "Led several AI automations and data integration projects for Information Technology Services and stakeholders within the College community; consistently delivered solutions on expected deadlines.",
    achievements: [
      "AI Contract Review Service: Built a customer-facing portal in Ruby on Rails with OpenAI integration for automated contract review with customizable LLM prompts and validation criteria",
      "Saderbot AI Assistant: Designed and deployed a ChatGPT-powered Zoom chatbot using Node.js and AWS to automate campus-wide information retrieval",
      "UKG Attendance Bot: Built an automated daily attendance system using Node.js, AWS Lambda/DynamoDB, and Zoom Chat APIs, eliminating manual reporting for 50+ employees",
      "Campus Events Syndication: Designed an event aggregation API platform (Ruby on Rails, SolidQueue, ActiveRecord) powering both Intranet and public event endpoints",
      "Atrium Meal Dashboard: Developed a real-time meal swipe dashboard in React/TypeScript with live API data integration",
    ],
  },
  {
    company: "Connex eCommerce",
    role: "Software Engineer II",
    period: "March 2020 – May 2023",
    location: "Remote",
    description: "Full stack developer for connexforquickbooks.com, a C#, ASP.NET Core, Entity Framework based application.",
    achievements: [
      "Reduced total support tickets by 21% and increased gross sales volume by 45% in one year",
      "Led 8-month project to consolidate multiple ASP.NET MVC 5 codebases into a single ASP.NET Core application",
      "Built AI-based reporting tool (connexreporting.com) with 5 major eCommerce integrations (Shopify, Amazon, WooCommerce, ShipStation, Stripe)",
      "Primary escalation contact for debugging eCommerce API issues and QuickBooks QBXML mapping",
    ],
  },
];

export const projects = [
  {
    title: "AI Contract Review Service",
    description: "Customer-facing portal for automated contract review using OpenAI with customizable validation criteria",
    technologies: ["Ruby on Rails", "OpenAI API", "PostgreSQL", "JavaScript"],
    highlights: ["LLM Integration", "Custom Validation Engine", "Enterprise Portal"],
  },
  {
    title: "Saderbot AI Assistant",
    description: "ChatGPT-powered Zoom chatbot for campus-wide automated information retrieval",
    technologies: ["Node.js", "AWS Lambda", "OpenAI API", "Zoom API"],
    highlights: ["Serverless Architecture", "AI Integration", "Real-time Chat"],
  },
  {
    title: "UKG Attendance Bot",
    description: "Automated attendance tracking system eliminating manual reporting for 50+ employees",
    technologies: ["Node.js", "AWS Lambda", "DynamoDB", "Zoom Chat API"],
    highlights: ["Automation", "AWS Services", "API Integration"],
  },
  {
    title: "Campus Events Syndication Platform",
    description: "Event aggregation API powering Intranet and public endpoints with daily data sync",
    technologies: ["Ruby on Rails", "SolidQueue", "ActiveRecord", "RESTful APIs"],
    highlights: ["API Design", "Job Processing", "Data Syndication"],
  },
  {
    title: "Connex AI Reporting Tool",
    description: "AI-based reporting platform with 5 major eCommerce platform integrations",
    technologies: ["ASP.NET Core", "React", "TypeScript", "Redux", "Entity Framework"],
    highlights: ["Multi-API Integration", "Full Stack", "Enterprise SaaS"],
  },
  {
    title: "Atrium Meal Dashboard",
    description: "Real-time meal swipe dashboard with live API data and time-based reporting",
    technologies: ["React", "TypeScript", "REST API", "Real-time Data"],
    highlights: ["Real-time Updates", "Data Visualization", "TypeScript"],
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Science",
    school: "Rhode Island College",
    year: "2017",
    awards: ["Most Active Freshman – Student Community Government Awards 2012"],
  },
  {
    degree: "Web Developer Immersive Coding Boot Camp",
    school: "General Assembly",
    year: "2019",
    description: "500 hours - JavaScript, React, Express.js, Node.js, MongoDB, SQL",
  },
];

