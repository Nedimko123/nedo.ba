export default function Footer() {
  return (
    <div className="flex flex-col mt-10 items-center">
      <p className="text-3xl font-extrabold mb-4">Get in Touch</p>
      <div className="flex flex-row gap-8 text-lg font-bold text-purple-600">
        <a href="mailto:contact@nedo.ba">Email</a>
        <a href="https://www.linkedin.com/in/nedim-malicbegovic-43b56a149/">
          LinkedIn
        </a>
        <a href="https://github.com/Nedimko123">Github</a>
      </div>
    </div>
  );
}
