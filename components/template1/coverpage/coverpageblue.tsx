// FIRST PART - UNDER THE HEADER

// H1 + DESCRIPTION

import { useRouter } from 'next/router';

type CoverPageProps = {
  name: string;
  colorName: string;
  description: string;
  colorDescription: string;
  coverPageUrl: string;
};

const CoverPageBlue = (props: CoverPageProps) => {
  const router = useRouter();
  return (
    // <section  id='home' className=''>
    <>
        {/* img de fondo */}
        <div  id='home'
          className=' flex flex-col items-baseline justify-end special min-h-full  md:h-screen lg:h-screen '
          style={{backgroundImage:`url(${router.basePath + props.coverPageUrl})`, minHeight:'40vh', backgroundSize:'cover', backgroundPosition: 'center center' 
          }}
        > 

          {/* cartel alberga texto  */}
          <div className='pt-4 opacity-0 text-left sm:w-1/3 pl-10 px-2 sm:px-0 mb-4 h-full sm:text-left sm:ml-10 md:ml-20 md:opacity-100 lg:mt-96 '
          >
            {/* NAME - H1 . ADD COLOR FROM PROP */}
            <h1
              className="mb-3 text-3xl tracking-base font-bold leading-none uppercase title-font md:text-3xl md:w-1/3 lg:text-3xl"
              style={{ color: props.colorName }}
              >
              {props.name}
            </h1>
            {/* DESCRIPTION. ADD COLOR FROM PROP */}
            <p
                className="leading-none mx-auto tracking-base text-base md:text-xl uppercase"
                style={{ color: props.colorDescription }}
              >
              {props.description}
              </p>
          </div>
          
        </div>
    
        </>
    // </section>
  );
}
export { CoverPageBlue };

/*


<div className="absolute z-10 w-full" >
        <div className="mx-auto w-3/5 mt-12 sm:mt-44 sm:ml-8 md:pl-16 md:mt-52 lg:ml-12 lg:mt-64 lg:pl-28 lg:pt-8 " 
              
        >
          <div className="text-center sm:text-left items-end lg:flex flex-col">
            <h1
              className="mb-3 text-3xl tracking-base font-bold leading-none uppercase title-font md:text-3xl lg:text-5xl"
              style={{ color: props.colorName }}
              >
              {props.name}
            </h1>
            <p
                className="leading-none mx-auto tracking-base text-base md:text-xl uppercase"
                style={{ color: props.colorDescription }}
              >
              {props.description}
              </p>
          </div>
          
        </div>
      </div>
      <img
        src={`${router.basePath + props.coverPageUrl}`}
        alt="CoverPage/png"
        style={{minHeight: '17rem'}}
        className="relative z-0 object-cover object-center"
      />




*/