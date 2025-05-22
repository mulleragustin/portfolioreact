interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "Bootstrap",
      "Bulma",
      "UI/UX Principles",
      "Figma",
      "WordPress",
    ]
  },
  {
    category: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "Django",
      "Python",
      "RESTful APIs",
      "Database Design",
      "Authentication",
      "Server Management"
    ]
  },
  {
    category: "Google Technologies",
    skills: [
      "Apps Script",
      "Google Workspace",
      "Google Cloud",
      "Google Sheets API",
      "Google Docs API",
      "Google Drive API",
    ]
  },
  {
    category: "Database Systems",
    skills: [
      "SQL",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Firebase",
    ]
  },
  {
    category: "Development Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Docker",
      "npm/yarn",
      "Webpack"
    ]
  },
  {
    category: "Other Skills",
    skills: [
      "Problem Solving",
      "Agile/Scrum",
      "Team Collaboration"
    ]
  }
];