import { useRouter } from 'next/router';


type CoverPageProps = {
  name: string;
  colorName: string;
  description: string;
  colorDescription: string;
  coverPageUrl: string;
  colorBox: string;
};

const CoverPageTextBox = (props: CoverPageProps) => {
  const router = useRouter();
  return (
    <section className='' id='home'>

      <div className="absolute">
        <div className="mx-auto ml-5 mt-5 md:pl-10 md:mt-12 lg:ml-12 lg:pl-12 lg:pt-12" >
          <div className="self-start lg:flex flex-col">
            <h1
              className="mb-3 text-3xl font-bold leading-none tracking-tighter uppercase title-font lg:text-6xl px-2"
              style={{ color: props.colorName }}
            >
              {props.name}
            </h1>
          </div>
          <div className="flex flex-col items-start">
            <div className="self-start lg:flex flex-row ">
              <p
                className="leading-none tracking-tighter lg:text-xl uppercase box-content bg-secondary pt-1 px-2"
                style={{ color: props.colorDescription, backgroundColor:props.colorBox }}
              >
                {props.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src={`${router.basePath + props.coverPageUrl}`}
        alt="CoverPage/png"
      />
    </section>
  );
}
export { CoverPageTextBox };