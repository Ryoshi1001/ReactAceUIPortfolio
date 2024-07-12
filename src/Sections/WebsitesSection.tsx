'use client';
import { PinContainer } from '../components/ui/3d-pin';
import { projects } from '../data';
import { FaLocationArrow } from 'react-icons/fa';


export function Websites() {
  return (
    <div
      id="websites"
      className="sm:px-10 px-5"
    >
      <div className="py-10">
        <h1 className="heading">
          Custom
          <span className="text-purple"> Projects</span>
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16 w-full max-w-7xl mx-auto">
        {projects.map(
          ({ id, title, des, img, iconLists, link, githubLink }) => {
            return (
              <div
                key={id}
                className="lg:min-h-[32.5rem] h-[25rem] flex flex-wrap items-center justify-center sm:w-96 w-[80vw] mx-auto mb-10"
              >
                <PinContainer title={link}>
                  <a href={link} target="_blank">
                    <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden  lg:h-[30vh] mb-10">
                      <div
                        className="relative w-full h-full  rounded-xl overflow-hidden lg:rounded-3xl"
                        style={{ backgroundColor: '#13162D' }}
                      >
                        <img src="/bg.png" alt="bgimg" />
                      </div>
                      <img
                        src={img}
                        alt="cover"
                        className={`${id === 3 || id === 4 || id === 6 ? 'object-contain z-10 absolute bottom-0 rotate-2 rounded-lg w-[88%] h-[96%]' : 'object-cover  z-10 absolute bottom-0  rotate-2 rounded-lg w-[88%] h-[96%]'}
                       `}


                      />
                    </div>

                    <h1 className="text-base md:text-xl font-bold lg:text-2xl line-clamp-1"
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
                          {id === 1 || id === 2 || id === 5 ? 'Check Live Website' : 'GitHub Source Code'}
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
