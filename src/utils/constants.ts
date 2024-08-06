import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const fullTwConfig = resolveConfig(tailwindConfig);

const EMAIL = "/";
const GITHUB = "/";
const TWITTER = "/";
const LINKEDIN = "/";
const INSTAGRAM = "/";

const DISCORD_ID = "207204046115831809";

type Work = {
  company: string;
  position: string;
  link?: string;
  description: string;
};

const WORK: Work[] = [
  {
    company: "Portfolio ReactJS",
    position: "Frontend Developer",
    link: "/",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Consequat litora at arcu vitae morbi euismod erat faucibus facilisi. Finibus luctus accumsan arcu odio; dapibus convallis ridiculus.",
  },
  {
    company: "Portfolio VueJS",
    position: "Frontend Developer",
    link: "/",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Consequat litora at arcu vitae morbi euismod erat faucibus facilisi. Finibus luctus accumsan arcu odio; dapibus convallis ridiculus.",
  },
  {
    company: "Portfolio Angular",
    position: "Design & Frontend Developer",
    link: "/",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Consequat litora at arcu vitae morbi euismod erat faucibus facilisi. Finibus luctus accumsan arcu odio; dapibus convallis ridiculus.",
  },
  {
    company: "Portfolio NextJS",
    position: "Design & Frontend Developer",
    link: "/",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Consequat litora at arcu vitae morbi euismod erat faucibus facilisi. Finibus luctus accumsan arcu odio; dapibus convallis ridiculus.",
  },
  {
    company: "Portfolio NuxtJS",
    position: "Design & Frontend Developer",
    link: "/",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Consequat litora at arcu vitae morbi euismod erat faucibus facilisi. Finibus luctus accumsan arcu odio; dapibus convallis ridiculus.",
  },
];

export {
  EMAIL,
  TWITTER,
  GITHUB,
  LINKEDIN,
  INSTAGRAM,
  DISCORD_ID,
  WORK,
  fullTwConfig,
};
