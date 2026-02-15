import { Outlet } from "react-router";

export default function Services() {
  return (
    <div>
      <h1>Services</h1>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
