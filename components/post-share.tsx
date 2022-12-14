import { ExternalLink } from 'components/links/external-link';
import { FacebookIcon } from 'components/icons/facebook';
import { TwitterIcon } from 'components/icons/twitter';
import { LinkedInIcon } from 'components/icons/linkedin';

type PostShareProps = {
  postUrl: string;
  postTitle: string;
};

function PostShare({ postUrl, postTitle }: PostShareProps): JSX.Element {
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
          <TwitterIcon
            label="Share this post on Twitter"
            size="sm"
            decorative
          ></TwitterIcon>
        </ExternalLink>
        <ExternalLink href={linkedinUrl}>
          <LinkedInIcon
            label="Share this post on LinkedIn"
            size="sm"
            decorative
          ></LinkedInIcon>
        </ExternalLink>
        <ExternalLink href={facebookUrl}>
          <FacebookIcon
            label="Share this post on Facebook"
            size="sm"
            decorative
          ></FacebookIcon>
        </ExternalLink>
      </div>
    </div>
  );
}

export { PostShare };
