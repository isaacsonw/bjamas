/** @format */
import { FC } from 'react';
import NavigationBar from '@components/NavBar';

interface Props {}

const Layout: FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <main {...props} className="mx-5 md:mx-24">
        <NavigationBar />
        <div className="mt-24">{children}</div>
      </main>
    </>
  );
};

export default Layout;
