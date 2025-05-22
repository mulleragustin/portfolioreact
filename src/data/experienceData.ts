export interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string;
  icon: string;
  achievements?: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    period: "2020 - 2023",
    title: "Apps Script Developer",
    company: "Becas",
    description: "Developed multiple systems using Google Apps Script to automate and enhance business processes.",
    icon: "Code",
    achievements: [
      "Created a comprehensive appointment/shift management system",
      "Developed a form with PDF certificate generation functionality",
      "Data visualization with Power BI"
    ]
  },
  {
    period: "April 2023 - December 2024",
    title: "Full Stack Developer",
    company: "Ministry of Social -  Development",
    description: "Worked in the Information Technology department developing custom solutions for government needs.",
    icon: "BriefcaseBusiness",
    achievements: [
      "Developed a travel expenses calculator using Django",
      "Development of a system oriented towards social aid, deployed on our own server, developed with Django",
      "Implemented a user-friendly interface for administrative staff",
      "Created comprehensive documentation for end-users"
    ]
  },
  {
    period: "October 2024 - Present",
    title: "Freelance Developer",
    company: "ElectroRLF",
    description: "Designed and implemented a subscription-based membership system for a clothing retail business.",
    icon: "Clothing",
    achievements: [
      "Built a complete subscription management system with recurring payments",
      "Implemented exclusive discount features for subscribers",
      "Created a prize draw system for loyalty program members",
      "Developed an admin dashboard for store management",
      "Integrated with Stripe for secure payment processing",	
    ]
  },
  {
    period: "October 2024 - Present",
    title: "Freelance Developer",
    company: "ElectroRLF",
    description: "Designed and implemented a subscription-based membership system for a clothing retail business.",
    icon: "Users",
    achievements: [
      "Built a complete subscription management system with recurring payments",
      "Implemented exclusive discount features for subscribers",
      "Created a prize draw system for loyalty program members",
      "Developed an admin dashboard for store management",
      "Integrated with Stripe for secure payment processing",	
    ]
  }
];