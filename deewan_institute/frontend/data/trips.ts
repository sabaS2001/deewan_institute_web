interface TripsData {
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
  list?: string[];
  fee: string;
}

export const tripsData: TripsData = {
  title: "Trips",
  image: "../assets/images/others/trips.jpg",
  subtitle: "Trips & Travel Support",
  header: "What We Offer",
  description: "Deewan offers personalized support to help students explore Jordan and make the most of their stay. We provide several flexible options to suit different travel needs and preferences.",
  subheader_one: "Trip Consultation",
  subDescription_one: "A one-hour consultation where we recommend destinations, trip duration, and activities based on your interests. We also assist with booking transportation and experiences.", 
  subheader_two: "Private Car Tours",
  subDescription_two: "Deewan can arrange a private car with a professional driver to take you to destinations across Jordan, offering a comfortable and flexible travel experience.",
  fee: "10",
};

export default tripsData;
