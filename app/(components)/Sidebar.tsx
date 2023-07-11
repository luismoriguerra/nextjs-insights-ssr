import Link from "next/link";

function Sidebar() {
  return (
    <nav>
      <ul className="space-y-2">
        <li className="block p-2 rounded hover:bg-gray-300">
          <Link href="/">Insights Dashboard</Link>
        </li>
        <li className="block p-2 rounded hover:bg-gray-300">
          <Link href="/leaderboards">leaderboards</Link>
        </li>
        {/* <li>
          <a href="#" className="block p-2 rounded hover:bg-gray-300">
            Menu Item 2
          </a>
        </li>
        <li>
          <a href="#" className="block p-2 rounded hover:bg-gray-300">
            Menu Item 3
          </a>
        </li> */}
      </ul>
    </nav>
  );
}

export default Sidebar;
