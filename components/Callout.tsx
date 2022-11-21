import { ReactNode } from 'react';

type CalloutProps = {
  emoji?: ReactNode;
  children: ReactNode;
};

function Callout({ emoji, children }: CalloutProps): JSX.Element {
  return (
    <div className="flex flex-row gap-x-3 bg-grey-0 dark:bg-grey-950 border border-grey-700 dark:border-grey-200 rounded-md px-4 py-3 mt-10">
      {emoji && <div className="flex flex-col items-baseline">{emoji}</div>}
      <div className="[&_p]:text-[0.95em] [&_p:first-child]:m-0 [&_p:not(first-child)]:mt-5 [&_p]:leading-8 [&_p]:text-grey-1000 dark:[&_p]:text-grey-80">
        {children}
      </div>
    </div>
  );
}

export default Callout;
