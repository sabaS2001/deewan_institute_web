export interface GermanStateCard {
  id: string;
  stateName: string;
  logoSrc: string;
  logoAlt: string;
  description: string;
  viewMoreLink: string;
}

export const germanStateCards: GermanStateCard[] = [
  {
    id: 'berlin',
    stateName: 'Berlin',
    logoSrc: '/assets/images/logos/b_logo2.png',
    logoAlt: 'Berlin Bildungsurlaub Logo',
    description: 'For more information, click the button below!',
    viewMoreLink: 'https://www.berlin.de/sen/arbeit/weiterbildung/bildungsurlaub/',
  },
  {
    id: 'lower-saxony',
    stateName: 'Lower Saxony',
    logoSrc: '/assets/images/logos/b_logo3.png',
    logoAlt: 'Lower Saxony AEWB Logo',
    description: 'For more information, click the button below!',
    viewMoreLink: 'https://www.aewb-nds.de/',
  },
];