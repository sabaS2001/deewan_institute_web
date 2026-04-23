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
    viewMoreLink: 'assets/pdf/bildungsurlaub/Berlin.pdf',
  },
  {
    id: 'lower-saxony',
    stateName: 'Lower Saxony',
    logoSrc: '/assets/images/logos/b_logo3.png',
    logoAlt: 'Lower Saxony AEWB Logo',
    description: 'For more information, click the button below!',
    viewMoreLink: 'assets/pdf/bildungsurlaub/LowerSaxonyPDF.pdf',
  },
    {
    id: 'Hamburg',
    stateName: 'Hamburg',
    logoSrc: '/assets/images/logos/b_logo4.png',
    logoAlt: 'Hamburg Bildungsurlaub Logo',
    description: 'For more information, click the button below!',
    viewMoreLink: 'assets/pdf/bildungsurlaub/Hamburg.pdf',
  },
      {
    id: 'rhineland',
    stateName: 'Rhineland',
    logoSrc: '/assets/images/logos/b_logo5.png',
    logoAlt: 'Rhineland Bildungsurlaub Logo',
    description: 'For more information, click the button below!',
    viewMoreLink: 'assets/pdf/bildungsurlaub/Rhineland.pdf',
  },
        {
    id: 'Saarland',
    stateName: 'Saarland',
    logoSrc: '/assets/images/logos/b_logo6.png',
    logoAlt: 'Saarland Bildungsurlaub Logo',
    description: 'For more information, click the button below!',
    viewMoreLink: 'assets/pdf/bildungsurlaub/Saarland.pdf',
  },
];