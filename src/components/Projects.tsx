import ProjectBox from "./ProjectBox";
import img1 from "../images/project1.png";
import img2 from "../images/project2.png";
import img3 from "../images/project3.png";
import img4 from "../images/project4.png";

function Projects() {
  return (
    <div id="projects" className="flex justify-center py-20 bg-zinc-50">
      <div className="flex flex-col w-[80%]">
        <div>
          <h1 className="text-3xl font-semibold text-slate-700">Projects</h1>
          <p className="text-1xl py-2 text-slate-500">
            Each project contains unique features and code libraries
          </p>
        </div>
        <div className="flex flex-col self-center justify-center items-center gap-12 py-12 md:w-[65%]">
          <ProjectBox
            title="Opulent Nails"
            desc="Clean and modern front-end application, developed using React and Tailwind to create a visually appealing website"
            tags={["React.JS", "Typescript", "HTML", "Tailwind", "CSS"]}
            image={img1}
            live={true}
            link="https://opulent-nails.vercel.app/"
            gitlink="https://github.com/jjacob-dev/opulent-nails"
          />
          <ProjectBox
            title="Ionic mobile finance app"
            desc="Mobile app made using Angular and Ionic, interactive with custom routing and pages. Techniques such as custom components and libraries were used to add more to the application including Charts and modals. "
            tags={["Angular", "Ionic", "Typescript", "HTML", "CSS"]}
            image={img2}
            live={true}
            link="https://angular-mobile-dev.vercel.app"
            gitlink="https://github.com/jjacob-dev/angular-mobile-dev"
          />
          <ProjectBox
            title="FullStack Survey App"
            desc="Simple survey website that communicates with a MySQL database using Python Flask library as the backend. Visualizes the surveys input data using charts and visuals"
            tags={[
              "React.JS",
              "Typescript",
              "Python",
              "Flask",
              "Tailwind",
              "MySQL",
              "AWS",
            ]}
            image={img3}
            live={false}
            gitlink="https://github.com/jjacob-dev/fullstack-survey-site"
          />
          <ProjectBox
            title="Jump Hero, P5.Play JS game"
            desc="JavaScript game with multiple stages and unique game physics, using public assets along with logos and custom assets made with Photoshop. Made possible using the p5play Library"
            tags={["Javascript", "P5.Play", "HTML", "CSS"]}
            image={img4}
            live={true}
            link="https://jump-hero.vercel.app/"
            gitlink="https://github.com/jjacob-dev/Jump-hero"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
