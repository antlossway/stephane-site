export const activities = [
  {
    id: 0,
    year: "Jun 2023 - Ongoing",
    title: "I.T. Consultant",
    company: "Iglu",
    url: "https://iglu.net",
    text: "Iglu is the global hub for tech talent, providing software consulting and business outsourcing services to companies of the Iglu network and local clients.",
  },

  {
    id: 1,
    year: "Mar 2022 - Jun 2023",
    title: "I.T. Consultant",
    company: "AMEEX Mobile Exchange S.A.",
    url: "https://ameex-mobile.com",
    text: "In 2007, AMEEX|mobile was launched to expand the network of Sinch -  the global leader in mobile messaging (formerly SAP, Sybase 365, Mobile365), across Middle East and Africa. My contributions have spanned a wide range of responsibilities and achievements:",

    list: [
      "Successfully led the selection, acquisition, configuration, and efficient operations of two SS7 SMSC, ensuring seamless mobile messaging services.",
      "Development of an A2P (SMPP) SMSC from scratch using common lisp, kannel, postgreSQL",
      "Development of the entire lifecycle of the billing system, starting from data collection process to margin calculation, invoices PDF generation,  and web reporting interface (front and back-office).",
      "Acted as technical account manager for all telcos in Saudi Arabia, fostering communication, understanding their needs, and providing tailored solutions",
    ],
    tech: [
      "Linux",
      "Apache",
      "Perl",
      "Common Lisp",
      "Python",
      "PostgreSQL",
      "SS7",
      "Dialogic STP",
      "Netfors STP/SMSC",
      "SMPP 3.4",
    ],
  },
  {
    id: 2,
    year: "Jan 2021 - Feb 2022",
    title: "Education Mentor",
    company: "OpenClassrooms",
    url: "https://openclassrooms.com",
    text: "OpenClassrooms is a France-based online education platform for vocational training, offering a wide range of courses in computer science, technology, and entrepreneurship.",
    list: [
      "As an Education Mentor, I have been responsible for guiding students through their learning journey, providing them with the necessary support and resources to succeed.",
    ],
    tech: ["Mentor", "New Hire Training"],
  },
  {
    id: 3,
    year: "Mar 2020 - Jan 2021",
    title: "I.T. Consultant",
    company: "Triple-A",
    url: "https://triple-a.io",
    text: "Triple-A aims to revolutionize how businesses and customers are connected through blockchain technology and crypto currency solutions.",
    list: [
      "I have been working as a consultant for all SMS and billing related issues (sub-contracting to AMEEX).",
    ],
  },
  {
    id: 4,
    year: "Jan 2014 - Jun 2019",
    title: "I.T. Consultant (Acting CTO)",
    company: "AMEEX Mobile Exchange S.A.",
    text: "In 2007, AMEEX|mobile was launched to expand the network of Sinch -  the global leader in mobile messaging (formerly SAP, Sybase 365, Mobile365), across Middle East and Africa.",
    list: [
      "Leading the technical team",
      "Installed and configured 3 new SMSC (2 for SS7 and one for A2P SMS)",
      "Built from scratch a new billing system",
    ],
  },
  {
    id: 5,
    year: "Jul 2011 - Jul 2013",
    title: "Founder and C.T.O.",
    company: "Bootic",
    text: "Bootic was founded with a bold vision to revolutionize the e-commerce industry, taking on giants like Amazon. Although our journey remained relatively under the radar, we accomplished remarkable milestone. \nThis journey has equipped me with invaluable skills and insights.",
    list: [
      "Assembled and led a high-performing team of 30 people, synergizing efforts to develop a cutting-edge online e-commerce website.",
    ],
    tech: ["CTO", "Project Manager", "New Hire Training", "Entrepreneur"],
  },
  {
    id: 6,
    year: "Jul 2007 - Jul 2011",
    title: "Chief Technology Officer",
    company: "DTONE (formerly Transfer-To)",
    url: "https://www.dtone.com",
    text: "DTONE stands as the leading B2B Digital Transfer network for mobile top-up and data solutions. Throughout my tenure as Chief Technology Officer, I played a pivotal role in driving technical innovation and overseeing key accomplishments, including:",
    list: [
      "Development of a robust and scalable Airtime transfer platform from the ground up, enabling seamless and secure transactions for our clients.",
      "Development of USSD/SMS applications, prominently utilized by telecom giants like STC (Saudi), Maxis, and DIGI (Malaysia).",
      "Establishing connections with several hundreds of providers and telcos.",
      "Building and managing a skilled and dedicated team responsible for customer support, development, and operational excellence, ensuring streamlined processes and optimal performance.",
    ],
    tech: ["Linux", "FreeBSD", "VPN", "Apache", "Perl", "PostgreSQL"],
  },
];

// Level 5 - Expert
// Apache, Bash, Bulma, Common Lisp, Emacs, FreeBSD, HTML, Linux, Management, Nagios, NetBSD, new hire training, OpenBSD, Operation, Perl, PostgreSQL, Project Manager, Python, SMPP 3.4, TCP, Unix
// Level 4 - Advanced
// Amazon Web Services, CTO, Dialogic, Mentor, Netfors, SS7, VPN
// Level 3 - High Competence
// Entrepreneur

export const techSkills = [
  {
    category: "Programing",
    list: ["Common Lisp", "Emacs", "HTML", "Perl", "Python", "Bash", "Bulma"],
  },
  {
    category: "SysAdmin",
    list: [
      "FreeBSD",
      "NetBSD",
      "OpenBSD",
      "Unix/Linux",
      "Apache",
      "Bash",
      "Nagios",
    ],
  },
  {
    category: "Cloud/Network",
    list: ["AWS", "VPN", "TCP"],
  },
  {
    category: "Telecom",
    list: ["SMPPv3.4", "SS7", "Dialogic"],
  },
];

export const leadSkills = [
  {
    category: "Leadership",
    list: ["CTO", "Entrepreneur", "Service Operation"],
  },
  {
    category: "Training",
    list: ["Mentoring", "New Hire Training"],
  },
];

export const books = [
  {
    id: 1,
    title:
      "Les meilleures bibliothèques pour Perl (Best Libraries for Perl) H&K Editions",
    url: "https://www.h-k.fr/sf.tp.011Biblis",
    year: "2006 - Ongoing",
  },
  {
    id: 2,
    title: "Perl pour l'impatient (Perl for the impatient) H&K Editions",
    url: "https://www.h-k.fr/sf.tp.003PPI-ed2",
    year: "2005 - Ongoing",
  },
];

export const languages = [
  {
    lang: "French",
    level: "Native",
  },
  {
    lang: "English",
    level: "Professional proficiency",
  },
  {
    lang: "Chinese(Mandarin)",
    level: "Elementary",
  },
];

export const courses = [
  {
    name: "Python",
    provider: "OpenClassrooms",
    year: "2021",
  },
  {
    name: "Start a project in Python",
    provider: "OpenClassrooms",
    year: "2021",
  },
  {
    name: "Master TCP/IP network and application",
    provider: "OpenClassrooms",
    year: "2021",
  },
  {
    name: "Put in production a monitoring tool",
    provider: "OpenClassrooms",
    year: "2021",
  },
  {
    name: "OO with Python",
    provider: "OpenClassrooms",
    year: "2021",
  },
];
