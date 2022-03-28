import dynamic from "next/dynamic";
import dbConnect from "src/lib/DBConnect";
import Bio from "src/models/Bio";
import NavBar from "src/components/NavBar";
import LandingTop from "src/components/LandingTop";
import Experience from "src/components/Experience";
const Showcase = dynamic(() => import("src/components/Showcase"));
const Skillset = dynamic(() => import("src/components/Skillset"));
const Contact = dynamic(() => import("src/components/Contact"));
const Footer = dynamic(() => import("src/components/Footer"));
import bioInterface from "src/lib/Types";

export async function getServerSideProps() {
  await dbConnect();
  const res = await Bio.findOne().lean();
  const bio = JSON.parse(JSON.stringify(res));
  return {
    props: {
      bio,
    },
  };
}

const Home = ({ bio }: bioInterface) => {
  const scrollToExperience = () => {
    window.location.replace("/#experience");
  };
  const scrollToProject = () => {
    window.location.replace("/#project");
  };
  const scrollToSkills = () => {
    window.location.replace("/#skills");
  };

  const scrollToContact = () => {
    window.location.replace("/#contact");
  };
  return (
    <>
      <NavBar
        bio={bio}
        scrollToExperience={scrollToExperience}
        scrollToProject={scrollToProject}
        scrollToSkills={scrollToSkills}
        scrollToContact={scrollToContact}
      />
      <main className="wrapper">
        <LandingTop bio={bio} scrollToExperience={scrollToExperience} />
        <Experience bio={bio} />
        <Showcase bio={bio} />
        <Skillset bio={bio} />
        <Contact />
        <Footer bio={bio} />
      </main>
    </>
  );
};

export default Home;
