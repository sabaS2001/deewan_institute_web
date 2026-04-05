interface VisaData {
  title: string;
  image: string;
  subtitle: string;
  header: string;
  description: string;
  subheader_one?: string;
  subheader_two?: string;
  subDescription_one?: string;
  subDescription_two?: string;
  listDescription?: string;
  list: string[];
  fee: string;
}

export const visaData: VisaData = {
  title: "Visa Application",
  image: "../assets/images/others/visa1.png",
  subtitle: "Visa Support Services",
  header: "What We Offer",
  description:
    "Deewan provides full support with visa applications and extensions to ensure your stay in Jordan is smooth and stress-free. Our team guides you through every step of the process, accompanies you to the relevant authorities, and arranges transportation when needed. All required assistance is included, so your visa is handled efficiently and with care.",
  listDescription: "What's included:",
  list: [
    " Guidance through visa applications and extensions.",
    "Preparation and review of required documents.",
    "Accompaniment to the relevant government authorities.",
    "Transportation to and from the police station.",
    "Ongoing support and follow-up throughout the process.",
  ],
  fee: "20",
};

export default visaData;
