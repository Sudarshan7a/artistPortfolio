import logo from "../../../assets/images/profile/pro_sm.jpg";
import styles from "./About.module.css";
function AboutMe() {
  {
    /* two divs one for image rounded and one for text with 3 vaiant mini big and medium */
  }
  return (
    <div
      className={`flex ${styles.aboutMe} p-40 gap-24 h-[780px] bg-gradient-to-b from-[#DBE8ED] to-[#ADD8E6]`}
    >
      <div className="flex justify-center items-center basis-1/2 p-12">
        <img src={logo} className="bg-[#D9D9D9] rounded-full " />
      </div>
      <div className="basis-1/3 flex flex-col justify-center">
        <h2>HEYA!</h2>
        <h1>
          I&apos;M <br />
          <span>RONAL1710</span>
        </h1>
        <p className="text-textSecondary font-subtitle">
          I am a web developer with a passion for learning and sharing my
          knowledge with others. I have a strong foundation in JavaScript,
          React, and Node.js, and I am always looking to expand my skill set. I
          am currently working on a project that will help people learn to code
          more effectively. I love to help others and am always looking for new
          ways to do so.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
