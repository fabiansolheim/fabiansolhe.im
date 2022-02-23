
interface ProjectList {
  name: string;
  description: string;
  link: string;
}



interface Project extends Array<ProjectList>{}


export const projects: Project = [
  {
    name: 'spiritual.space',
    description: 'SpiritualSpace er en moodtracker Web-applikasjon som fortsatt er under utvikling. Data lagres i Firestore',
    link: 'https://getspiritual.space',
  },
  {
    name: 'where.voi',
    description:
      'En Web-applikasjon for å finne Voi sparkesykler bygd med React, og ENTURs utvikler API',
    link: 'https://wherevoi.netlify.app/',
  },
  {
    name: 'fabiansolhe.im',
    description: 'Denne nettsiden. Et portofølje for meg, Fabian Solheim.',
    link: '/',
  },
];
