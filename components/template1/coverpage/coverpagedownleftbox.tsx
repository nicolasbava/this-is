import { useRouter } from 'next/router';

type CoverPageProps = {
  name: string;
  colorName: string;
  description: string;
  colorDescription: string;
  coverPageUrl: string;
  colorBox: string;
};

const CoverPageDownLeftBox = (props: CoverPageProps) => {
  const router = useRouter();
  return (
    <section className='' id='home'>

      <div className="relative overflow-hidden">
        <img
          src={`${router.basePath + props.coverPageUrl}`}
          alt="CoverPage/png"
        />
        <div className="absolute w-full bottom-10 lg:bottom-48 inset-x-0 leading-4" >
          <div className='w-fit' >
            <div className="w-2/3 lg:w-1/2 flex flex-col items-start pl-10 lg:pl-20 pt-2" style={{ backgroundColor: props.colorBox }}>
              <div className="self-start lg:flex flex-col" >
                <h1
                  className="mb-3 text-xl font-black leading-none tracking-tighter uppercase title-font md:text-3xl lg:text-5xl"
                  style={{ color: props.colorName }}
                  dangerouslySetInnerHTML={{ __html: props.name }}
                >
                </h1>
              </div>
            </div>
            <div className="w-2/3 lg:w-1/2 flex flex-col items-start pl-10 lg:pl-20 pb-2" style={{ backgroundColor: props.colorBox }}>
              <div className="self-start lg:flex flex-col">
                <p
                  className="leading-none tracking-tighter text-sm md:text-xl uppercase font-bold"
                  style={{ color: props.colorDescription }}
                  dangerouslySetInnerHTML={{ __html: props.description }}
                >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
export { CoverPageDownLeftBox };