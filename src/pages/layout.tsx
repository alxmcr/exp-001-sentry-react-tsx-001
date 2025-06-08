import { Outlet } from "react-router";
import { AppFooter } from "../components/sections/app-footer";
import { AppHeader } from "../components/sections/app-header";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
}
