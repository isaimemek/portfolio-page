import { NavButton, Generic } from "../../components";
import about from "../../assets/about.jpg";
import Resume from "../../assets/ISA-IMEMEK-Resume.pdf";

const TextSection = (
  <div className="text-justify md:mr-36">
    <p className="text-teal-600 text-xl md:text-3xl">
      <span className="font-bold font-mono">About Me</span>
    </p>
    <p className="mt-6 italic dark:not-italic md:text-lg md:font-medium">
      I like to read epic fantasy, adventure and mystery books. I love listening
      to piano. Hiroyuki Sawano is my favorite composer. Ado, Aimer and Mika
      Nakashima are my favorite singers and King Gnu is my favorite band.
    </p>
    <br />
    <p className="italic dark:not-italic md:text-lg md:font-medium">
      I enjoy hanging out if the weather is good. Else, I'd rather go home and
      spend time with the computer. Sometimes I play computer games to pass the
      time. I am a minimalist and I like to keep my stuff organized.
    </p>
    <div className="mt-16 text-xl text-center text-zinc-50 dark:text-emerald-900 rounded ml-36 sm:ml-96 xl:ml-[500px]">
      <a
        rel="noreferrer"
        href={Resume}
        target="_blank"
        className="hover:outline outline-1 outline-red-300 bg-gradient-to-r from-emerald-400 to-teal-400 rounded py-2 px-8"
      >
        Resume
      </a>
    </div>
  </div>
);

const ImageSection = <img src={about} alt="about" />;

function About() {
  return (
    <div id="About" className="h-3/4 2xl:h-screen">
      <Generic TextSection={TextSection} ImageSection={ImageSection} />
      <div className="flex justify-center 2xl:mt-[90px] 3xl:mt-[185px]">
        <NavButton Page="Work" />
      </div>
    </div>
  );
}

export default About;
