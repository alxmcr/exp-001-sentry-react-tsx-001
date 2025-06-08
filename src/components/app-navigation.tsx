import { NavLink } from "react-router-dom";
import { AppIcon24x24 } from "./icons/24x24/AppIcon24x24";

export function AppNavigation() {
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="flex justify-between items-center">
        <NavLink to="/">
          <AppIcon24x24 icon="icon-politics-vote" className="text-red-300" />
        </NavLink>
      </div>
      <ul className="flex gap-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? "text-yellow-300 underline underline-offset-4" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/political-party"
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? "text-yellow-300 underline underline-offset-4" : ""
            }
          >
            Political Party
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
