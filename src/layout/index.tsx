import { ReactNode } from "react";

interface ILayoutProps {
  children: JSX.Element | string | number | ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <header />
      <main>{children}</main>
      <footer />
    </>
  );
};

export default Layout;
