import { Outlet } from "react-router-dom";

// Import your providers here

export function AppLayout() {
  return (
    <main>
      <Outlet />
    </main>
  );
}
