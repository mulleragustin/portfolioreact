interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

export const projectsData: Project[] = [
  {
    title: "Appointment Management System",
    description: "A comprehensive system built with Google Apps Script to manage appointments and shifts with automated notifications.",
    image: "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Google Apps Script", "JavaScript", "Google Sheets", "HTML", "CSS"],
    githubLink: "https://github.com"
  },
  {
    title: "Certificate Generator",
    description: "An automated system that generates official PDF certificates upon form submission with verification features.",
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Google Apps Script", "PDF Generation", "JavaScript", "Google Forms"],
    githubLink: "https://github.com"
  },
  {
    title: "Dynamic Inventory System",
    description: "An inventory management system that automatically updates prices based on real-time 'dolar blue' exchange rates.",
    image: "https://images.pexels.com/photos/4386327/pexels-photo-4386327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Google Apps Script", "JavaScript", "APIs", "Google Sheets", "Automation"],
    githubLink: "https://github.com"
  },
  {
    title: "Travel Expenses Calculator",
    description: "A Django-based application developed for the Ministry of Social Development to calculate travel expenses.",
    image: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Django", "Python", "PostgreSQL", "Bootstrap", "JavaScript"],
    githubLink: "https://github.com"
  },
  {
    title: "Subscription Management Platform",
    description: "A full-featured membership system for Goodfla Clothing with discount benefits and prize draw functionality.",
    image: "https://images.pexels.com/photos/2292953/pexels-photo-2292953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Authentication"],
    liveLink: "https://example.com",
    githubLink: "https://github.com"
  },
  {
    title: "Admin Dashboard",
    description: "A comprehensive admin panel for managing users, subscriptions, and monitoring business metrics.",
    image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "REST API"],
    githubLink: "https://github.com"
  }
];