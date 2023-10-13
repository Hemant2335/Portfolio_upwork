import React , {useEffect , useState} from "react";
import { FiHome } from "react-icons/fi";

const Intro = () => {
    const [displayedText, setDisplayedText] = useState("");
    const text = "Nishant Kumar...";

    const typewriter = ()=>
    {
        if(displayedText.length < text.length)
        {
            setDisplayedText(text.slice(0,displayedText.length+1));
        }
        else
        {
            setDisplayedText("N");
        }
    }

 

    useEffect(() => {
        const interval = setInterval(() => {
            typewriter();
        }, 300);

        return () => clearInterval(interval);
    }, [displayedText]);



  return (
    <div className="w-full h-fit mt-[10vh] md:mt-[10vh] title">
      <div className="flex items-center info gap-[1vh] text-sm rounded-2xl border-2 text-gray-400 w-fit h-fit py-2 border-gray-400 px-5">
        <FiHome />
        <h2 className=" font-Jetbrains">Introduction</h2>
      </div>

      <div className="w-full text-left mt-[10vh] title">
        <div className="md:flex items-center gap-[2vh] font-bold text-2xl md:text-4xl">
          <h1>Hello world! It's</h1>
          <h1 className="font-bold md:mt-0 mt-[2vh] text-2xl md:text-4xl text-[#097969]">{displayedText}</h1>
        </div>
        <h1 className="mt-[2vh] font-bold text-2xl md:text-4xl">
          Full Stack Developer and
        </h1>{" "}
        <h1 className=" font-bold text-2xl md:text-4xl">Freelancer</h1>
      </div>

      <div className="max-w-[80vh] text-gray-400 text-left mt-[3vh] title">
        <p>
          I'm a passionate designer and coder dedicated to crafting beautifully
          simple digital solutions. I find joy in creating elegant,
          user-friendly designs through clean, efficient code. With a keen eye
          for detail, I love what I do and bring creativity to every project.
        </p>
      </div>

      <div className="w-full text-left mt-[10vh] font-bold title">
        <div className="flex items-center gap-[2vh]">
        <h1>Position :</h1>
        <h1 className="text-[#097969]">Coordinator GDSC JUET</h1>
        </div>
      </div>
    </div>
  );
};

export default Intro;
