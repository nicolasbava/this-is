import { useRouter } from 'next/router';

type BannerProps = {
    name: string;
    description: string;
    pdf: string;
    imgInformation: string;
};

const InformationProfileSalmon = (props: BannerProps) => {
    const router = useRouter();

    const onResumeClick = () => {
        const PDF = `${router.basePath + props.pdf}`
        window.open(PDF);
    }
    return (
        <section id='informationprofile'>
            <div className="sm:flex sm:flex-row mx-0 justify-center">
                <div className="hidden lg:flex flex-col self-center sm:max-w-5xl xl:max-w-2xl  z-10">
                    <div className="self-start hidden lg:flex flex-col  text-white">
                        <img
                            src={`${router.basePath + props.imgInformation}`}
                            width={450}
                            height={270}
                            
                            loading="lazy"
                            
                            alt="logo-wijex"
                            className="h-56 w-56 object-cover"
                        />
                    </div>
                </div>
                <div className="flex  z-10">
                    <div className="mx-auto md:pl-10 w-100 ">
                        <div className="flex-col flex  self-center p-10 sm:max-w-6xl xl:max-w-4xl z-10">
                            <h1 className="mb-3 text-2xl font-bold leading-none tracking-normal uppercase text-darkgray title-font lg:text-5xl">
                                {props.name}
                            </h1>
                            <p className="text-justify text-darkgray title-font font-bold">{props.description}</p>
                            <div className="pt-6">
                                <button onClick={() => onResumeClick()} className="px-8 py-3 leading-5 transition-colors duration-200 transform bg-secondary rounded-md hover:bg-secondary focus:outline-none focus:bg-secondary shadow-lg">
                                    <h1 className="mx-auto justify text-l font-semibold leading-none tracking-tighter text-whitecolor title-font lg:text-2xl">
                                        Ver curriculum
                                    </h1>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export { InformationProfileSalmon };