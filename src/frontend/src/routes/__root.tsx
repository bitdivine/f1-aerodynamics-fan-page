import { Outlet, createRootRoute } from "@tanstack/react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
