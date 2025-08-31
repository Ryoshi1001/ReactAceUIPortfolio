'use client';
import { PinContainer } from '../components/ui/3d-pin';
import { projects } from '../data';
import { FaLocationArrow } from 'react-icons/fa';

export function Websites() {
  return (
    <div id="websites" className="sm:px-10 px-5">
      <div className="py-10">
        <h1 className="heading pb-3">
          Custom
          <span className="text-purple"> Projects</span>
        </h1>
                <div className="flex flex-col mb-4">
          <span className="text-purple ">
            <strong>Quick AI from "Greatstack"</strong>
          </span>
          <span className="text-[#BEC1DD]">
            Securely log in with Clerk Authorization using your Gmail, Facebook or Email.
          </span>
          <span className="text-purple ">Kindly Generate only 1 image and 1 background image removal for testing purposes if possible due to limits and credits for AI generation. </span>
        </div>
        <div className="flex flex-col">
          <span className="text-purple ">
            <strong>IntelliChat App Login</strong>
          </span>
          <span className="text-purple ">
            Use 2 Chrome Browsers windows if can (1 Guest or Incognito) to Test & Enjoy App.
          </span>
          <span className="text-[#BEC1DD]">
            {' '}
            Login1: Email: chatuser1@email.com Password: chatuser1
          </span>
          <span className="text-purple ">
            {' '}
            Login2: Email: chatuser2@email.com Password: chatuser2
          </span>
          <span className="text-[#BEC1DD]">
            {' '}
            OR Signup using any email or password. 
          </span>
          <span className="text-purple">
            Kindly respect use of app and messages entered. Intended Only for
            testing and demonstration of app*
          </span>
        </div>
        <div className="flex flex-col mt-4">
          <span className="text-purple ">
            <strong>Twitter Login</strong>
          </span>
          <span className="text-[#BEC1DD]">
            username: user1, user2, or can use user3
          </span>
          <span className="text-purple ">Password: 12345678</span>
        </div>
        <div className="flex flex-col mt-4">
          <span className="text-purple ">
            Hope you like them as much as I do. Click images for Live Websites
            please allow to load some hosted Free on Render and Vercel.
          </span>
        </div>
      </div>
      <div className="flex flex-wrap justify-center  w-full max-w-7xl mx-auto gap-8">
        {projects.map(
          ({ id, title, des, img, iconLists, link, githubLink, software }) => {
            return (
              <div
                key={id}
                className="lg:min-h-[32.5rem] h-[27rem] flex flex-wrap items-center justify-center sm:w-96 w-[80vw] mx-auto"
              >
                <PinContainer title={link}>
                  <a href={link} target="_blank">
                    <div className="text-purple text-xl text-center mb-1 -mt-1">
                      {software}
                    </div>
                    <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden  lg:h-[30vh]">
                      <div
                        className="relative w-full h-full  rounded-xl overflow-hidden lg:rounded-3xl"
                        style={{ backgroundColor: '#13162D' }}
                      >
                        <img src="/bg.png" alt="bgimg" />
                      </div>
                      <div
                        className={`${
                          id === 7
                            ? 'object-contain z-10 absolute bottom-0 rotate-2 rounded-lg w-[68%] h-fit'
                            : 'object-cover z-10 absolute bottom-0 rotate-2 rounded-lg w-[88%] h-[96%]'
                        }`}
                      >
                        <img src={img} alt="cover" className="w-full h-full rounded-lg" />
                      </div>
                    </div>

                    <h1
                      className="text-base md:text-xl font-bold lg:text-2xl line-clamp-1"
                      style={{ color: '#BEC1DD', margin: '1vh 0' }}
                    >
                      {title}
                    </h1>

                    <p
                      className="text-sm lg:text-lg lg:font-normal font-light line-clamp-2"
                      style={{ color: '#BEC1DD', margin: '1vh 0' }}
                    >
                      {des}
                    </p>
                  </a>

                  <div className="flex justify-between mt-7 mb-2">
                    <div className="flex items-center">
                      {iconLists.map((icon, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-black border border-white[0.3] rounded-full"
                            style={{
                              transform: `translateX(-${4 * index + 2}px)`,
                            }}
                          >
                               {id === 3 && index === 5 
                            ?  <img src={icon} alt={icon} className="p-1 bg-red-50 rounded-full" />
                            :  <img src={icon} alt={icon} className="p-2" />}
                           
                          </div>
                        );
                      })}
                    </div>
                    <a href={githubLink} target="_blank">
                      <div className="flex items-center justify-center">
                        <p className="flex text-sm text-purple">
                          {id === 1 || id === 2 || id === 3 || id === 8 || id === 6
                            ? 'Check Live Website'
                            : 'GitHub Source Code'}
                        </p>

                        <FaLocationArrow className="ms-3" color="#cbacf9" />
                      </div>
                    </a>
                  </div>
                </PinContainer>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
