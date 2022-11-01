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
    <div className="bg-white dark:bg-grey-1000 shadow hover:shadow-lg dark:shadow-none h-full dark:border-x-transparent dark:border-y dark:border-x sm:dark:border-grey-800 sm:dark:even:border-r-transparent sm:dark:odd:border-l-transparent lg:dark:even:border-grey-800 lg:dark:odd:border-grey-800 dark:border-grey-800 hover:transition-shadow rounded-lg break-words">
      <div className="h-full p-7">
        <div className="h-full flex flex-col justify-between gap-y-7">
          <div>
            <h2 className="text-xl mb-2">{title}</h2>
            <p>{excerpt}</p>
          </div>
          <div className="flex flex-row items-center justify-between gap-x-4">
            <a
              href={`/projects/${slug}`}
              rel="noreferrer"
              target="_blank"
              className="flex-1/2 flex flex-row items-center justify-center w-full px-1 h-10 border border-cobalt dark:border-cobalt/80 bg-cobalt/90 hover:bg-cobalt focus:bg-cobalt dark:bg-cobalt/90 dark:hover:bg-cobalt/75 dark:focus:bg-cobalt/75 text-white dark:text-grey-50 text-sm tracking-normal flex-nowrap hover:transition-colors focus:transition-colors rounded-[5px] break-words"
            >
              <span>
                Live Site
                <svg
                  className="inline-block stroke-current h-5 w-5 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                >
                  <path fill="none" d="M0 0h256v256H0z" />
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="18"
                    d="M64 192 192 64M88 64h104v104"
                  />
                </svg>
              </span>
            </a>
            <a
              href={`/projects/${slug}`}
              rel="noreferrer"
              target="_blank"
              className="flex-1/2 flex flex-row items-center justify-center w-full px-1 h-10 border border-grey-100 hover:border-grey-800 focus:border-grey-800 dark:border-grey-800 dark:hover:border-grey-50 dark:focus:border-gray-50 bg-transparent text-grey-500 dark:text-grey-400 dark:hover:text-grey-50 dark:focus:text-grey-50 text-sm tracking-normal flex-nowrap hover:transition-colors focus:transition-colors rounded-[5px] break-words "
            >
              <span>Source Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
