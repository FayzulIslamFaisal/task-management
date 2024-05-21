import HeroSection from "./components/HeroSection";
import TaskBoard from "./components/TaskBoard";


export default function Home() {
  return (
    <div className="bg-[#F6F6F6] py-[80px]">
      <HeroSection/>
      <TaskBoard/>
    </div>
  );
}
