import home from "../../assets/home.jpg";
import { NavButton, Generic } from "../../components";

const TextSection = (
  <div className="text-justify md:mr-36">
    <p className="text-indigo-900 text-2xl md:text-4xl">
      <span className="font-bold font-mono">Hi, I'm Isa Imemek</span>
    </p>
    <p className="mt-2 text-pink-500 text-xl md:text-3xl">
      <span className="font-bold font-mono">I'm a Software Developer</span>
    </p>
    <p className="mt-6 italic md:text-lg md:font-medium">
      My main focus is on building web applications using modern technologies.
      However I also plan to gain experience in building mobile applications
      using React Native.
    </p>
  </div>
);

const ImageSection = <img src={home} alt="home" />;

function Home() {
  return (
    <div id="#" className="h-3/4 2xl:h-screen">
      <Generic TextSection={TextSection} ImageSection={ImageSection} />
      <div className="flex justify-center 2xl:mt-20 3xl:mt-44">
        <NavButton Page="About" />
      </div>
    </div>
  );
}

export default Home;
