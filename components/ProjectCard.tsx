interface IProjectCardProps {
  slug: string;
  title: string;
  excerpt: string;
}

export default function ProjectCard({
  slug,
  title,
  excerpt
}: IProjectCardProps) {
  return (
    <div className="bg-white dark:bg-grey-980 shadow hover:shadow-lg dark:shadow-none h-full dark:border-x-0 dark:border-y md:dark:border border-color hover:transition-shadow rounded-lg break-words">
      <div className="h-full p-7">
        <div className="h-full flex flex-col justify-between gap-y-7">
          <div>
            <h2 className="text-xl mb-2">{title}</h2>
            <p>{excerpt}</p>
          </div>
          <div className="flex flex-row items-center justify-between gap-x-4">
            <a
              className="block flex-1/2"
              href={`/projects/${slug}`}
              rel="noreferrer"
              target="_blank"
            >
              <button className="flex flex-row items-center justify-center w-full px-1 h-10 border border-cobalt dark:border-cobalt/80 bg-cobalt/90 hover:bg-cobalt dark:bg-cobalt/90 dark:hover:bg-cobalt/75 text-white dark:text-grey-50 text-sm tracking-normal flex-nowrap hover-transition-colors rounded-[5px] break-words">
                <span>
                  Live Site
                  <svg
                    className="inline-block stroke-current h-4 w-4 ml-[6px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                  >
                    <path fill="none" d="M0 0h256v256H0z" />
                    <path
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                      d="M64 192 192 64M88 64h104v104"
                    />
                    {/* <path fill="none" d="M0 0h256v256H0z" />
                          <path
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="20"
                            d="M216 100V40h-60M144 112l72-72M184 144v64a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h64"
                          /> */}
                    {/* <path fill="none" d="M0 0h256v256H0z" />
                          <path
                            d="m132.5 61.3 9.6-9.7a44.1 44.1 0 0 1 62.3 62.3l-30.3 30.2a43.9 43.9 0 0 1-62.2 0"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="18"
                          />
                          <path
                            d="m123.5 194.7-9.6 9.7a44.1 44.1 0 0 1-62.3-62.3l30.3-30.2a43.9 43.9 0 0 1 62.2 0"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="18"
                          /> */}
                  </svg>
                </span>
              </button>
            </a>
            <a
              className="block flex-1/2"
              href={`/projects/${slug}`}
              rel="noreferrer"
              target="_blank"
            >
              <button className="flex flex-row items-center justify-center w-full px-1 h-10 border border-grey-100 hover:border-grey-800 dark:border-grey-700 dark:hover:border-grey-50 bg-transparent text-grey-500 dark:text-grey-400 dark:hover:text-grey-50 text-sm tracking-normal flex-nowrap hover-transition-colors rounded-[5px] break-words ">
                <span>Source Code</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
