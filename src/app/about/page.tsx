import Image from "next/image";

export default function About() {
  return (
    <main>
     
      <div className="text-3xl font-extrabold pb-6">Work Experience</div>
      <div className="flex flex-col gap-y-4">
        <p>
          I have a diverse background in front-end development, starting as a
          part-time front-end developer and server administrator at Beutl GmbH.
          This experience allowed me to gain valuable insights into both the
          development and infrastructure aspects of web applications.
        </p>
        <p className="py-2">
          Currently, I am working at Amygdal as a front-end developer,
          leveraging the latest and most powerful front-end frameworks such as
          Next.js, Qwik, Mitosis, SolidJS, and React.
        </p>

        <p>
          {" "}
          By utilizing these <span className="underline">
            cutting-edge
          </span>{" "}
          technologies, I create <span className="underline">immersive</span>{" "}
          and <span className="underline">performant</span> web experiences.
          With a keen eye for design and a passion for delivering exceptional
          user experiences, I continuously push the boundaries of what is
          possible in the world of front-end development.
        </p>
        <div>
          <a href="https://amygdal.com" className="font-extrabold pr-4">
            Amygdal
          </a>{" "}
          June, 2022 -
        </div>
        <div>
          <a href="/" className="font-extrabold pr-4">
            Freelancer
          </a>{" "}
          January, 2016 -
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/mikulabeutl/?originalSubdomain=at"
            className="font-extrabold pr-4"
          >
            Beutl GmbH
          </a>{" "}
          March, 2019 - January, 2021
        </div>
      </div>

      <div className="text-3xl font-extrabold pb-6 pt-10">
        Academic Experience
      </div>
      <div className="flex flex-col gap-y-4">
        <p>
          I am a highly accomplished senior front-end developer with a strong
          academic background. Graduating as the{" "}
          <span className="text-purple-600">top-ranked</span> student in
          Software Engineering from the{" "}
          <a
            className="underline text-purple-600"
            href="https://iu-travnik.com"
          >
            International University of Travnik
          </a>{" "}
          in 2021, I continued to excel by obtaining my Master's degree in 2022,
          once again as the best student. This academic success showcases my
          dedication, expertise, and passion for software engineering.
        </p>
        <div>
          <span className="font-extrabold pr-4">Master's Degree</span> -
          September, 2022
        </div>
        <div>
          <span className="font-extrabold pr-4">Bachelor's Degree</span> -
          September, 2021
        </div>
      </div>
    </main>
  );
}
