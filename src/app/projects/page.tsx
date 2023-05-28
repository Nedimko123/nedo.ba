import Image from "next/image";

const apps = [
  {
    name: "NutriPick",
    desc: "Say goodbye to guessing about your nutritional needs and say hello to a perfectly balanced diet with our comprehensive nutrition app.",
    link: "https://play.google.com/store/apps/details?id=ba.nedo.nutriPick",
  },
  {
    name: "UFC Soundboard",
    desc: "Fully updated and categorised soundboard consisting of many Ultimate Fighting Championship fighters. ",
    link: "https://play.google.com/store/apps/details?id=dev.nedomedo.ufcsoundboard",
  },
  {
    name: "AdmiralBulldog Soundboard",
    desc: "Immerse yourself in the world of AdmiralBulldog with the AdmiralBulldog soundboard app, featuring his iconic and entertaining sound bites.",
    link: "https://play.google.com/store/apps/details?id=com.admiralbulldog.soundboard",
  },
  {
    name: "QuoteGen",
    desc: "A mobile app that helps you generate a random quote from a wide variety of categories, save your favorite quotes, and receive daily notifications to inspire and motivate you!",
    link: "https://play.google.com/store/apps/details?id=nedo.ba.quoteGen",
  },
  {
    name: "BMI Calculator",
    desc: "Discover your body mass index (BMI) effortlessly with our BMI Calculator app. Stay informed about your health and wellness.",
    link: "https://play.google.com/store/apps/details?id=ba.nedo.bmiCalculator",
  },
  {
    name: "Tip Calculator",
    desc: "Effortlessly calculate tips and split bills with our convenient Tip Calculator app. Enjoy hassle-free dining experiences with accurate gratuity suggestions.",
    link: "https://play.google.com/store/apps/details?id=ba.nedo.tipCalculator",
  },
  {
    name: "Color Generator",
    desc: "Unleash your creativity with our Color Generator app. Instantly generate vibrant color palettes to inspire your designs and visual projects.",
    link: "https://play.google.com/store/apps/details?id=dev.nedomedo.colorgenerator",
  },
  {
    name: "Interval Timer",
    desc: "Experience the convenience of my interval timer app, designed to effortlessly time and track your workouts and routines.",
    link: "https://play.google.com/store/apps/details?id=com.malicbegovicnedim.intervals",
  },
  {
    name: "BK Tajan",
    link: "https://bktajan.ba",
    desc: "Pedal into excitement with our local Cycling Club website. Explore cycling events, connect with fellow enthusiasts, and discover breathtaking routes.",
  },
];

export default function Projects() {
  return (
    <main>
      {apps.map((app) => {
        return (
          <div key={app.name} className="mb-10">
            <div className="flex flex-row gap-x-4 items-center">
              <a href={app.link}>
                <h1 className="text-3xl pb-4 font-extrabold">{app.name}</h1>
              </a>
            </div>
            <p>{app.desc}</p>
          </div>
        );
      })}
    </main>
  );
}
