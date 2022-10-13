import type { NextPage } from 'next';
import Link from 'next/link';

import Container from 'components/Container';
import BlogPost from 'components/BlogPost';
import { getAllPosts } from 'lib/mdx';
import { PostType } from 'lib/types';

const Home: NextPage = ({ allPosts }: any) => {
  return (
    <Container>
      <div className="max-w-4xl mx-auto py-12 md:py-14 px-5 sm:px-12 lg:px-6">
        <div className="mb-6 md:mb-8">
          <svg
            className="h-16 w-16 md:w-[4.5rem] md:h-[4.5rem]"
            viewBox="0 0 150 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_205_1000)">
              <rect
                className="fill-indigo-300/50 dark:fill-indigo-300"
                width="150"
                height="150"
                rx="75"
              />
              <path
                d="M54.4842 43.5312C78.8503 21.5084 96.1415 37.1524 101.738 47.754C103.13 49.6689 105.642 55.4614 104.478 63.4757C103.024 73.4934 86.8037 86.2099 87.1326 88.0612C91.8339 100.372 101.946 107.571 106.406 109.618L92.9201 139.416C84.7056 133.647 68.2045 121.896 68.0457 121.036C57.2139 104.93 54.9631 92.1225 54.9631 92.1225C46.8615 91.7082 24.0094 71.0828 54.4842 43.5312Z"
                fill="#F0DED1"
              />
              <path
                d="M52.3347 64.7894C52.3347 64.7894 48.486 61.3234 49.4868 59.0278C50.131 57.5613 58.6817 51.9041 58.6817 51.9041"
                stroke="black"
                strokeWidth="2.58731"
                strokeLinecap="round"
              />
              <path
                d="M83.5545 78.1073C81.2764 77.8918 80.0917 76.7244 79.7627 76.1666C79.6068 76.7923 79.5389 78.1603 80.5032 78.497C81.508 78.8531 82.9704 78.3778 83.5545 78.1073Z"
                fill="#CA8C5B"
              />
              <path
                d="M91.4757 67.6741C88.8223 66.7094 85.9837 68.5406 84.8704 69.5522C84.8704 69.5522 88.0411 68.6747 90.1193 68.8683C92.0957 69.0632 93.1139 70.617 93.1139 70.617C93.1702 69.8979 92.9561 68.3042 91.4757 67.6741Z"
                fill="#CA8C5B"
              />
              <path
                d="M75.2613 84.461C75.2613 84.461 70.8295 88.4118 54.3461 91.7732C54.3461 91.7732 57.129 102.518 61.1676 108.768C71.0267 93.3759 75.2613 84.461 75.2613 84.461Z"
                fill="#CA8C5B"
              />
              <path
                d="M57.418 91.0829C61.6631 90.4321 74.7928 86.1477 79.8399 81.4975"
                stroke="black"
                strokeWidth="2.58731"
                strokeLinecap="round"
              />
              <path
                d="M87.842 22.7082C84.5686 14.4649 74.6756 0.866342 61.4307 12.3348C49.6849 22.4891 76.9205 41.5013 91.7229 54.4408C93.6209 56.0752 89.5653 64.2758 89.5653 64.2758C93.7559 62.7856 100.35 65.5009 97.0951 71.6168C94.2927 76.8925 85.9935 79.0288 85.1681 78.5751C85.1681 78.5751 85.6991 81.7146 88.3504 87.7339C96.202 82.8021 112.635 70.7433 115.365 62.0972C118.764 51.2771 119.051 33.2774 108.879 24.9743C100.745 18.3235 96.5195 21.3884 95.4307 23.7114C95.7658 22.1319 95.5631 18.7738 92.0507 17.9173C89.5216 17.2884 87.7831 20.7594 87.842 22.7082Z"
                fill="black"
              />
              <path
                d="M70.7578 56.0594C70.5823 55.02 69.6222 54.3193 68.6132 54.4943C67.6043 54.6693 66.9286 55.6538 67.1041 56.6932C67.2796 57.7326 68.2398 58.4333 69.2487 58.2583C70.2577 58.0833 70.9333 57.0988 70.7578 56.0594Z"
                fill="black"
              />
              <path
                d="M55.255 48.0549C55.8504 47.1997 55.8459 46.1806 55.2448 45.7789C54.6437 45.3771 53.6737 45.7448 53.0782 46.6001C52.4827 47.4554 52.4873 48.4744 53.0884 48.8761C53.6895 49.2779 54.6595 48.9102 55.255 48.0549Z"
                fill="black"
              />
              <path
                d="M149.948 141.146C131.416 117.073 104.094 105.009 92.8656 102C73.3652 112.857 64.3375 107.753 61.0632 105.897C60.3473 105.486 59.8966 105.235 59.6845 105.354C59.4724 105.46 58.8891 105.672 58.0009 106.003C53.7854 107.568 42.8222 111.637 33.304 118.04C23.2026 124.841 13.6579 135.512 5.02788 145.176C-4.42402 155.742 -12.7756 165.088 -19.5497 166.771C-32.3688 169.966 -50.8218 143.864 -55.3953 137.408C-55.9256 136.666 -56.2703 136.175 -56.3896 136.029L-73 170.337C-60.8703 180.465 -34.2512 201.026 -24.8523 202.233C-11.3307 203.969 -1.14965 194.027 8.66017 184.456C14.4665 178.782 20.1403 173.254 26.2913 170.337C39.5346 164.08 39.5346 170.337 39.5346 170.337L20.8827 236.235L120.479 253.986V236.235C135.127 232.829 166.267 222.091 173.73 206.448C183.05 186.881 173.121 171.226 149.948 141.146ZM118.981 204.301L117.854 159.547C124.708 163.311 139.051 173.108 141.583 182.149C144.115 191.19 127.571 200.682 118.981 204.301Z"
                fill="#FAFAFA"
              />
              <path
                d="M38.7671 162.847C37.9585 160.077 37.6138 154.045 39.4564 148.888"
                stroke="black"
                strokeWidth="1.06052"
                strokeLinecap="round"
              />
              <path
                d="M61.4453 106.003C65.5283 108.482 77.2603 111.319 91.5376 102.769"
                stroke="black"
                strokeWidth="1.06052"
                strokeLinecap="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_205_1000">
                <rect width="150" height="150" rx="75" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h1 className="text-black dark:text-white text-3xl sm:text-4xl md:text-5xl font-bold w-full md:max-w-2xl mb-4 md:mb-6">
          FrontEnd Engineer, JavaScript Developer
        </h1>
        <p className="max-w-xl text-gray-700 dark:text-gray-400 text-base lg:text-lg">
          I’m Eduardo. I write scode, design & build web products. Lorem ipsum
          dolor sit amet consectetur.
        </p>
      </div>
      <div className="w-full py-12 md:py-14 mb-12">
        <div className="max-w-4xl mx-auto px-5 sm:px-12 lg:px-6 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold w-full md:max-w-xl">
            Take a sneak peek of my work
          </h2>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-start px-6 lg:px-6 w-full gap-6">
          <div className="border rounded-lg border-zinc-200 dark:border-zinc-700 h-[24rem] bg-zinc-100 dark:bg-zinc-800"></div>
          <div className="border rounded-lg border-zinc-200 dark:border-zinc-700 h-[24rem] bg-zinc-100 dark:bg-zinc-800"></div>
        </div>
        <div className="max-w-4xl mx-auto px-5 sm:px-12 lg:px-6 w-full py-6">
          <Link href="/projects">
            <a className="inline-block text-indigo-600 dark:text-indigo-300 font-medium">
              View more →
            </a>
          </Link>
        </div>
      </div>
      <div className="w-full mb-28">
        <div className="max-w-4xl mx-auto px-5 sm:px-12 lg:px-6 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold w-full md:max-w-xl">
            Featured Posts
          </h2>
        </div>
        <div className="w-full md:px-12 lg:px-6 max-w-4xl mx-auto">
          <div className="relative grid gap-y-2 max-w-4xl mx-auto">
            <hr className="absolute left-0 top-[2%] w-0 h-[96%] border-l border-gray-200 dark:border-zinc-800 hidden md:block " />
            {allPosts &&
              allPosts.map((post: PostType) => (
                <BlogPost key={post.slug} post={post}></BlogPost>
              ))}
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-5 sm:px-12 lg:px-6 w-full py-6">
          <Link href="/blog">
            <a className="inline-block text-indigo-600 dark:text-indigo-300 font-medium">
              Read all posts →
            </a>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'datePublished',
    'slug',
    'author',
    'coverImage',
    'excerpt'
  ]);

  return {
    props: { allPosts }
  };
};

export default Home;
