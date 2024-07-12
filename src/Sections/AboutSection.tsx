'use client';
import { WobbleCard } from '../components/ui/aboutcards';

export function AboutSection() {
  return (
    <div id="about" className='sm:px-10 px-5 mb-10'>
      <div className="py-10">
        <h1 className="heading">
          About
          <span className="text-purple"> Me</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[680px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              WELCOME TO MY WORLD
            </h2>
            <p className="mt-4 text-left z-10  text-base/6 text-neutral-200">
              Hope can be good, welcome to my portfolio. I am a content editor, email & web developer with a strong passion
              for software and a keen interest in expanding my knowledge in all
              areas related to this field. I have a background in healthcare and
              my new career is now in the technology field. 
            </p>
          </div>
          <img
            src="/meblenderdrawing.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4  filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            I am a Web Admin & Content Editor - Email Developer.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Can be kind of you to visit my website. Studied nursing in school
            and wanted to be a Nurse Practitioner, healthcare was not for me but
            learned many great things there from the people I helped and took care of. Always suggested computer science
            to many than decided to try it for self and found my love and
            passion for software especially email and front-end web development it has a mix of art/design and logic.  I am learning new things like JS, Java, React, MySQL basics. Me also built this portfolio website in NextJS learning Typescript, JSX, React basics.   
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900">
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="text-wrap">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Name
              </h2>
              <p className="my-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                Ajmal Karimi
              </p>
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Email
              </h2>
              <p className="my-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                Ryoshi16421@Proton.Me
              </p>
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Education Courses{' '}
              </h2>
              <p className="my-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                <span className="block">Human Development Degree</span>
                <span className="block">
                  FreeCodeCamp: Certified Responsive Design - HTML CSS
                </span>
              </p>
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Learning
              </h2>
              <span className="block my-1 text-purple">
                  FreeCodeCamp: JavaScript Algorithms and Data Structures (Beta)
                </span>
              <span className="block">
              Digital Electronics & Computer Architecture
                  </span>
                  <span className="block my-1 text-purple"> AS Computer Science Jan 2025</span>
            </div>
            <img
              src='/codecampdrawing.png'
              width={500}
              height={500}
              alt="linear demo image"
              className="object-contain lg:absolute lg:-bottom-10 lg:right-[10%]"
            />
          </div>
        </WobbleCard>
      </div>
    </div>
  );
}