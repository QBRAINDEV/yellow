import { Individual } from "../types/user";

export const clientMock: Individual[] = [
    {
      name: "John",
      role: "CEO",
      temporaryRole: "CEO",
      value: 7,
      symbolism: "Visionary",
      tarot: "The Sun",
      idealRoles: ["CEO", "Leader"],
      compatibility: [
        { individualA: "John", individualB: "Alice", match: true, score: 6, factors: {} as any },
        { individualA: "John", individualB: "Bob", match: false, score: 3, factors: {} as any },
      ]
    },
    {
      name: "Alice",
      role: "CFO",
      temporaryRole: "CFO",
      value: 5,
      symbolism: "Strategist",
      tarot: "The Moon",
      idealRoles: ["CFO", "Planner"],
      compatibility: [
        { individualA: "Alice", individualB: "John", match: true, score: 6, factors: {} as any },
        { individualA: "Alice", individualB: "Bob", match: false, score: 2, factors: {} as any },
      ]
    },
    {
      name: "Bob",
      role: "Product Manager",
      temporaryRole: "CTO",
      value: 8,
      symbolism: "Innovator",
      tarot: "The Star",
      idealRoles: ["CTO", "Technologist"],
      compatibility: [
        { individualA: "Bob", individualB: "John", match: false, score: 3, factors: {} as any },
        { individualA: "Bob", individualB: "Alice", match: false, score: 2, factors: {} as any },
      ]
    },
    ...Array.from({ length: 97 }, (_, i) => {
      const name = `Individual${i + 4}`;
      const roles = [
        "Developer",
        "Sales Manager",
        "UX Designer",
        "Marketing Manager",
        "Operations Manager",
        "HR Manager",
        "Customer Success",
        "Data Analyst",
        "DevOps Engineer",
        "UI Designer",
        "Legal Advisor",
        "Accountant",
        "Finance Manager",
        "Business Analyst",
        "Content Writer",
        "Social Media Manager",
        "Product Designer",
        "Full-Stack Developer",
        "Mobile Developer",
        "Backend Engineer",
        "Frontend Developer",
        "IT Support",
        "Community Manager",
        "Supply Chain Manager",
        "Brand Manager",
        "Tech Lead",
        "Research Scientist",
        "Cybersecurity Analyst",
        "Public Relations Specialist",
        "Partnership Manager",
        "Growth Hacker",
      ];
      
      const role = roles[Math.floor(Math.random() * roles.length)];
      const tarotCards = [
        "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant",
        "The Lovers", "The Chariot", "Strength", "The Hermit", "The Wheel of Fortune",
        "Justice", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Star",
        "The Moon", "The Sun", "Judgement", "The World"
      ];
  
      const tarot = tarotCards[Math.floor(Math.random() * tarotCards.length)];
      const symbolism = [
        "Leader", "Innovator", "Strategist", "Problem Solver", "Creative Thinker", "Visionary",
        "Diplomat", "Risk Taker", "Communicator", "Technologist", "Analyst", "Team Player"
      ];
  
      const individualSymbolism = symbolism[Math.floor(Math.random() * symbolism.length)];
  
      // Creating random compatibility with existing individuals
      const randomCompatibilities = [
        { individualA: name, individualB: "John", match: Math.random() < 0.5, score: Math.floor(Math.random() * 10) + 1, factors: {} as any },
        { individualA: name, individualB: "Alice", match: Math.random() < 0.5, score: Math.floor(Math.random() * 10) + 1, factors: {} as any },
        { individualA: name, individualB: "Bob", match: Math.random() < 0.5, score: Math.floor(Math.random() * 10) + 1, factors: {} as any },
      ];
  
      return {
        name,
        role,
        temporaryRole: role,
        value: Math.floor(Math.random() * 10) + 1,
        symbolism: individualSymbolism,
        tarot,
        idealRoles: [role],
        compatibility: randomCompatibilities
      };
    })
  ];
  

  