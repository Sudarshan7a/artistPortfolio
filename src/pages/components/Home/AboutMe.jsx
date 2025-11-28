import logo from "../../../assets/images/profile/pro_sm.jpg";
import styles from "./About.module.css";
function AboutMe() {
  {
    /* two divs one for image rounded and one for text with 3 vaiant mini big and medium */
  }
  return (
    <div
      className={`flex ${styles.aboutMe} flex-col lg:flex-row p-10 xl:p-40 gap:10 xl:gap-24  bg-gradient-to-b from-[#DBE8ED] to-[#ADD8E6]`}
    >
      <div className="flex justify-center items-center min-w-[200px] w-[80%] m-auto p-4    2  xl:p-12">
        <img
          src={logo}
          alt="anime Profile"
          className="bg-[#D9D9D9] rounded-full "
        />
      </div>
      <div className="basis-1/3  flex pt-4 md:p-10 flex-col justify-center">
        <h2>HEYA!</h2>
        <h1 className="fadein">
          I&apos;M <br />
          <span>RONAL1710</span>
        </h1>
        <p className="text-textSecondary font-subtitle">
          A digital artist bringing anime-inspired worlds to life. Through
          intricate details and expressive characters, I create scenes that
          captivate and inspire. Explore my gallery to see my work, or connect
          to start a custom piece crafted to your vision.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
