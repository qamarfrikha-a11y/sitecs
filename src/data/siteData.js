export { EVENTS, CYBER_EVENTS } from "./events";
import { githubImage } from "./imageUrls";

export const NAV_LINKS = [
  { id: "about", label: "Home" },
  { id: "team", label: "About us" },
  { id: "programs", label: "Achievements" },
  { id: "events", label: "Events" },
  { id: "cyber", label: "Cyber Unit" },
  { id: "gallery", label: "Gallery" },
  
];

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/12632536/admin/page-posts/published/" },
  { label: "Instagram", href: "https://www.instagram.com/ieee_cs_enis_sbc/" },
  { label: "Facebook", href: "https://www.facebook.com/CSENISsbc" },
];

export const UNITS = [
  { name: "Cyber Unit", kind: "Cybersecurity", description: "A focused unit for understanding security, responsible testing, digital privacy, and the systems we depend on.", activities: ["Security labs", "Capture the Flag", "Awareness sessions"], website: "https://computer-enis.ieee.tn/index-2.html", path: "/cyber", accent: "#00629B" },
];

export const CHAPTER_CONTACT = {
  email: "cs-chapter@ieee.tn",
  place: "National Engineering School of Sfax (ENIS), Sfax, Tunisia",
  city: "Sfax, Tunisia",
  website: "https://computer-enis.ieee.tn/",
};

export const STATS = [
  { value: "13", label: "Years Old" },
  { value: "125", label: "Members" },
  { value: "50", label: "Meetings" },
  { value: "60", label: "Events and Conferences" },
];

export const PROGRAMS = [
  { title: "CodeLab Fridays", body: "Weekly hands-on sessions on algorithms, systems, and the tools working engineers actually reach for — from Git internals to distributed systems.", tag: "Weekly" },
  { title: "Build Nights", body: "Small teams ship a working prototype in one evening: a CLI tool, a scraper, a tiny compiler. No slides, just terminals.", tag: "Monthly" },
  { title: "Speaker Series", body: "Engineers from regional tech companies walk through a real production problem they solved, and why the obvious fix was wrong.", tag: "Monthly" },
  { title: "CS Research Circle", body: "A reading group for students curious about grad school — one paper, one presenter, one hour of honest questions.", tag: "Bi-weekly" },
];

export const ACHIEVEMENTS = [
  {
    title: "Outstanding Student Branch Chapter of the Month",
    body: "IEEE Computer Society ENIS SBC was honored as the Outstanding Student Branch Chapter of the Month for June 2026, recognizing the chapter's dedication and meaningful initiatives for its community.",
    tag: "IEEE CS Region 8 · June 2026",
    image: "/images/aciehvement/4.png",
  },
  {
    title: "IEEE Tunisia Student Branch Chapter Award 2024",
    body: "Our chapter was recognized for delivering excellent service to IEEE members and for its continued contribution to the student branch community.",
    tag: "Chapter recognition · 2024",
    image: "/images/aciehvement/1.jpg",
  },
  {
    title: "Bronze Darrel Chong Student Activity Award",
    body: "IEEE CS ENIS SBC earned Bronze recognition for Hello World 3.0, celebrating the team's dedication, hard work, and commitment to creating meaningful student activities.",
    tag: "Hello World 3.0 · 2024",
    image: "/images/aciehvement/2.jpg",
  },
  {
    title: "2nd Place in the Non-Technical Challenge",
    body: "At the IEEE CS Tunisian Annual Meeting, our chapter finished second in the Non-Technical Challenge. The result reflects the team's collaboration, resilience, and long-standing impact within the IEEE community.",
    tag: "CSTAM · 2024",
    image: "/images/aciehvement/3.jpg",
  },
  {
    title: "TechX AI Nexus",
    body: "Through expert talks and the AI for Good hackathon, IEEE CS ENIS and IEEE ENIS SB brought AI enthusiasts together to promote responsible innovation and explore technology with a positive impact.",
    tag: "AI for Good · TechX",
    image: "/images/aciehvement/4.jpg",
  },
  {
    title: "3rd Place in the Outstanding TechX Hosts Award",
    body: "Our chapter earned third place in the Outstanding TechX Hosts Award 2024. This recognition celebrates the team's hard work, commitment, and contribution to making TechX AI Nexus a success.",
    tag: "TechX AI Nexus · 2024",
    image: "/images/aciehvement/5.jpg",
  },
];

