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
        <div className="flex flex-col">
          <span className="text-purple ">
            <strong>WhatsApp Login</strong>
          </span>
          <span className="text-purple ">
            Use 2 Chrome Browser windows if can (1 Guest) to Test & Enjoy App.
          </span>
          <span className="text-[#BEC1DD]">
            {' '}
            User1: Email: jamishamashru@gmail.com Password: whatsapp1
          </span>
          <span className="text-purple ">
            {' '}
            User2: Email: kishanspector@gmail.com Password: whatsapp2
          </span>
          <span className="text-[#BEC1DD]">
            {' '}
            OR Can use own G-mail: Email: Your Gmail.com Password: Your Password
            to create account select avatar from Library
          </span>
          <span className="text-purple">
            Secure Email Login with Google FireBaseAuthentication*
          </span>
          <span className="text-purple">
            Kindly respect use of emails and messages put. Intended Only for
            demonstration of app*
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
            please allow to load some hosted Free.
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
                          id === 7 || id === 9
                            ? 'object-contain z-10 absolute bottom-0 rotate-2 rounded-lg w-[68%] h-fit'
                            : 'object-cover z-10 absolute bottom-0 rotate-2 rounded-lg w-[88%] h-[96%]'
                        }`}
                      >
                        <img src={img} alt="cover" className="w-full h-full" />
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
                            className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 bg-black border border-white[0.3] rounded-full"
                            style={{
                              transform: `translateX(-${4 * index + 2}px)`,
                            }}
                          >
                            <img src={icon} alt={icon} className="p-2" />
                          </div>
                        );
                      })}
                    </div>
                    <a href={githubLink} target="_blank">
                      <div className="flex items-center justify-center">
                        <p className="flex text-sm text-purple">
                          {id === 2 || id === 3 || id === 7 || id === 4
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
