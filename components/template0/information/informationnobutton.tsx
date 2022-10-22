import { useRouter } from 'next/router';

type BannerProps = {
    name: string;
    description: string;
    pdf: string;
    imgInformation: string;

};

const InformationNoButton = (props: BannerProps) => {
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
                            <p className="text-darkgray title-font font-bold ">
                                {props.description}
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export { InformationNoButton };