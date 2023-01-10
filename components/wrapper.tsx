import { PropsWithChildren } from 'react';

const Wrapper = ({
  children
}: PropsWithChildren<JSX.IntrinsicElements['div']>) => {
  return (
    <div className="flex flex-none flex-col justify-center gap-y-28 md:gap-y-32 max-w-5xl mx-auto px-7 py-16 md:py-20">
      {children}
    </div>
  );
};

export { Wrapper };
