import { TbBrandHtml5, TbBrandJavascript, TbBrandCss3 } from "react-icons/tb";
import { FaWordpress } from "react-icons/fa6";
import { SiReact, SiFigma, SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { BentoGrid, BentoGridItem } from '../components/ui/bento-grid';


export function StackSection() {
  return (
    <div id="software" className='bg-black-100 pb-10 w-full sm:px-10 px-5'>
      <div className="py-10 max-w-7xl mx-auto">
        <h1 className="heading">
          My
          <span className="text-purple"> Skills</span>
        </h1>
      </div>
      <BentoGrid className="w-full max-w-7xl mx-auto">
        {items.map((item) => (
          <BentoGridItem
            key={item.id}
            title={item.title}
            description={item.description}
            // header={item.header}
            icon={item.icon}
            className={item.id === 11 || item.id === 7 || item.id === 4 ? 'md:col-span-2' : ''}
            img={item.img}
          />
        ))}
      </BentoGrid>
    </div>
  );
}


export const items = [
  { 
    id: 1,
    title: 'HTML5',
    description:
      'HTML for page structure and layouts',
    // header: <Skeleton />,
    icon: <TbBrandHtml5 className="h-4 w-4 text-purple" />,
    img: '/AdobeStock_HTML3D.png',
  },
  { 
    id: 2, 
    title: 'CSS3',
    description: 'CSS Style Sheets',
    // header: <Skeleton />,
    icon: <TbBrandCss3 className="h-4 w-4 text-purple" />,
    img: '/AdobeStock_CSS3D.png',
  },
  { 
    id: 3,
    title: 'TailwindCSS',
    description: 'For Styling also know some Bootstrap.',
    // header: <Skeleton />,
    icon: <SiTailwindcss className="h-4 w-4 text-purple" />,
    img: '/tailwindcss-logotype.svg',
  },
  { 
    id: 4, 
    title: 'WordPress CMS',
    description: 'Elementor, themes, plugins, no php',
    // header: <Skeleton />,
    icon: <FaWordpress className="h-4 w-4 text-purple" />,
    img: 'pngkey.com-wordpress-icon-png-8314981.png',
  },
  { 
    id: 5,
    title: 'JAVASCRIPT(beginner)',
    description: 'DOM manipulation basics, Loops, Arrays, Functions.',
    // header: <Skeleton />,
    icon: <TbBrandJavascript className="h-4 w-4 text-purple" />,
    img: '/AdobeStock_JS3D.png',
  },
  { 
    id: 6,
    title: 'Figma',
    description: 'Creative image slicing.',
    // header: <Skeleton />,
    icon: <SiFigma className="h-4 w-4 text-purple" />,
    img: '/figmadrawing-removebg-preview (1).png',
  },
  { 
    id: 7,
    title: 'REACT(beginner)',
    description: 'Functional components, folder structure, simple components',
    // header: <Skeleton />,
    icon: <SiReact className="h-4 w-4 text-purple" />,
    img: '/re.svg',
  },
  { 
    id: 8,
    title: 'MongoDB(beginner)',
    description: 'NoSQL DB, POST, DELETE, GET',
    // header: <Skeleton />,
    icon: <SiMongodb className="h-4 w-4 text-purple" />,
    img: '/MongoDB_Logomark_ForestGreen.svg',
  },
  { 
    id: 9,
    title: 'Express(beginner)',
    description: 'Express Router',
    // header: <Skeleton />,
    icon: <SiExpress className="h-4 w-4 text-purple" />,
    img: '/express-logo.png',
  },
  { 
    id: 10,
    title: 'NodeJS(beginner)',
    description: '',
    // header: <Skeleton />,
    icon: <RiNodejsLine  className="h-4 w-4 text-purple" />,
    img: '/nodejs-logo.png',
  },
  { 
    id: 11,
    title: 'NextJS-15(beginner)',
    description: 'SSR',
    // header: <Skeleton />,
    icon: <RiNodejsLine  className="h-4 w-4 text-purple" />,
    img: '/next.svg',
  },
  { 
    id: 10,
    title: 'Firebase & Auth.js',
    description: 'FireBaseAuthentication',
    // header: <Skeleton />,
    icon: <RiNodejsLine  className="h-4 w-4 text-purple" />,
    img: '/firebase-svgrepo-com.png',
  },
];
