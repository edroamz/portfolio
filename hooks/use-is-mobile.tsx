import { useEffect, useState } from 'react';

const getIsMobile = () => window.innerWidth < 768;

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== 'undefined' ? getIsMobile() : false
  );

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    const handleResize = () => {
      setIsMobile(getIsMobile());
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return isMobile;
}
