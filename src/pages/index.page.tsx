/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useTheme } from "next-themes";
import { Layout } from "@app/components";

// import icons
import {
  JavascriptIcon,
  HtmlIcon,
  PythonIcon,
  GitIcon,
  LinuxIcon,
} from "@app/svgs";

const skills = [
  {
    text: "R",
    icon: LinuxIcon,
  },
  {
    text: "Python",
    icon: PythonIcon,
  },
  {
    text: "ArcGIS",
    icon: LinuxIcon,
  },
  {
    text: "Javascript",
    icon: JavascriptIcon,
  },
  {
    text: "HTML",
    icon: HtmlIcon,
  },
  {
    text: "Git",
    icon: GitIcon,
  },
  {
    text: "Linux",
    icon: LinuxIcon,
  },
  {
    text: "Adobe",
    icon: LinuxIcon,
  },
];

export const Index = (): JSX.Element => {
  const [mounted, setMounted] = React.useState(false);
  const { theme } = useTheme();
  // After mounting, we have access to the theme
  React.useEffect(() => setMounted(true), []);
  if (!mounted) {
    return null;
  }

  return (
    <Layout>
      <div className="m-auto px-4 md:px-10">
        <h1 className="text-center text-5xl font-bold pb-10 pt-0 md:pt-10">
          Megan Sorenson
        </h1>
        <div
          id="intro-section"
          className="py-5 flex flex-col md:flex md:flex-row"
        >
          <div className="flex flex-col text-xl justify-around">
            <p>
              Hi, I'm <b>Megan Sorenson</b>, a fourth year Conservation Biology
              student at the Univeristy of Alberta.
            </p>
            <p>
              I'm interested in data analysis and visualization of projects. I
              also have lots of experience in science communication, data
              collection, and leadership roles. I strive to demonstrate my
              passions and skills in my work, and challenge myself through any
              of my positions.
            </p>
          </div>
        </div>
        {/*skills section */}
        <div
          id="skills-section"
          className="grid grid-cols-3 md:grid-cols-4 gap-8 justify-items-center pt-8"
        >
          {skills.map(({ text, icon: Icon }) => (
            <div className="flex items-center" key={text}>
              {Icon && <Icon height={20} width={20} theme={theme} />}
              <div className="pl-2 flex">
                <p className="m-auto text-lg font-semibold">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
