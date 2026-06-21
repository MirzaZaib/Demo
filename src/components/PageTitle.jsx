import { useEffect } from 'react';

const PageTitle = ({ title }) => {
  useEffect(() => {
    document.title = title ? `${title} | NEXUS` : 'NEXUS | Premium Tech & Laptop Store';
  }, [title]);

  return null;
};

export default PageTitle;
