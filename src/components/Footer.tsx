import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex justify-center items-center w-full h-36 bg-zinc-800">
      <div className="flex justify-center items-center flex-col md:flex-row text-white w-[60%] gap-6">
        <div className="flex-1">
          <p>Copyright © 2024. All rights are reserved</p>
        </div>
        <div className="flex flex-1 justify-center items-center text-3xl gap-4">
          <span className="">
            <a href="https://www.linkedin.com/in/jacob-jurgens-a37451289/">
              <FaLinkedin className="" />
            </a>
          </span>
          <span className="">
            <a href="https://github.com/jjacob-dev">
              <FaGithubSquare className="" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
