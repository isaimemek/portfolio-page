import { Generic } from "../../components";
import work from "../../assets/work.png";

const TextSection = (
  <div className="text-justify mb-16">
    <p className="text-teal-500 text-xl md:text-3xl">
      <span className="font-bold font-mono">My Projects</span>
    </p>
    <br />
    <br />
    <div className="italic text-lg md:font-medium">
      <p>
        - Todo App with ReactJS
        <a
          href="https://todo-reactjs-chi.vercel.app/"
          target="blank"
          className="text-cyan-600 ml-6"
        >
          Click Here to Try it Live
        </a>
      </p>
      <p>
        <a
          href="https://github.com/isaimemek/todo-reactjs"
          target="blank"
          className="text-purple-500 hover:text-sky-500"
        >
          Source Code
        </a>
      </p>
      <br />
      <p>- This Website created with ReactJS and TailwindCSS</p>
      <p>
        <a
          href="https://github.com/isaimemek/todo-reactjs"
          target="blank"
          className="text-purple-500 hover:text-sky-500"
        >
          Source Code
        </a>
      </p>
      <br />
      <p>More on The Way!</p>
    </div>
  </div>
);

const ImageSection = (
  <img
    src={work}
    alt="work"
    className="transition ease-in-out hover:scale-110"
  />
);

function Work() {
  return (
    <div id="Work" className="h-3/4 2xl:h-screen">
      <Generic TextSection={TextSection} ImageSection={ImageSection} />
    </div>
  );
}

export default Work;