/* EVENTS are shared from ./events. */
/*
  { date: "TBA", title: "CS Night Session Eoline", organizer: "IEEE Computer Society × Eoline", category: "Collaboration", where: "ENIS · Sfax", description: "A collaborative night session bringing students and builders together around practical computer science, ideas, and shared learning.", images: ["/images/events/csn.png", "/images/events/csn1.jpg", "/images/events/csn2.png", "/images/events/csn22.png", "/images/events/csn3.png", "/images/events/csn4.png", "/images/events/csn5.PNG", "/images/events/csn55.jpg", "/images/events/csn56.jpg"], state: "upcoming" },
  { date: "TBA", title: "HelloWorld CP Competition", organizer: "HelloWorld", category: "Competitive programming", where: "ENIS · Sfax", description: "A timed problem-solving challenge for programmers who enjoy algorithms, teamwork, and a little pressure.", images: ["/images/events/hw1.png", "/images/events/hw2.png", "/images/events/hw3.png", "/images/events/hw4.png"], state: "upcoming" },
  { date: "TBA", title: "SEIS Summit", organizer: "SEIS", category: "Summit", where: "ENIS · Sfax", description: "A meeting point for students, speakers, and builders around engineering, innovation, and the future of technology.", images: ["/images/events/seis1.jpg", "/images/events/seis2.jpg", "/images/events/seis3.jpg", "/images/events/seis4.jpg"], state: "upcoming" },
  { date: "TBA", title: "TechX Hackathon", organizer: "TechX", category: "Hackathon", where: "ENIS · Sfax", description: "Teams turn an open-ended idea into a working prototype during an intense build sprint supported by mentors.", images: ["/images/events/techx1.png", "/images/events/techx2.png", "/images/events/techx3.png", "/images/events/techx4.png", "/images/events/techx5.png"], state: "upcoming" },
  { date: "TBA", title: "Xtreme CP Competition", organizer: "Computer Society", category: "Competitive programming", where: "ENIS · Sfax", description: "An advanced contest for students who want to test their speed, accuracy, and algorithmic thinking.", images: ["/images/events/xtreem.png", "/images/events/xtreem2.png", "/images/events/xtreem3.png"], state: "upcoming" },
  { date: "TBA", title: "Web Development Workshop", organizer: "Computer Society", category: "Development", where: "ENIS · Sfax", description: "A practical session on building polished web experiences, from the first component to a responsive interface ready to share.", images: ["/images/events/web.jpeg", "/images/events/web2.jpeg", "/images/events/web3.jpeg", "/images/events/web4.jpeg"], state: "upcoming" },
  { date: "TBA", title: "AI × NVIDIA Tech Session", organizer: "Computer Society", category: "AI & NVIDIA", where: "ENIS · Sfax", description: "Discover the foundations of modern AI and the tools that turn machine learning ideas into useful prototypes.", images: ["/images/events/nvidia.png", "/images/events/nvidia2.jpg", "/images/events/nvidia7.png"], state: "upcoming" },
];

export const CYBER_EVENTS = [
  { title: "CTF Zero Trace", category: "Capture the Flag", description: "A hands-on security challenge where teams investigate clues, exploit weaknesses responsibly, and learn to think like defenders.", images: ["/images/cyber/cyber.png", "/images/cyber/cyber2.png", "/images/cyber/cyber3.png", "/images/cyber/cyber4.png", "/images/cyber/cyber5.png", "/images/cyber/cyber6.png", "/images/cyber/cyber7.png"] },
  { title: "iProtect Congress", category: "Cybersecurity congress", description: "A meeting around digital protection, privacy, and the people building safer systems for tomorrow.", images: ["/images/cyber/protect.png", "/images/cyber/protect2.png", "/images/cyber/protect3.png", "/images/cyber/protect4.png", "/images/cyber/protect5.png", "/images/cyber/protect6.png", "/images/cyber/protect7.png", "/images/cyber/protect8.png", "/images/cyber/protect9.png"] },
  { title: "TechCamp Bootcamp", category: "Security bootcamp", description: "An intensive learning track that turns curiosity into practical security habits, tools, and responsible testing skills.", images: ["/images/cyber/tech.png", "/images/cyber/tech2.png", "/images/cyber/tech3.png", "/images/cyber/tech4.png", "/images/cyber/tech5.png", "/images/cyber/tech6.png"] },
]; */

export const TEAM = [
  { name: "Yassine Hammami", role: "Chapter Chair", initials: "YH" },
  { name: "Nour Ben Salah", role: "Vice Chair", initials: "NB" },
  { name: "Aymen Trabelsi", role: "Technical Lead", initials: "AT" },
  { name: "Rym Guesmi", role: "Events Lead", initials: "RG" },
  { name: "Firas Cherni", role: "Sponsorship Lead", initials: "FC" },
  { name: "Salma Jendoubi", role: "Communications", initials: "SJ" },
];

