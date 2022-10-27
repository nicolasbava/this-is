import { useRouter } from 'next/router';

type BannerProps = {
    name: string;
    description: string;
    pdf: string;
    imgInformation: string;
    btnName: string;
};

const InformationProfileEdit= (props: BannerProps) => {
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
                        <div className="flex-col flex  self-center p-10 sm:max-w-6xl xl:max-w-3xl z-10">
                            <h1 className="mb-3 text-2xl font-bold leading-none tracking-normal uppercase text-blackcolor title-font lg:text-5xl">
                                {props.name}
                            </h1>
                            <p className="text-darkgray title-font font-bold text-justify">
                                {props.description}
                            </p>
                            <div className="pt-6">
                                <button onClick={() => onResumeClick()}
                                    className="px-8 py-2 leading-5 transition-colors duration-200 transform bg-gradient-to-r from-fourth to-primary rounded-md hover:bg-gradient-to-r from-fourth to-primary focus:outline-none focus:bg-gradient-to-r from-fourth to-primary  shadow-lg"
                                    style={{ color: 'white' }}
                                >
                                    <h2 className="mx-auto justify text-l font-semibold leading-none tracking-wide text-whitecolor title-font lg:text-base">
                                        {props.btnName}
                                    </h2>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export { InformationProfileEdit };