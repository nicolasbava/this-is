import { useRouter } from 'next/router';

// ATTENTION
// SORRY BUT 
// description is HISTORY
// description 2 is DESCRIPTION 

type BannerProps = {
    name: string;
    description: string;
    // description2: string;
    pdf: string;
    imgInformation: string;
    btnName: string;
};

const InformationProfile = (props: BannerProps) => {
    const router = useRouter();

    const onResumeClick = () => {
        const PDF = `${router.basePath + props.pdf}`
        window.open(PDF);
    }
    return (
        <section id='informationprofile'>
            <div className="sm:flex sm:flex-row mx-0 justify-center lg:ml-16">
                <div className="hidden lg:flex flex-col self-center sm:max-w-5xl xl:max-w-2xl  z-10">
                    <div className="self-start hidden lg:flex flex-col  text-white">
                        <img
                            src={`${router.basePath + props.imgInformation}`}
                            width={450}
                            height={270}
                            alt="logo-wijex"
                            className="h-56 w-56 object-cover"
                            loading="lazy"
                            
                        />

                        
                    </div>
                </div>
                <div className="flex  z-10">
                    <div className="mx-auto md:pl-10 w-100 ">
                        <div className="flex-col flex  self-center p-10 sm:max-w-6xl xl:max-w-3xl z-10">
                            {/* TITLE NAME */}
                            <h1 className="mb-3 text-2xl font-bold leading-none tracking-normal uppercase text-darkgray title-font lg:text-3xl">
                                {props.name}
                            </h1>

                            {/* PROVISORY DESCRIPTION ONLY IN MOBILE */}
                            {/* <h3 className='text-darkgray sm:hidden title-font uppercase font-bold mb-4' >{props.description2}</h3> */}
                            
                            {/* HISTORY, BAD CALLED DESCRIPTION */}
                            <p className=" text-darkgray title-font font-bold">
                                {props.description}
                            </p>
                            
                            <div className="pt-6">
                                <button onClick={() => onResumeClick()}
                                    className="px-8 py-2 pt-3 leading-5 transition-colors duration-200 transform bg-t1secondary rounded-md hover:bg-t1secondary focus:outline-none focus:bg-t1secondary  shadow-lg"
                                    style={{ color: 'white' }}
                                >
                                    <h2 className="mx-auto text-base font-semibold leading-none tracking-wide text-t1primary title-font">
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
export { InformationProfile };