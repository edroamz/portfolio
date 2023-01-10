import { ReactNode } from 'react';

type CalloutProps = {
  emoji?: ReactNode;
  children: ReactNode;
};

function Callout({ emoji, children }: CalloutProps): JSX.Element {
  return (
    <div className="flex flex-row gap-x-3 bg-grey-0 dark:bg-grey-900 border border-l-4 border-grey-700 dark:border-grey-200 rounded-md px-4 py-3 mt-8">
      {emoji && <div className="flex flex-col items-baseline">{emoji}</div>}
      <div className="text-base [&_p]:text-base [&_p:first-child]:m-0 [&_p:not(first-child)]:mt-5 [&_p]:leading-8 leading-8 [&_p]:tracking-normal tracking-normal [&_p]:text-grey-1000 text-grey-1000 dark:[&_p]:text-grey-80 dark:text-grey-80">
        {children}
      </div>
    </div>
  );
}

export { Callout };
