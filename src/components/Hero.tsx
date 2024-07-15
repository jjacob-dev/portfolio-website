import { HiArrowNarrowRight } from "react-icons/hi";
import oImage from "../images/Hero.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <>
      <div
        id="home"
        className="flex justify-center pt-56 pb-96 px-6 bg-zinc-50"
      >
        <div className="flex flex-col-reverse gap-2 md:flex-row justify-center items-center max-w-5xl">
          <div className="flex flex-col gap-4 flex-1">
            <div className="text-5xl font-bold text-zinc-700">
              <h1>Jacob Jurgens</h1>
            </div>

            <div className="text-2xl font-semibold text-zinc-700">
              <h2>Software Developer</h2>
            </div>
            <p className="text-center md:text-left text-lg text-zinc-500">
              Hi, I'm a developer and passionate student at Griffith University,
              studying Software Development
            </p>
            <div>
              <a href="projects">
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <button className="text-white group border-2 rounded-lg px-6 py-3 my-2 flex items-center bg-zinc-800 hover:border-zinc-800">
                    View Work
                    <span className="group-hover:rotate-90 duration-300">
                      <HiArrowNarrowRight className="ml-4" />
                    </span>
                  </button>
                </Link>
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center flex-1">
            <img
              className="rounded-full w-[80%] md:w-[80%] h-auto"
              src={oImage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
