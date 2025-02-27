import ShortClipComponent from "../components/ShortClipComponent";
import ThumpnailComponent from "../components/ThumpnailComponent";

const HomePage = () => {
   return (
      <div className="flex justify-center bg-linear-45 from-indigo-500 via-purple-500 to-pink-500">
         <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 min-h-screen items-center p-3">
               <div className="order-2 sm:order-1 text-white">
                  <div className="sm:hidden">
                     <p className="font-bold text-2xl">
                        Hi I'm <u>Jagarrin Garngasame</u>
                     </p>
                     <p className="font-medium sm:text-4xl text-amber-400">Web Developer and Game Developer</p>
                     <p className="sm:text-xl">
                        I'm a dedicated programmer with five years of experience, a particular interest in Unity game
                        development, and I'm now enthusiastically pursuing full-stack development skills.
                     </p>
                  </div>
                  <div className="not-sm:hidden">
                     <p className=" font-bold sm:text-4xl">
                        <b>Hi</b> I'm <u>Jagarrin Garngasame</u>
                     </p>
                     <p className="font-medium sm:text-2xl text-amber-400">Web Developer and Game Developer</p>
                     <p className="sm:text-xl">
                        I'm a dedicated programmer with five years of experience, a particular interest in Unity game
                        development, and I'm now enthusiastically pursuing full-stack development skills.
                     </p>
                  </div>
               </div>
               <div className="flex flex-col justify-center order-1 sm:order-2">
                  <img
                     className="rounded-full"
                     src="/src/assets/451311549_2213494752358625_2499551800465362640_n.jpg"
                     alt="picture"
                  />
                  <a href="">
                     <p className="text-center font-bold text-white">
                        <u>My Github</u>
                     </p>
                  </a>
               </div>
            </div>
            <div className="p-5 bg-white rounded-2xl">
               <ThumpnailComponent />
               <ShortClipComponent />
            </div>
            <div className="h-5"></div>
         </div>
      </div>
   );
};
export default HomePage;
