import { TbBrandHtml5, TbBrandJavascript, TbBrandCss3 } from "react-icons/tb";
import { FaWordpress } from "react-icons/fa6";
import { SiReact, SiFigma, SiTailwindcss } from "react-icons/si";
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
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            // header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
            img={item.img}
          />
        ))}
      </BentoGrid>
    </div>
  );
}


export const items = [
  {
    title: 'HTML5',
    description:
      'HTML for page structure and layouts',
    // header: <Skeleton />,
    icon: <TbBrandHtml5 className="h-4 w-4 text-purple" />,
    img: '/AdobeStock_HTML3D.png',
  },
  {
    title: 'CSS3',
    description: 'CSS Style Sheets',
    // header: <Skeleton />,
    icon: <TbBrandCss3 className="h-4 w-4 text-purple" />,
    img: '/AdobeStock_CSS3D.png',
  },
  {
    title: 'WordPress CMS',
    description: 'Elementor, themes, plugins, no php',
    // header: <Skeleton />,
    icon: <FaWordpress className="h-4 w-4 text-purple" />,
    img: '/WordPressLogo.png',
  },
  {
    title: 'TailwindCSS',
    description: 'For Styling also know some Bootstrap.',
    // header: <Skeleton />,
    icon: <SiTailwindcss className="h-4 w-4 text-purple" />,
    img: '/tailwindcss-logotype.svg',
  },
  {
    title: 'JAVASCRIPT(beginner)',
    description: 'DOM manipulation basics, Loops, Arrays, Functions.',
    // header: <Skeleton />,
    icon: <TbBrandJavascript className="h-4 w-4 text-purple" />,
    img: '/AdobeStock_JS3D.png',
  },
  {
    title: 'Figma',
    description: 'Creative image slicing.',
    // header: <Skeleton />,
    icon: <SiFigma className="h-4 w-4 text-purple" />,
    img: '/figmadrawing-removebg-preview (1).png',
  },
  {
    title: 'REACT(beginner)',
    description: 'Functional components, basics of props, basics of Hooks.',
    // header: <Skeleton />,
    icon: <SiReact className="h-4 w-4 text-purple" />,
    img: '/re.svg',
  },
];
