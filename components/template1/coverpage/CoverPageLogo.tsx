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

const CoverPageLogo = (props: CoverPageProps) => {
  const router = useRouter();
  return (
    <section className='' id='home'>

      <div className="absolute z-10 ">
        <div className="mx-auto ml-7 mt-8 sm:mt-36 lg:mt-52 md:pl-10 md:mt-56 lg:ml-12 lg:pl-12 lg:pt-8 w-3/5" >
          <div className="self-start lg:flex flex-col">
            <h1
              className="mb-3 text-3xl tracking-base font-bold leading-none uppercase title-font md:text-3xl lg:text-5xl"
              style={{ color: props.colorName }}
              >
              {/* NAME - H1 . ADD COLOR FROM PROP */}
              {props.name}
            </h1>
          </div>
          <div className="w-1/2 lg:w-3/4 flex flex-col items-start">
            <div className="self-start lg:flex flex-col">
              <p
                className="leading-none tracking-base text-base md:text-xl uppercase"
                style={{ color: props.colorDescription }}
              >
              {/* DESCRIPTION. ADD COLOR FROM PROP */}
              {props.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src={`${router.basePath + props.coverPageUrl}`}
        alt="CoverPage/png"
        style={{}}
        className="relative  z-0 object-cover object-center"
      />
    </section>
  );
}
export { CoverPageLogo };