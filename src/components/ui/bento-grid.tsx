import { cn } from '../utils/cn';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ',
        // grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  // header,
  icon,
  img,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  // header?: React.ReactNode;
  icon?: React.ReactNode;
  img: string;
}) => {
  return (
    <div
      className={cn(
        'row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4 border border-white/[0.3] justify-between flex flex-col space-y-4',
        className
      )}
      style={{
        background: 'rgb(4, 7, 29)',
        backgroundColor:
          'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}
    >
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl  bg-gradient-to-br from-neutral-900 to-neutral-800 overflow-hidden justify-center items-center"
      >
        <img
          src={img}
          alt="drawing"
          className="w-[230px] h-[230px] md:w-full md:h-full object-contain p-4"
        />
      </div>

      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold  mb-2 mt-2"
                              style={{ color: '#BEC1DD', margin: '1vh 0' }}

        >
          {title}
        </div>
        <div className="font-sans font-normal text-xs"
                              style={{ color: '#BEC1DD', margin: '1vh 0' }}

        >
          {description}
        </div>
      </div>
    </div>
  );
};
