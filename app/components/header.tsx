import { NavLink } from "@/components/ui/nav-link";

export default function Header() {
  return (
    <header className="p-2 flex gap-2 bg-background max-w-screen-lg mx-auto justify-between">
      <nav className="flex flex-row">
        <div className="px-2 font-bold">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="px-2 font-bold">
          <NavLink to="/buttons">Buttons</NavLink>
        </div>
        <div className="px-2 font-bold">
          <NavLink to="/icon-buttons" className="text-sm font-bold">
            Icon Buttons
          </NavLink>
        </div>
        <div className="px-2 font-bold">
          <NavLink to="/link-buttons" className="text-sm font-bold">
            Link Buttons
          </NavLink>
        </div>
        <div className="px-2 font-bold">
          <NavLink to="/badge" className="text-sm font-bold">
            Badge
          </NavLink>
        </div>
        <div className="px-2 font-bold">
          <NavLink to="/inputs" className="text-sm font-bold">
            Inputs
          </NavLink>
        </div>
        <div className="px-2 font-bold">
          <NavLink to="/select" className="text-sm font-bold">
            Select
          </NavLink>
        </div>
        <div className="px-2 font-bold">
          <NavLink to="/text" className="text-sm font-bold">
            Text
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
