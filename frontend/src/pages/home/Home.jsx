import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="flex w-full max-w-3xl h-[400px] sm:h-[450px] md:h-[550px] lg:h-[650px] 
      rounded-lg overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 
      border border-transparent shadow-2xl">
        <Sidebar/>
        <MessageContainer/>
      </div>
    </div>
  );
};

export default Home;