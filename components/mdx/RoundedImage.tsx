import Image from 'next/image';
import { ComponentPropsWithoutRef } from 'react';

type RoundedImageProps = ComponentPropsWithoutRef<typeof Image> & {
  caption: string | undefined;
};

export default function RoundedImage({
  caption,
  alt,
  ...props
}: RoundedImageProps): JSX.Element {
  return caption ? (
    <figure className="flex flex-col items-center justify-center my-8">
      <Image alt={alt} className="rounded-lg" {...props}></Image>
      <figcaption className="text-base text-center text-grey-880 dark:text-grey-200 px-4 pt-5">
        {caption}
      </figcaption>
    </figure>
  ) : (
    <div className="flex flex-col items-center justify-center mt-8">
      <Image alt={alt} className="rounded-lg" {...props}></Image>
    </div>
  );
}
