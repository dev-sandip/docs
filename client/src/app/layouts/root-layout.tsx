import { ReactNode } from "react";
import TopNavbar from "../components/navbar/top-nav";
import SideNav from "../components/navbar/side-nav";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex flex-col">
      <TopNavbar />
      <div className="flex">
        <SideNav />
        {children}
      </div>
    </main>
  );
};
export default RootLayout;
