import { Irole } from "../types/user";

export const roles: Irole[] = [
	{
		name: "CEO",
		description: "Leads the company and makes high-level decisions.",
		functions: ["Strategy", "Leadership", "Decision-Making"],
		skills: ["Visionary", "Communication", "Problem Solving"]
	},
	{
		name: "CFO",
		description: "Responsible for managing the financial actions of the company.",
		functions: ["Finance", "Analysis", "Risk Management"],
		skills: ["Analytical", "Detail-Oriented", "Strategic Planning"]
	},
	{
		name: "CTO",
		description: "Oversees the technological needs of the company.",
		functions: ["Technology", "Innovation", "Management"],
		skills: ["Technical Expertise", "Project Management", "Team Leadership"]
	},
	{
		name: "Product Manager",
		description: "Guides product vision and development.",
		functions: ["Product Development", "Market Analysis", "Collaboration"],
		skills: ["User-Centric Design", "Agile Methodology", "Market Research"]
	},
	{
		name: "Marketing Manager",
		description: "Drives marketing strategy and brand management.",
		functions: ["Marketing", "Branding", "Communication"],
		skills: ["Creativity", "Analytical Skills", "Communication"]
	},
	{
		name: "Sales Manager",
		description: "Leads sales strategy and team management.",
		functions: ["Sales", "Customer Relationship", "Negotiation"],
		skills: ["Persuasion", "Communication", "Analytical"]
	},
	{
		name: "UX/UI Designer",
		description: "Designs user experiences and interfaces.",
		functions: ["Design", "User Research", "Prototyping"],
		skills: ["Creativity", "Empathy", "Technical Skills"]
	},
	{
		name: "Data Scientist",
		description: "Analyzes data to drive decision-making.",
		functions: ["Data Analysis", "Statistical Modeling", "Machine Learning"],
		skills: ["Analytical", "Programming", "Problem Solving"]
	},
	{
		name: "DevOps Engineer",
		description: "Facilitates software development and IT operations.",
		functions: ["Infrastructure", "Deployment", "Monitoring"],
		skills: ["Technical Skills", "Collaboration", "Automation"]
	},
	{
		name: "Customer Success Manager",
		description: "Ensures customer satisfaction and retention.",
		functions: ["Customer Engagement", "Problem Solving", "Account Management"],
		skills: ["Communication", "Empathy", "Analytical"]
	},
	{
		name: "HR Manager",
		description: "Manages employee relations and talent acquisition.",
		functions: ["Recruitment", "Employee Engagement", "Compliance"],
		skills: ["Interpersonal", "Organizational", "Negotiation"]
	},
	{
		name: "Operations Manager",
		description: "Oversees day-to-day operations of the company.",
		functions: ["Operations", "Management", "Efficiency"],
		skills: ["Analytical", "Leadership", "Problem Solving"]
	},
	{
		name: "Content Strategist",
		description: "Develops content strategy to engage customers.",
		functions: ["Content Creation", "SEO", "Branding"],
		skills: ["Writing", "Creativity", "Analytical"]
	},
	{
		name: "Business Analyst",
		description: "Identifies business needs and solutions.",
		functions: ["Analysis", "Documentation", "Stakeholder Management"],
		skills: ["Analytical", "Problem Solving", "Communication"]
	},
	{
		name: "Legal Advisor",
		description: "Handles legal matters and compliance.",
		functions: ["Legal Compliance", "Advisory", "Contracts"],
		skills: ["Analytical", "Detail-Oriented", "Negotiation"]
	},
	{
		name: "Technical Writer",
		description: "Creates documentation for products and services.",
		functions: ["Writing", "Research", "Collaboration"],
		skills: ["Writing", "Attention to Detail", "Technical Knowledge"]
	},
	{
		name: "Social Media Manager",
		description: "Manages social media presence and engagement.",
		functions: ["Marketing", "Community Engagement", "Content Creation"],
		skills: ["Creativity", "Analytical Skills", "Communication"]
	},
	{
		name: "Account Manager",
		description: "Maintains client relationships and oversees their needs.",
		functions: ["Client Management", "Sales", "Customer Service"],
		skills: ["Interpersonal", "Problem Solving", "Negotiation"]
	},
	{
		name: "Project Manager",
		description: "Plans and executes projects to achieve specific goals.",
		functions: ["Planning", "Execution", "Monitoring"],
		skills: ["Leadership", "Communication", "Organizational"]
	},
	{
		name: "Supply Chain Manager",
		description: "Manages supply chain processes and logistics.",
		functions: ["Logistics", "Management", "Efficiency"],
		skills: ["Analytical", "Negotiation", "Problem Solving"]
	},
	{
		name: "Graphic Designer",
		description: "Creates visual concepts to communicate ideas.",
		functions: ["Design", "Creativity", "Branding"],
		skills: ["Creativity", "Attention to Detail", "Technical Skills"]
	},
	{
		name: "Network Engineer",
		description: "Designs and maintains networking systems.",
		functions: ["Networking", "Security", "Maintenance"],
		skills: ["Technical Skills", "Problem Solving", "Attention to Detail"]
	},
	{
		name: "Software Engineer",
		description: "Develops and maintains software applications.",
		functions: ["Coding", "Testing", "Debugging"],
		skills: ["Programming", "Problem Solving", "Teamwork"]
	},
	{
		name: "Sales Engineer",
		description: "Supports sales teams by providing technical expertise.",
		functions: ["Sales Support", "Technical Consulting", "Product Knowledge"],
		skills: ["Communication", "Technical Skills", "Persuasion"]
	},
	{
		name: "Quality Assurance Engineer",
		description: "Ensures product quality through testing.",
		functions: ["Testing", "Documentation", "Defect Tracking"],
		skills: ["Detail-Oriented", "Analytical", "Problem Solving"]
	},
	{
		name: "Field Service Technician",
		description: "Installs and maintains equipment at client locations.",
		functions: ["Installation", "Maintenance", "Customer Service"],
		skills: ["Technical Skills", "Problem Solving", "Communication"]
	},
	{
		name: "SEO Specialist",
		description: "Optimizes website content for search engines.",
		functions: ["SEO", "Content Strategy", "Analytics"],
		skills: ["Analytical", "Technical Skills", "Creativity"]
	},
	{
		name: "Business Development Manager",
		description: "Identifies and develops new business opportunities.",
		functions: ["Networking", "Market Research", "Sales"],
		skills: ["Communication", "Negotiation", "Strategic Planning"]
	},
	{
		name: "Recruiter",
		description: "Handles recruitment and talent acquisition.",
		functions: ["Recruitment", "Interviews", "Candidate Evaluation"],
		skills: ["Interpersonal", "Organizational", "Communication"]
	},
	{
		name: "Financial Analyst",
		description: "Analyzes financial data to inform business decisions.",
		functions: ["Data Analysis", "Reporting", "Forecasting"],
		skills: ["Analytical", "Detail-Oriented", "Mathematical"]
	},
	{
		name: "Event Coordinator",
		description: "Plans and executes events for companies or individuals.",
		functions: ["Planning", "Logistics", "Budget Management"],
		skills: ["Organizational", "Interpersonal", "Problem Solving"]
	},
	{
		name: "Web Developer",
		description: "Builds and maintains websites.",
		functions: ["Coding", "Design", "User Experience"],
		skills: ["Technical Skills", "Problem Solving", "Creativity"]
	},
	{
		name: "Artificial Intelligence Engineer",
		description: "Develops AI models and algorithms.",
		functions: ["Machine Learning", "Data Analysis", "Programming"],
		skills: ["Analytical", "Technical Skills", "Problem Solving"]
	},
	{
		name: "Cybersecurity Analyst",
		description: "Protects systems from cyber threats.",
		functions: ["Security Analysis", "Risk Management", "Monitoring"],
		skills: ["Analytical", "Detail-Oriented", "Technical Skills"]
	},
	{
		name: "Brand Manager",
		description: "Oversees brand strategy and positioning.",
		functions: ["Brand Strategy", "Market Research", "Advertising"],
		skills: ["Creativity", "Analytical Skills", "Communication"]
	},
	{
		name: "Operations Analyst",
		description: "Analyzes operations to improve efficiency.",
		functions: ["Data Analysis", "Reporting", "Optimization"],
		skills: ["Analytical", "Problem Solving", "Technical Skills"]
	},
	{
		name: "Content Writer",
		description: "Creates written content for various platforms.",
		functions: ["Writing", "Research", "Editing"],
		skills: ["Creativity", "Research", "Attention to Detail"]
	}
];
