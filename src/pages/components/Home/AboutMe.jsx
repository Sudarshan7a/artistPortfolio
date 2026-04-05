import logo from "../../../assets/images/profile/pro_sm.jpg";
import styles from "./About.module.css";

function AboutMe() {
  return (
    <section className="section-shell mt-12 md:mt-20 mb-10 md:mb-14">
      <div
        className={`flex ${styles.aboutMe} flex-col lg:flex-row p-5 sm:p-7 md:p-12 xl:p-16 gap-8 sm:gap-10 xl:gap-20 bg-gradient-to-b from-[#dfe8ff] to-[#c9def5] rounded-[32px] sm:rounded-[42px] border border-white/70 shadow-[0_24px_46px_rgba(13,20,36,0.09)]`}
      >
        <div className="flex justify-center items-center w-full max-w-[280px] sm:max-w-[320px] min-w-0 mx-auto p-2 sm:p-4 xl:p-6">
          <img
            src={logo}
            alt="anime Profile"
            className="bg-[#D9D9D9] rounded-full w-full h-auto"
          />
        </div>

        <div className="w-full min-w-0 flex pt-2 sm:pt-4 md:p-4 lg:p-8 flex-col justify-center max-w-lg lg:max-w-xl">
          <h2 className="text-base uppercase tracking-[0.16em]">
            Artist Profile
          </h2>
          <h1 className="fadein">
            I&apos;M <br />
            <span>RONAL1710</span>
          </h1>

          <p className="text-textSecondary font-subtitle mt-4 text-sm sm:text-base lg:text-lg line-clamp-none">
            A digital artist bringing anime-inspired worlds to life. Through
            intricate details and expressive characters, I create scenes that
            captivate and inspire. Explore my gallery to see my work, or connect
            to start a custom piece crafted to your vision.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
