import React, { useEffect, useState } from "react";
import logo from "./logo.png";
import speaker from "./speaker.png";
import about from "./about.jpg";
import { MdContactSupport } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const App = () => {
  const [count, setCount] = useState(600);
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 0) {
          clearInterval(timer);
          console.log("Timeout reached!");
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    setTimeout(() => {
      setShowDiv(true);
    }, 80000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(count / 60);
  const seconds = count % 60;

  return (
    <div className="relative">
      <div
        className={`bg-sage font-sans min-h-screen p-10 ${
          showDiv ? "opacity-60" : "opacity-100"
        }`}
      >
        <div className="flex flex-row justify-start items-center gap-3 text-white lg:text-3xl  lg:p-2 rounded-3xl">
          <div className="w-10 lg:w-20">
            <img src={logo} alt="logo" />
          </div>
          <div className="font-bold lg:text-4xl ">D2C Masters</div>
        </div>

        <div className="flex flex-row flex-wrap-reverse w-full justify-center items-center bg-grey mt-5 lg:mt-10 rounded-3xl p-4">
          <div className="flex flex-col w-full lg:w-1/2  gap-5 lg:gap-10  pl-0 lg:pl-10">
            <div className=" p-3 lg:p-0 text-3xl lg:text-6xl text-royal font-bold">
              Ignite Your Culinary Passion, Transform Your Brand: Unleash the
              Power of D2C Innovation!
            </div>
            <div className=" p-3 lg:p-0 lg:text-5xl font-semibold text-sage">
              Embark on a Flavorful Journey with{" "}
              <strong className="text-royal">Darsheel Savla</strong>
            </div>

            <div className="text-sm lg:text-2xl  bg-royal rounded-3xl text-center m-2 lg:m-0 py-2 lg:py-4 hover:scale-110 hover:cursor-pointer">
              Join the Movement to Revolutionize the Culinary Landscape!
            </div>
          </div>

          <div className=" lg:w-1/2 flex flex-row  justify-center opacity-90 rounded-full w-[20rem]">
            {" "}
            <img src={speaker} alt="speaker" />
          </div>
        </div>

        <div className="flex flex-col  bg-grey mt-10 rounded-3xl p-5 lg:p-10">
          <div className="w-full flex flex-row  flex-wrap lg:m-10 justify-center items-center">
            <div className=" w-full lg:w-1/2 flex flex-row justify-center">
              <img
                src={about}
                alt="about"
                width={500}
                className="rounded-3xl"
              />
            </div>
            <div className="w-full lg:w-1/2 p-10 lg:text-3xl flex flex-col gap-5">
              <div className="lg:text-6xl bg-royal font-bold rounded-3xl p-4 text-center ">
                About our Speaker
              </div>
              <div className="font-thin">
                <strong className="text-royal">Darsheel Savla</strong>, the
                dynamic co-founder behind PatilKaki, embodies the essence of
                innovation and creativity in the culinary world. With an
                unwavering passion for food, people, and brand building,
                Darsheel has dedicated himself to bringing the legendary recipes
                of PatilKaki to the forefront of the global stage.
              </div>
            </div>
          </div>
          <div className=" text-sm lg:text-2xl font-semibold bg-royal rounded-3xl text-center py-4 hover:scale-105 hover:cursor-pointer">
            Are you ready to embark on a transformative culinary journey? Join
            Darsheel and unlock the secrets to culinary success today!
          </div>
        </div>

        <div className="flex flex-col  bg-grey mt-10 rounded-3xl p-5 lg:p-10 justify-center items-center">
          <div className="text-royal text-3xl lg:text-5xl font-bold my-10">
            Why should You go ahead with Me?
          </div>
          <div className="flex flex-row flex-wrap items-center justify-center gap-10">
            <div className="transparent  p-5 flex flex-col justify-center items-center shadow-2xl text-xl lg:text-4xl gap-3 rounded-3xl hover:scale-105 hover:cursor-pointer w-[15rem] lg:w-[30rem]">
              <MdContactSupport className="text-royal" />
              <div className="font-bold text-sage">Expert Guidance</div>
            </div>
            <div className="transparent  p-5 flex flex-col justify-center items-center shadow-2xl text-xl lg:text-4xl gap-3 rounded-3xl hover:scale-105 hover:cursor-pointer w-[15rem] lg:w-[30rem]">
              <MdContactSupport className="text-royal" />
              <div className="font-bold text-sage">Innovative Solutions</div>
            </div>
            <div className="transparent  p-5 flex flex-col justify-center items-center shadow-2xl text-xl lg:text-4xl gap-3 rounded-3xl hover:scale-105 hover:cursor-pointer w-[15rem] lg:w-[30rem]">
              <MdContactSupport className="text-royal" />
              <div className="font-bold text-sage">Proven Track Record</div>
            </div>
            <div className="transparent  p-5 flex flex-col justify-center items-center shadow-2xl text-xl lg:text-4xl gap-3 rounded-3xl hover:scale-105 hover:cursor-pointer w-[15rem] lg:w-[30rem]">
              <MdContactSupport className="text-royal" />
              <div className="font-bold text-sage">D2C Mastery</div>
            </div>
            <div className="transparent  p-5 flex flex-col justify-center items-center shadow-2xl text-xl lg:text-4xl gap-3 rounded-3xl hover:scale-105 hover:cursor-pointer w-[15rem] lg:w-[30rem]">
              <MdContactSupport className="text-royal" />
              <div className="font-bold text-sage">Passion for Results</div>
            </div>
            <div className="transparent  p-5 flex flex-col justify-center items-center shadow-2xl text-xl lg:text-4xl gap-3 rounded-3xl hover:scale-105 hover:cursor-pointer w-[15rem] lg:w-[30rem]">
              <MdContactSupport className="text-royal" />
              <div className="font-bold text-sage ">Personalized Support</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col  bg-grey mt-10 rounded-3xl p-5 lg:p-10 justify-center items-center gap-10">
          <div className="text-4xl lg:text-6xl font-bold text-royal text-center">
            Time is running out,
            <br />
            Grab your spots now
          </div>
          <div className="flex flex-row gap-3 text-5xl lg:text-7xl font-bold text-sage border-2 p-5">
            <div>{minutes}</div>
            <div>:</div>
            <div>{seconds}</div>
          </div>
          <div className="bg-royal rounded-2xl text-2xl lg:text-5xl px-10 py-4 font-bold  hover:cursor-pointer hover:scale-110">
            Register Now!
          </div>
        </div>

        <div className="flex flex-col  bg-grey mt-10 rounded-3xl p-5 lg:p-10 justify-center items-center gap-10">
          <div className="w-full flex flex-row flex-wrap p-5 justify-center items-center">
            <div className="w-full lg:w-3/4 text-md lg:text-4xl font-bold text-royal p-5">
              Ready to revolutionize your D2C business and unlock its full
              potential? Join Darsheel Savla on his consultancy programme to
              gain insider knowledge, industry secrets, and expert guidance!
            </div>
            <div className="w-full lg:w-1/4 flex flex-col gap-5 border-2 p-3 lg:p-10 border-sage">
              <div className="text-3xl lg:text-6xl text-sage p-5 text-center font-bold flex flex-col justify-center items-center">
                ₹999
                <br />
                <strike className="lg:text-3xl">₹1999</strike>
              </div>
              <div className="bg-royal text-lg lg:text-4xl font-bold text-center rounded-3xl p-1 lg:p-2 hover:cursor-pointer hover:scale-105">
                Enroll Now
              </div>
            </div>
          </div>
        </div>
      </div>
      {showDiv && (
        <div className=" h-[18rem] w-[18rem] lg:h-[30rem] lg:w-[30rem] absolute z-4  bottom-10 left-10 rounded-3xl bg-royal last-div p-4 flex flex-col gap-5">
          <div
            className="flex flex-row justify-end lg:text-3xl hover:cursor-pointer"
            onClick={() => setShowDiv(!showDiv)}
          >
            <RxCross1 />
          </div>
          <div>
            <form className="flex flex-col lg:gap-5 lg:p-10 lg:text-3xl font-bold">
              <label htmlFor="name">Name</label>
              <input type="text" className="rounded-xl p-2" />
              <label htmlFor="email">Email</label>
              <input type="email" className="rounded-xl p-2" />
              <button onClick={() => setShowDiv(!showDiv)}>Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
