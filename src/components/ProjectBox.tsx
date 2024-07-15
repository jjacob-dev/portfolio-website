interface Props {
  title: string;
  desc: string;
  tags: string[];
  image: string;
  live: boolean;
  gitlink?: string;
  link?: string;
}

function ProjectBox(props: Props) {
  let buttons;
  if (props.live) {
    buttons = (
      <div className="flex text-sm gap-2">
        <a href={props.gitlink}>
          <button className="group border rounded-lg px-4 py-2 flex items-center hover:border-zinc-800">
            View code
          </button>
        </a>
        <a href={props.link}>
          <button className="group border rounded-lg px-4 py-2 flex items-center hover:border-zinc-800">
            Live demo
          </button>
        </a>
      </div>
    );
  } else {
    buttons = (
      <div className="text-sm">
        <a href={props.gitlink}>
          <button className="group border rounded-lg px-4 py-2 flex items-center hover:border-zinc-800">
            View code
          </button>
        </a>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col md:flex-row shadow-md">
        <div className="flex-1">
          <div className="flex justify-center items-center flex-1">
            <img className="rounded-lg" src={props.image} />
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="flex py-4 flex-col justify-center items-center max-w-[90%] gap-4 text-center">
            <div className="text-lg font-medium">
              <h1>{props.title}</h1>
            </div>
            <div>
              <p>{props.desc}</p>
            </div>
            <div className="">
              {props.tags.map((prop) => {
                return (
                  <div className="bg-gray-100 inline-block px-1 mx-2 my-1">
                    <p>{prop}</p>
                  </div>
                );
              })}
            </div>
            <div>{buttons}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectBox;