export const EXPERIENCES = [
  {
    quote: "My experience with the IEEE Computer Society ENIS community strengthened my leadership, collaboration, and professional skills while allowing me to contribute to meaningful student initiatives.",
    name: "Noua Ajily",
    role: "IEEE Computer Society ENIS Community",
    initials: "NA",
    photo: githubImage("/images/former chair/nour  el houda laajili.jpg"),
  },
  {
    quote: "Being part of the IEEE Computer Society ENIS community helped me grow through teamwork, shared responsibility, and the opportunity to create a lasting impact with other students.",
    name: "Abdallah Salem",
    role: "IEEE Computer Society ENIS Community",
    initials: "AS",
    photo: "",
  },
  {
    quote: "As the Chairman of the IEEE Computer Society Chapter at the National Engineering School of Sfax (ENIS), I led a range of initiatives focused on technology, innovation, and professional development. My role involved strategic planning and execution of numerous events and activities, enhancing both technical and soft skills of our members. Interacting with diverse groups, I fostered a collaborative environment and promoted skill development through seminars, workshops, and competitions. This leadership position refined my problem-solving and team management abilities, equipping me with valuable insights for future technology-driven environments.",
    name: "Akram Trabelsi",
    role: "Computer Science Engineer and Ex CS Chairman",
    initials: "AT",
    photo: "",
  },
  {
    quote: "My rise to Chairmanship was nothing short of a marvelous experience. With much to learn and sparks of motivation, I find myself embarked in a journey of self-betterment and intriguing discovery. While volunteering for this position, I have come to know, embrace and develop my skill set at an exponential rate; something I believe will play a huge role in kick starting my engineering career. I owe much of my humble but marking exploits to my team and extend to them my sincere appreciation for their cooperation and drive. I am thankful for being able to thrive under the mantle of the IEEE ENIS Computer Society Student Branch Chapter who I deeply cherish and vehemently consider to be the crown jewel of the IEEE ENIS Student Branch.",
    name: "Mahdi Bradai",
    role: "Computer Science Student and Ex CS Chairman",
    initials: "MB",
    photo: githubImage("/images/former chair/mahdibradai.jpg"),
  },
  {
    quote: "Being the chairman of IEEE ENIS CS SBC has been one of the most fruitful experiences that I have yet lived, it has allowed me to expand my network and get to know like-minded people that share the same interests as I do. It has enabled me to learn new leadership skills like managing a team, managing tasks... One of the things that I am most grateful for is the ability to discover so much potential within myself and what I could do as an individual and with my team as we were able to organize many activities, from workshops, events, and competitions to humanitarian activities as well.",
    name: "Bilel Djemel",
    role: "Computer Science Student and Ex CS Chairman",
    initials: "BD",
    photo: githubImage("/images/former chair/bileledejmal.jpg"),
  },
  {
    quote: "Being the chairwoman of the IEEE Computer Society ENIS SBC has been one of the most rewarding experiences of my entire student life. I have gained a wealth of knowledge from the diverse experiences and attitudes of the people I have had the opportunity to meet and work with. This responsibility has pushed me beyond my comfort zone, allowing me to learn and grow in ways I never imagined. I have developed effective stress management skills, and it has given me a new perspective on various aspects of life. This experience has truly enriched me, not only in terms of leadership and management skills but also in fostering meaningful connections and making a positive impact within the community.",
    name: "Chaima Abdelkefi",
    role: "Data Engineer and Ex CS Chairwoman",
    initials: "CA",
    photo: githubImage("/images/former chair/chaima abdelkefi.jpg"),
  },
  {
    quote: "As an ex-chair of the IEEE Computer Society ENIS Student Branch Chapter, I can confidently say that I gained invaluable experiences and skills, such as leadership, organization, and communication, which have greatly contributed to my personal and professional growth. Being part of this vibrant community allowed me to enrich my knowledge and enhance my career prospects. Moreover, the friendships and connections I formed during my time as a member and chairperson will undoubtedly remain an enduring source of support and inspiration. I am genuinely grateful for the opportunities and lifelong benefits that the IEEE Computer Society ENIS Student Branch Chapter has provided me.",
    name: "Kadhem Belghuith",
    role: "Data Engineer and Ex CS Chairman",
    initials: "KB",
    photo: githubImage("/images/former chair/khadem beguith.jpg"),
  },
];
