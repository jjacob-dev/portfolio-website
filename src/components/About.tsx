import aImage from "../images/about.jpg";

function About() {
  return (
    <>
      <div id="about" className="flex justify-center py-36">
        <div className="flex flex-col-reverse md:flex-row gap-4 px-8 justify-center max-w-6xl">
          <div className="flex flex-col gap-4 flex-1">
            <div className="text-4xl font-bold text-slate-700">
              <h1>About me</h1>
            </div>
            <div className="flex flex-col text-center md:text-left gap-4 md:max-w-[80%] text-lg text-slate-600">
              <p>
                I'm a full-time student at Griffith University, I'm focused on
                web development with a passion for making responsive websites
                and applications.
              </p>
              <p>
                Technology has always been a major interest in my life, so being
                able to do it for both personal projects and professional goals
                is the ultimate outcome.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-1">
            <img className="rounded-lg" src={aImage} />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
