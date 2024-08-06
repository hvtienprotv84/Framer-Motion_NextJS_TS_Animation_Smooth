import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import AnimatedPage from "../components/PageWrapper";
import Link from "next/link";

export default function About() {
  return (
    <AnimatedPage>
      <Head>
        <title>Tiến - Framer Motion - About</title>
        <meta
          name="description"
          content="Xin chào, Tôi là Huỳnh Vĩnh Tiến"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_1.png" />
      </Head>

      <div className="title__wrapper">
        <AnimatedText element="h1" text="About" />
      </div>
      <p className="text-[16px]">
        Xin chào, Tôi là Huỳnh Vĩnh Tiến, Lorem ipsum odor amet, consectet adipiscing elit. Consequat litora at arcu vitae morbi euismod erat faucibus facilisi. Finibus luctus accumsan arcu odio; dapibus convallis ridiculus.
      </p>
      <br />

      <p className="text-[16px]">
        Lorem ipsum odor amet, consectet adipiscing elit. Consequat litora at arcu vitae morbi euismod erat faucibus facilisi. Finibus luctus accumsan arcu odio; dapibus convallis ridiculus.
      </p>

      <br />
      <p className="text-[14px]">
        Mọi người có thể tham khảo tại{" "}
        <Link href="/" target="_blank">
          Github
        </Link>
      </p>
    </AnimatedPage>
  );
}
