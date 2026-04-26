export interface GermanStateCard {
  id: string;
  stateName: string;
  logoSrc: string;
  logoAlt: string;
  description: string;
  viewMoreLink: string;
}
export const bildungsurlaubContent = {
  en: {
    whatIsHeading: "What is Bildungsurlaub?",
    bodyText: `Bildungsurlaub (educational leave) is a legal entitlement in Germany that allows employees to take paid leave from work to participate in officially recognized educational programs.

The exact regulations vary by state, but in general, employees are entitled to several days per year for further education, provided the course is approved by the relevant state authority.

The Deewan Institute for Languages and Cultural Studies is officially recognized in Berlin and Lower Saxony to offer Bildungsurlaub programs. Our courses meet the required legal and quality standards in these states.

This means:
- Employees in Berlin and Lower Saxony can apply for paid educational leave to attend our courses.
- Our programs comply with official requirements regarding content, structure, and teaching hours.
- Participants receive all necessary documentation to submit to their employer.

Bildungsurlaub provides professionals with the opportunity to improve their language skills and intercultural competence while continuing to receive their salary.

For further information, please contact us at arabic@deewaninstitute.com.`,
  },
  de: {
    whatIsHeading: "Was ist Bildungsurlaub?",
    bodyText: `Bildungsurlaub ist ein gesetzlicher Anspruch in Deutschland, der Arbeitnehmerinnen und Arbeitnehmern erlaubt, bezahlten Urlaub für anerkannte Bildungsmaßnahmen zu nehmen.

Die genauen Regelungen variieren je nach Bundesland. Im Allgemeinen haben Beschäftigte Anspruch auf mehrere Tage pro Jahr, sofern der Kurs von der zuständigen Landesbehörde anerkannt ist.

Das Deewan-Institut für Sprachen und Kulturwissenschaften ist in Berlin und Niedersachsen offiziell anerkannt. Unsere Kurse erfüllen die gesetzlichen Qualitäts- und Inhaltsstandards.

Das bedeutet:
- Beschäftigte in Berlin und Niedersachsen können Bildungsurlaub für unsere Kurse beantragen.
- Unsere Programme entsprechen den offiziellen Anforderungen an Inhalt, Struktur und Unterrichtsstunden.
- Teilnehmende erhalten alle notwendigen Unterlagen für ihren Arbeitgeber.

Für weitere Informationen wenden Sie sich bitte an arabic@deewaninstitute.com.`,
  },
};
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