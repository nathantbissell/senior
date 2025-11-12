export const personalInfo = {
  name: "Nathan Bissell",
  title: "Full Stack Web Developer",
  location: "Connecticut",
  email: "nathantbissell@gmail.com",
  phone: "401-556-2161",
  summary:
    "Six years as a full stack web developer with experience in C#, ASP.NET Core, Ruby on Rails, JavaScript, React, and TypeScript. Currently part of the Applications Team in higher education, partnering with faculty, staff, and students to deliver reliable digital experiences.",
  linkedin: "https://www.linkedin.com/in/nathan-bissell/",
  github: "https://github.com/nathantbissell",
};

export const skills = {
  languages: ["TypeScript", "JavaScript", "C#", "Ruby on Rails", "Python"],
  frontend: ["React", "Next.js", "Tailwind CSS", "Mantine"],
  backend: ["Node.js", "Ruby on Rails", "ASP.NET Core", "Entity Framework", "Express.js"],
  databases: ["PostgreSQL", "DynamoDB", "Oracle", "MongoDB"],
  cloud: ["AWS Lambda", "S3", "DynamoDB", "Elastic Container Service", "Azure DevOps"],
  tools: ["Git", "Docker", "Postman" ],
  apis: ["OpenAI", "Zoom", "Shopify", "QuickBooks", "Stripe", "AudienceView", "Hubspot", "Salesforce", ],
};

export const experience = [
  {
    company: "College of the Holy Cross",
    role: "Full Stack Web Developer",
    period: "2023 - Now",
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
    period: "2020 - 2023",
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
    image_url: "https://cdn.iconscout.com/icon/free/png-256/free-loom-icon-svg-download-png-10439220.png",
    source_url: "https://www.loom.com/share/f6f7816341ab44adb140ebe385fdde47",
    highlights: ["Acted as a first point of contact for new service contracts proposed to The College", "Fully customizable settings to control number of reviews, custom LLM personality prompts, and failure safeguards.", "Immediately diagnosed issues with any contract requirements and ensured basic compliance standards are met", "Automated emails to provide transparency and ensure stakeholders are notified when contracts passed validation"],
  },
  {
    title: "Campus Events Syndication Platform",
    description:
      "Event aggregation API powering intranet and public endpoints with daily data sync.",
    technologies: ["Ruby on Rails", "SolidQueue", "Salesforce", "Simpplr", "Internal APIs"],
    image_url: "https://i.imgur.com/QGlZyKv.jpeg",
    source_url: "https://hcapps.holycross.edu/events-system/",
    highlights: ["Promoted adoption of newly implemented campus Intranet system", "Allowed for events to be staged directly on holycross.edu/events as a public facing API", "Fully automated daily synchronization of events from multiple campus departments into a single source of truth", "Full admin views with a searchable Scheduled Events list, Syndication Rules, and Destinations"],
  },
  {
    title: "Grade Distribution Report",
    description:
      "A full stack application which renders an archive of individual instructor and department level reports",
    technologies: ["Ruby on Rails", "Oracle", "Okta" ],
    image_url: "https://i.imgur.com/nQEH45y.jpeg",
    source_url: "https://hcapps.holycross.edu/grades/",
    highlights: ["Allows faculty to always have digital access to their grade distributions for every semester taught at the college", "Views are all downloadable as PDF to allow for safekeeping records" ],
  },
  {
    title: "Secure File Transfer System",
    description:
      "A system built for sending confidential documents to internal and external users",
    technologies: ["Ruby on Rails", "MailChimp API", "Okta"],
    image_url: "https://i.imgur.com/1tLmMUZ.jpeg",
    source_url: "https://hcapps.holycross.edu/file-transfer/",
    highlights: ["Refreshed an existing transfer system with modern UI", "allowed for better validation, enhanced features such as requesting files or CC (Carbon Copy) users to have access to files" ],
  },
  {
    title: "AudienceView to Hubspot Integration",
    description:
      "An ingestion service that parsed daily ticket sales data and created missing data in Hubspot CRM to assist with College Marketing Team",
    technologies: ["JavaScript", "Hubspot", "AWS Lambda", "S3"],
    image_url: "",
    source_url: "",
    highlights: ["Removed need to manually import users, deals, and events from a legacy ticketing system to newly purchased CRM tool", "Helped marketing build better campaigns, target alumni and recurring guests for special promotions, and avoid sending duplicate emails to potential customers"],
  },
  {
    title: "Equipment Lending System",
    description:
      "The system used by student workers in the ITS Helpdesk to process and fulfill equipment lending requests",
    technologies: ["React", "TypeScript", "NodeJs", "MailChimp API" ],
    image_url: "https://i.imgur.com/Z2fIoBh.jpeg",
    source_url: "https://hcapps.holycross.edu/file-transfer/",
    highlights: ["Promoted college digitial initiatives to move away from pen and paper borrowing process", "Fully integrated with Solarwinds assets to ensure availability and document lost or stolen devices", "MailChimp API integration allowing for updating users on status of their requests, when devices are availble to be picked up, and nagging them when device is overdue." ],
  },
    {
    title: "Atrium Meal Dashboard",
    description:
      "Real-time meal swipe dashboard with Atrium API data and time-based reporting.",
    technologies: ["React", "TypeScript", "Atrium" ],
    image_url: "https://i.imgur.com/r0Sujgt.jpeg",
    source_url: "https://hcapps.holycross.edu/hcs/meals/",
    highlights: ["Currently displayed in the back of house kitchen area for all dining staff", "Provides excellent data visualization and insight to the amount of meal swipes being used on a daily basis"],
  },
  {
    title: "Saderbot AI Assistant",
    description:
      "A Zoom chatbot fully integrated with OpenAI's Assistant API.",
    technologies: ["Node.js", "AWS Lambda", "OpenAI API", "Zoom API"],
    image_url: "https://i.imgur.com/PKCpcx5.png",
    source_url: "",
    highlights: ["Promoted adoption of Zoom Chat, as many team members were more accustomed to Slack", "Automatic context resetting after one hour to ensure context limits were not reached", "Took the place of a primitive Slack bot previously implemented by ITS department"],
  },
  {
    title: "UKG Attendance Bot",
    description:
      "Automated attendance reports to the entire ITS department using UKG and Zoom Chat APIs.",
    technologies: ["Node.js", "AWS Lambda", "DynamoDB", "Zoom Chat API"],
    image_url: "https://i.imgur.com/SxXfvtq.jpeg",
    source_url: "",
    highlights: ["Allowed better transparency into who was available during work day", "Ensured meetings are scheduled with available participants", "Allowed ad-hoc reports on public and private channels"],
  },
  {
    title: "Connex Reporting Tool",
    description:
      "A reporting platform with five major eCommerce platform integrations.",
    technologies: ["ASP.NET Core", "React", "TypeScript", "Entity Framework"],
    image_url: "https://i.imgur.com/6igy8v4.jpeg",
    source_url: "https://inventory.connexecommerce.com/dashboard",
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
