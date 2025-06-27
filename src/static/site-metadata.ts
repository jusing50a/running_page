interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

// const getBasePath = () => {
//   const baseUrl = import.meta.env.BASE_URL;
//   return baseUrl === '/' ? '' : baseUrl;
// };

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://jusing50a.github.io/running_page',
  logo: 'https://avatars.githubusercontent.com/u/37446043?s=460&v=4',
  description: 'Personal site and blog',
  keywords: 'running, cycling, trail-running, hiking, snowboarding',
  navLinks: [
    {
      name: 'Strava',
      url: 'https://www.strava.com/athletes/91018631',
    },
    {
      name: 'About',
      url: 'https://github.com/jusing50a/running_page',
    },
  ],
};

export default data;
