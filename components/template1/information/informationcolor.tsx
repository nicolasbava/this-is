import { useRouter } from 'next/router';

type BannerProps = {
    name: string;
    description: string;
    pdf: string;
    imgInformation: string;
    btnName: string;
    color: string;
};

const InformationColorProfile = (props: BannerProps) => {
    const router = useRouter();

    const onResumeClick = () => {
        const PDF = `${router.basePath + props.pdf}`
        window.open(PDF);
    }
    return (
        <section id='informationprofile'>
            <div className="flex-col sm:flex sm:flex-row mx-10 justify-center items-center">
                <div className="hidden lg:flex flex-col self-center sm:max-w-5xl xl:max-w-2xl  z-10">
                    <div className="self-start hidden lg:flex flex-col py-5  text-white">
                        <img
                            src={`${router.basePath + props.imgInformation}`}
                            width={450}
                            height={270}
                            alt="logo-wijex"
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="flex  z-10">
                    <div className="mx-auto md:pl-10 w-100 ">
                        <div className="flex-col flex  self-center py-10 sm:max-w-6xl xl:max-w-3xl z-10">
                            <h1 className="mb-2 text-2xl font-bold leading-none tracking-normal uppercase text-darkgray title-font lg:text-2xl">
                                {props.name}
                            </h1>
                            <p className="text-darkgray title-font font-bold">
                                {props.description}
                            </p>
                           
                            <button onClick={() => onResumeClick()}
                                className="px-8 py-2 mt-8 mx-auto sm:mx-0 sm:mr-auto  items-start  pt-3 leading-5 transition-colors duration-200 transform rounded-md focus:outline-none shadow-lg"
                                style={{ color: 'white', backgroundColor: props.color }}
                            >
                                <h2 className="mx-auto justify text-base font-semibold leading-none tracking-wide text-t1primary title-font">
                                    {props.btnName}
                                </h2>
                            </button>
                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export { InformationColorProfile };