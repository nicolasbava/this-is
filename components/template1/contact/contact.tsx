import { useRouter } from 'next/router';
import React from 'react';

type ContactProps = {
    name: string;
    email: string;
    phone: string;
    address: string;
    number: string;
    locality: string;
    province: string;
    country: string;
    avatar: string;
    url: string;
};

// HI THERE
// THIS IS THE SAME COMPONENT AS CONTACT COVER BUT THE DIFFERENCE IS:
// IMAGE IS --- CONTAIN --- SIZE
// If you need contain image size use this component.
// If you need cover size use "contactcover"


const ContactProfile = (props: ContactProps) => {
    const router = useRouter();
    const [showModal, setShowModal] = React.useState<boolean>(false);


    const onOpenModal = () => {
        //setShowModal(true);
    }

    const onCloseModal = () => {
        setShowModal(false)
    }

    return (
        <section className='md:ml-10 pt-10'>
            {/* === title in tablet version === */}
            <h1 className="p-0 mb-10 hidden sm:block text-center text-2xl font-bold leading-none tracking-wide uppercase text-blackcolor title-font lg:text-3xl">
                {props.name}
            </h1>

            <div className="sm:flex sm:flex-row sm:ml-10  mx-0 justify-center md:mb-8">
           
                <div className="lg:flex flex-col self-center sm:max-w-5xl xl:max-w-2xl z-10">
                    <div className="mx-auto flex items-center justify-center flex-col">
                        {/* CONTAIN SIZE */}
                        <img
                            src={`${router.basePath + props.avatar}`}
                            width={200}
                            height={200}
                            alt="logo-wijex"
                            loading="lazy"
                            
                            className="h-40 w-40 lg:h-60 lg:w-60 object-contain rounded-full -mt-5"
                        />
                    </div>
                </div>
                <div >
                    <div className="mx-auto md:pl-10">
                        <div className="flex-col flex self-center py-10 sm:py-5">
                            <div className="flex items-center justify-center px-8 lg:items-start lg:justify-center flex-col">
                                {/* === title in desktop version === */}
                                <h1 className="mb-3 sm:hidden lg-inline text-center text-2xl font-bold leading-none tracking-wide uppercase text-blackcolor title-font lg:text-3xl">
                                    {props.name}
                                </h1>
                            </div>
                            <div className="grid grid-flow-row gap-4 mt-4 px-5" style={{ display: 'inline-block', justifyContent: 'start', alignContent: 'start' }}>
                                
                                {/* PHONE - TELEFONO */}
                                <a href={`tel:${props.phone}`} target="_blank" rel="noopener noreferrer">
                                    <div className="flex flex-col sm:flex-row items-center mb-3">
                                        <div className="w-11 h-11 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                            <img
                                                className="rounded-full mb-5 sm:mb-0"
                                                src={`${router.basePath}/assert/icons/phoneblue.svg`}
                                                width={40}
                                                height={40}
                                                alt="logo-linkedin"
                                            />
                                        </div>
                                        <h3 className="text-darkgray  mb-5 sm:mb-0 title-font text-base lg:text-lg sm:ml-2 mt-1">
                                            {props.phone}
                                        </h3>
                                    </div>
                                </a>

                                {/* EMAIL */}
                                <a href={`mailto:${props.email}`} target="_blank" rel="noopener noreferrer">
                                    <div className="flex flex-col sm:flex-row items-center mb-3" >
                                        <div className="w-11 h-11 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                            <img
                                                src={`${router.basePath}/assert/icons/emailblue.svg`}
                                                width={40}
                                                height={40}
                                                alt="logo-linkedin"
                                                className="rounded-full mb-5 sm:mb-0"
                                            />
                                        </div>
                                        <h3 className="text-darkgray break-words  mb-5 sm:mb-0 title-font text-base lg:text-lg sm:ml-2 mt-1">
                                            {props.email}
                                        </h3>
                                    </div>
                                </a>
                                {/* ADDRESS - LOCALIDAD DIRECCION */}
                                <a href={`/${props.url}/map`} target="_blank" rel="noopener noreferrer">
                                    <div className="flex flex-col sm:flex-row items-center mb-3 cursor-pointer" onClick={() => onOpenModal()}>
                                        <div className="w-11 h-11 inline-flex items-center justify-center rounded-full flex-wrap  flex-shrink-0">
                                            <img
                                                src={`${router.basePath}/assert/icons/direccionblue.svg`}
                                                width={40}
                                                height={40}
                                                alt="logo-linkedin"
                                                className="rounded-full mb-5 sm:mb-0"
                                            />
                                        </div>
                                        <h3 className="text-darkgray mb-5 sm:mb-0 title-font text-center sm:text-left text-base lg:text-lg sm:ml-2 mt-1">
                                            {props.address} {props.number} - {props.locality} - {props.province} - {props.country}
                                        </h3>
                                    </div>
                                </a>

                                {/* PHONE - TELEFONO - WHATSAPP */}
                                <a href={`https://api.whatsapp.com/send?phone=${props.phone}`} target="_blank" rel="noopener noreferrer">
                                    <div className="flex flex-col sm:flex-row flex-wrap  items-center mb-3">
                                        <div className=" w-11 h-11 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                            <img
                                                className="rounded-full mb-5 sm:mb-0"
                                                src={`${router.basePath}/assert/icons/whatsapp-color.png`}
                                                width={40}
                                                height={40}
                                                alt="logo-linkedin"
                                            />
                                        </div>
                                        <h3 className="text-darkgray  mb-5 sm:mb-0 title-font text-base lg:text-lg sm:ml-2 mt-1">
                                            {props.phone}
                                        </h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
export { ContactProfile };