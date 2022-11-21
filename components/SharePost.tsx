import ExternalLink from 'components/ExternalLink';

type SharePostProps = {
  postUrl: string;
  postTitle: string;
};

export default function SharePost({
  postUrl,
  postTitle
}: SharePostProps): JSX.Element {
  const twitterUrl = `https://twitter.com/intent/tweet?url=${postUrl}&text=${postTitle}`;
  const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${postUrl}&title=${postTitle}`;
  const facebookUrl = `https://www.facebook.com/sharer.php?u=${postUrl}`;

  return (
    <div className="flex flex-col items-center justify-center gap-y-6">
      <p className="text-xs font-medium text-grey-500 dark:text-grey-400">
        Share this post
      </p>
      <div className="flex flex-row items-center justify-center gap-x-7">
        <ExternalLink href={twitterUrl}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-5 w-5 text-grey-600 group-hover:text-grey-800 dark:text-grey-150 dark:group-hover:text-grey-100"
            viewBox="0 0 512 512"
            role="img"
            focusable="false"
          >
            <path d="M496 109.5a201.8 201.8 0 0 1-56.55 15.3 97.51 97.51 0 0 0 43.33-53.6 197.74 197.74 0 0 1-62.56 23.5A99.14 99.14 0 0 0 348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 0 0 2.54 22.1 280.7 280.7 0 0 1-203-101.3A95.69 95.69 0 0 0 36 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0 1 35.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 0 1-25.94 3.4 94.38 94.38 0 0 1-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0 1 39.5 405.6a203 203 0 0 1-23.5-1.4A278.68 278.68 0 0 0 166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 0 0 496 109.5z" />
          </svg>
        </ExternalLink>
        <ExternalLink href={linkedinUrl}>
          <svg
            className="h-5 w-5 text-grey-600 group-hover:text-grey-800 dark:text-grey-150 dark:group-hover:text-grey-100"
            fill="currentColor"
            viewBox="0 0 16 16"
            role="img"
            focusable="false"
          >
            <path d="M12.1 15H15L15 9.87c0-2.519-.542-4.454-3.48-4.454-1.121-.042-2.218.54-2.784 1.51V5.648H5.953V15h2.899v-4.626c0-1.22.23-2.4 1.74-2.4 1.489 0 1.508 1.395 1.508 2.48V15ZM1 2.685c0 .924.76 1.685 1.682 1.685.923 0 1.682-.761 1.682-1.686C4.364 1.76 3.604 1 2.682 1 1.76 1 1 1.76 1 2.685ZM1.23 15h2.902V5.648H1.23V15Z"></path>
          </svg>
        </ExternalLink>
        <ExternalLink href={facebookUrl}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-5 w-5 text-grey-600 group-hover:text-grey-800 dark:text-grey-150 dark:group-hover:text-grey-100"
            viewBox="0 0 512 512"
            role="img"
            focusable="false"
          >
            <path
              fillRule="evenodd"
              d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
            />
          </svg>
        </ExternalLink>
      </div>
    </div>
  );
}
