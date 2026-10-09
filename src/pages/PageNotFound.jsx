import { NavLink } from "react-router-dom";
import Button from "./components/Button";

function PageNotFound() {
  return (
    <main className="bg-primaryColor flex flex-col items-center justify-center gap-8 min-h-dvh w-full mx-auto text-textPrimary px-4 py-10">
      <div className="w-1/2 md:w-1/3 lg:w-1/4 overflow-hidden rounded-full">
        <img
          className="object-bottom"
          src="images/char_jinshi.jpg"
          alt="Page not found Image"
        />
      </div>
      <p className="text-xl">Oh! It seems you are lost.</p>
      <NavLink to="/">
        <Button variant={0}>Let&apos;s go Home</Button>
      </NavLink>
    </main>
  );
}

export default PageNotFound;
