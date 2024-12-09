import { NavLink } from "react-router-dom";
import Button from "./components/Button";

function PageNotFound() {
  return (
    <div className="bg-primaryColor flex flex-col items-center justify-center gap-8 h-screen w-full mx-auto text-textPrimary">
      <div className="w-1/2 md:w-1/3 lg:w-1/4 overflow-hidden rounded-full">
        <img
          className="object-bottom"
          src="images/char_jinshi.jpg"
          alt="Page not found Image"
        />
      </div>
      <p className="text-xl">oh! its seems you are lost.</p>
      <NavLink to="/">
        <Button variant={0} h={8}>
          Let&apos;s go Home
        </Button>
      </NavLink>
    </div>
  );
}

export default PageNotFound;
