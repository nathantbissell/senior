export const personalInfo = {
  name: "Nathan Bissell",
  title: "Full Stack Web Developer",
  location: "Connecticut, Rhode Island, Greater Boston Area",
  email: "nathantbissell@gmail.com",
  phone: "401-556-2161",
  summary:
    "Six years experience as a Software Engineer in C#, ASP.NET Core, Ruby on Rails, JavaScript / TypeScript, and React. Current member of Travelers Insurance Business Insurance Workstation development team.",
  linkedin: "https://www.linkedin.com/in/nathan-bissell/",
  github: "https://github.com/nathantbissell",
};

export const experience = [
  {
    company: "Travelers Insurance",
    role: "Software Engineer I",
    period: "2026 - Now",
    location: "Hartford, CT",
    description:
      "Software engineering role supporting the Business Insurance Workstation division, with a focus on reliable application delivery, cloud-aware systems, and business insurance workflows.",
    achievements: [
      "Responsible for maintaining and enhancing document generation, pricing documentation, and issuance instruction services.", "Contributing across application development, debugging, performance monitoring, cloud services, and high-availability system operations.",
    ],
  },
  {
    company: "Rhode Island Therapy Center",
    role: "Full Stack Developer",
    period: "2026",
    location: "Independent Project",
    description:
      "Built a Rails 8 platform for therapy practices to manage therapist memberships, room reservations, subscriptions, billing, and operational support.",
    achievements: [
      "Implemented Stripe checkout, subscriptions, hosted billing portal access, webhook processing, invoice reconciliation, booking charges, and refunds.",
      "Designed room booking workflows with subscription eligibility, booking horizons, weekly plan quotas, blackout dates, and PostgreSQL-backed conflict prevention.",
      "Created admin tooling for users, plans, locations, rooms, payments, blackout dates, service requests, and background job monitoring.",
      "Added transactional email notifications and RSpec coverage across models, requests, services, jobs, integrations, and tasks.",
    ],
  },
  {
    company: "College of the Holy Cross",
    role: "Full Stack Web Developer",
    period: "2023 - 2026",
    location: "Worcester, MA",
    description:
      "Lead AI automations and data integration projects for Information Technology Services, delivering solutions that serve the broader campus community.",
    achievements: ["Designed and built several projects as lead developer (see Experience section).", "Worked directly with stakeholders to understand user issues, triage priorities and build basic MVP for user solutions."],
  },
  {
    company: "Connex eCommerce",
    role: "Software Engineer II",
    period: "2020 - 2023",
    location: "Remote",
    description:
      "Worked across a C#, ASP.NET Core, and Entity Framework application supporting thousands of merchants, with a focus on reliability, integrations, and customer success.",
    achievements: [
      "Reduced total support tickets by 21% and increased gross sales volume by 45% in one year.",
      "Led an eight-month project to consolidate multiple ASP.NET MVC 5 codebases into a single ASP.NET Core application.",
      "Built a customizable reporting tool with five major eCommerce integrations (Shopify, Amazon, WooCommerce, ShipStation, Stripe).",
      "Served as the primary escalation contact for debugging eCommerce API issues and QuickBooks QBXML mapping.",
    ],
  },
];

export const projects = [
  {
    title: "Rhode Island Therapy Center",
    description:
      "Rails platform for therapy practices to manage memberships, room reservations, subscription billing, and operational support.",
    technologies: ["Ruby on Rails", "PostgreSQL", "Stripe", "Tailwind", "AWS", "SolidQueue"],
    image_url: "/project-images/therapy-center-logo-gray.png",
    source_url: "https://my.ritherapycenter.org",
    highlights: [
      "Built therapist and admin authentication with Devise, including Google OAuth sign-in option.",
      "Integrated Stripe products, prices, checkout, billing portal, subscriptions, invoices, webhooks, booking charges, and refunds.",
      "Enforced booking integrity with Rails validations, blackout date checks, and overlap detection.",
      "Shipped admin workflows for plan management, users, locations, rooms, payments, blackout dates, service requests, and Mission Control Jobs.",
    ],
  },
  {
    title: "AI Contract Review Service",
    description:
      "Customer-facing portal for automated contract review using OpenAI with customizable validation criteria.",
    technologies: ["Ruby on Rails", "OpenAI API", "PostgreSQL", "JavaScript"],
    image_url: "https://i.imgur.com/q2P7rFg.jpeg",
    source_url: "",
    highlights: ["Fully customizable settings to control number of reviews, custom LLM personality prompts, and failure safeguards.", "Immediately diagnosed issues with any contract requirements and ensured basic compliance standards are met", "Automated emails to provide transparency and ensure stakeholders are notified when contracts passed validation"],
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
    technologies: ["Ruby on Rails", "Oracle", "Okta"],
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
    source_url: "https://hcappsdev.holycross.edu/file-transfer/",
    highlights: ["Refreshed an existing transfer system with modern UI", "allowed for better validation, enhanced features such as requesting files or CC (Carbon Copy) users to have access to files" ],
  },
  {
    title: "AudienceView to Hubspot Integration",
    description:
      "An ingestion service that parsed daily ticket sales data and created missing data in Hubspot CRM to assist with College Marketing Team",
    technologies: ["Node.js", "Hubspot", "AWS Lambda", "S3"],
    image_url: "https://8713277.fs1.hubspotusercontent-na1.net/hubfs/8713277/Imported_Blog_Media/Hubspot%20-%20Logo%20img%201.png",
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
      "Automated daily attendance reports using Node.js, AWS Lambda/DynamoDB, and Zoom Chat APIs, eliminating manual reporting for 50+ employees",
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
    degree: "Bachelors Degree - Computer Science",
    school: "Rhode Island College",
    year: "2017",
    awards: ["Most Active Freshman - Student Community Government Awards 2012", "Street Team Coordinator - WXIN", "Student Community Government - At Large Representative", "Anchor TV Cameraman"],
  },
  {
    degree: "Web Developer Immersive Coding Boot Camp",
    school: "General Assembly",
    year: "2019",
    awards: [
      "Completed a 500-hour curriculum with several full-stack projects using Ruby on Rails, React, and Node.js",
    ],
  },
];
