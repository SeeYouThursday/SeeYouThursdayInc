import Head from "next/head";
import MeetTheTeam from "@/components/ui/MeetTheTeam";

const MeetTeam: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Meet The Team</title>
        <meta name="description" content="Meet our amazing team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MeetTheTeam />
      </main>
    </div>
  );
};

export default MeetTeam;