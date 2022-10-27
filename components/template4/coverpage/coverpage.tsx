import React from 'react';
import { useRouter } from 'next/router';

type CoverPageProps = {
  name: string;
  colorName: string;
  description: string;
  colorDescription: string;
  coverPageUrl: string;
  information: string;
  pdf: string;
  imgInformation: string;
  background: string;
};

const CoverPage = (props: CoverPageProps) => {
  const router = useRouter();


  return (
    <section className='mt-36 md:mt-24 lg:mt-0' id='home'>
      <div
        style={{ backgroundImage: `url(${router.basePath + props.background})` }}
        className='bg-cover h-screen bg-center bg-no-repeat bg-t5secondary bg-opacity-0 '
      >
          <div className="flex flex-col items-center justify-center sm:flex-row h-full w-full ">
            <div className='flex flex-col w-full pl-8 text-center sm:text-left lg:pl-10 lg:w-3/2 bg-t5socket py-10 pr-10'>
              <h1
                className="uppercase title-font text-2xl mb-2 sm:text-5xl lg:text-7xl" //text-2xl (font-size)
                style={{ color: props.colorName, fontWeight: 900 }}
              > 
                {props.name}
              </h1>
              <p
                className="leading-none tracking-tighter uppercase text-md sm:text-base  lg:text-3xl" //text-md (font-size)
                style={{ color: props.colorDescription }}
              >
                {props.description}
              </p>
            </div>
            <img
              className="flex-col  w-full max-h-full sm:w-1/2 lg:w-1/2 "
              src={`${router.basePath + props.coverPageUrl}`}
              alt="CoverPage/png"
            />
          </div>
        </div>
     
    </section>
  );
}
export { CoverPage };

