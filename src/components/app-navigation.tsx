import { Link } from "react-router";

export function AppNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/political-party">Political Party</Link>
        </li>
      </ul>
    </nav>
  );
}
