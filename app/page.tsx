import PollViewCard from "@/components/PollViewCard.tsx/PollViewCard";
import PollWriteCard from "@/components/PollWriteCard.tsx/PollWriteCard";

const Home = () => {
  return (
    <div className="flex flex-1 flex-col p-2 space-y-2 px-2">
      <PollWriteCard />
      <PollViewCard />
    </div>
  );
};

export default Home;
