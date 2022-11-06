import { type NextPage } from "next";
import TrpcExample from "../components/TrpcExample";
const Home: NextPage = () => {
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-5">
        <h1 className="text-5xl font-black">t3 Stack Overview</h1>
        <TrpcExample />
      </div>
    </>
  );
};

export default Home;
