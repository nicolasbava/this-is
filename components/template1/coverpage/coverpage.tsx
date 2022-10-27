import { useRouter } from 'next/router';

type CoverPageProps = {
  name: string;
  colorName: string;
  description: string;
  colorDescription: string;
  coverPageUrl: string;
};

const CoverPage = (props: CoverPageProps) => {
  const router = useRouter();
  return (
    <section className='' id='home'>
  
      <div className="relative overflow-hidden">
        <img
          className=" w-full"
          src={`${router.basePath + props.coverPageUrl}`}
          alt="CoverPage/png"
        />
        <div className="absolute w-full top-40 sm:top-56 lg:top-80 inset-x-0 leading-4">
          <div className="self-start hidden sm:block w-1/2 lg:2/3 lg:flex flex-col">
            <h1
              className="mb-3 text-xl pl-20 font-bold leading-none tracking-tighter uppercase title-font md:text-3xl lg:text-5xl"
              style={{ color: props.colorName }}
            >
              {props.name}
            </h1>
          </div>
          <div className="w-1/2 hidden sm:block  items-start">
            <div className="self-start pl-20 lg:flex flex-col">
              <p
                className="leading-none tracking-tighter text-sm md:text-xl uppercase"
                style={{ color: props.colorDescription }}
              >
                {props.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { CoverPage };