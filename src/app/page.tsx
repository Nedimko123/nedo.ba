import Image from "next/image";

export default function Home() {
  return (
    <main>
      <p className="text-3xl font-bold mb-6">
        Senior Front-End developer based in{" "}
        <span className="pl-1 font-extrabold text-3xl">🇧🇦</span>
      </p>
      <div
        className="md:ml-2  flex justify-center md:float-right md:[clip-path:_polygon(25%_0%,_100%_0%,_75%_100%,_0%_100%)]
       md:[shape-outside:_polygon(25%_0%,_100%_0%,_75%_100%,_0%_100%)] pt-6
"
      >
        <Image
          src={"/nedim.jpg"}
          alt="Nedim Malicbegovic"
          width={300}
          height={1}
          className="object-contain mb-6 self-center rounded-md"
        />
      </div>
      <div>
        <p className="pt-6">
          Specializing in{" "}
          <a className="underline text-primary " href="https://nextjs.org/">
            Next.js
          </a>
          ,{" "}
          <a
            className="underline text-primary "
            href="https://qwik.builder.io/"
          >
            Qwik
          </a>
          , and{" "}
          <a
            className="underline text-primary "
            href="https://mitosis.builder.io/"
          >
            Mitosis
          </a>
          , with a strong foundation in Python backend development. With a
          passion for creating engaging user experiences, I leverage my skills
          to build intuitive and responsive web applications.
        </p>
        <p className="py-8">
          In addition to my expertise as a front-end developer, I am also
          proficient in{" "}
          <a
            className="underline text-primary "
            href="https://play.google.com/store/apps/dev?id=5003532232432131743"
          >
            mobile development
          </a>{" "}
          using{" "}
          <a className="underline text-primary " href="https://flutter.dev/">
            Flutter
          </a>
          . I enjoy building cross-platform applications that deliver a seamless
          user experience across different devices and platforms.
        </p>
      </div>
      
      <p className="mt-2">
        Beyond my professional pursuits, I am an enthusiastic nature lover, avid
        hiker, and passionate cyclist. Exploring the great outdoors fuels my
        creativity and keeps me inspired to create exceptional digital
        experiences.
      </p>
     
    </main>
  );
}
