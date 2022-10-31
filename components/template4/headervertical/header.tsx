import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { QRCode } from "react-qr-svg";
import FileSaver from "file-saver";

type Props = {
    name: string;
    description: string;
    email: string;
    phone: string;
    address: string;
    avatar: string;
    url: string;
};

export default function HeaderNavVertical(props: Props) {
    const router = useRouter();
    const [active, setActive] = useState(true);
    const [showModal, setShowModal] = useState(false);
    let menuArray = [true, false, false];
    const [menu, setMenu] = useState(menuArray);
    const [show, setShow] = useState(false);

    const setMenuValue = (props: any) => {
        let newArr = [...menu];
        newArr[props] = !newArr[props];
        setMenu(newArr);
    }

    const handleClick = () => {
        setActive(!active);
    };
    useEffect(() => {
        // window is accessible here.
        console.log("window.innerHeight", window.innerHeight);
    }, []);
    return (
        <div className='w-full bg-whitecolor lg:h-screen' >
            <div className="sticky w-full z-50 rounded-r lg:h-screen lg:hidden flex justify-between lg:w-1/4 p-6 items-center bg-t5primary  mb-1 ">
                <div className="flex justify-between  items-center lg:pt-5">
                    <Link href={'https://www.wijex.com'}>
                        <img src="/logo-wijex-blue.png"
                            width={93.75} height={43.5}
                            alt="logo-wijex"
                        />
                    </Link>
                </div>
                <div aria-label="toggler" className="flex justify-center items-center">
                    <button aria-label="open" id="open" onClick={() => setShow(true)} className={`${show ? 'hidden' : ''} focus:outline-none focus:ring-2`}>
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20" stroke="#2B484E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 12H20" stroke="#2B484E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 18H20" stroke="#2B484E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button aria-label="close" id="close" onClick={() => setShow(false)} className={`${show ? '' : 'hidden'} focus:outline-none focus:ring-2 text-t5t5fourth`}>
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="#2B484E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 6L18 18" stroke="#2B484E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
            <div id="Main" 
                className={`${show ? '' : '-translate-x-full'} sticky top-0 transform lg:translate-x-0 ease-in-out transition duration-500 flex justify-start items-start h-full w-full lg:w-auto base:w-64 flex-col`}
                
            >

                
                <div className="hidden lg:flex justify-start ml-3 p-6 lg:p-3 items-center space-x-3">
                    <Link href={'https://www.wijex.com'}>
                        <img src="/logo-wijex-blue.png"
                            width={93.75} height={43.5}
                            alt="logo-wijex"
                        />
                    </Link>
                </div>
                <div className={`${!show ? 'hidden' : ''} mt-8 flex flex-col space-x-3 lg:block lg:-translate-x-full`}>
                    <div className="mb-4 lg:mb-12 pl-3">
                        <a
                            href={`${router.basePath}#home`}
                            className="text-base font-bold leading-none tracking-tighter text-t5fourth title-font uppercase mx-3 cursor-pointer hover:text-third">
                            INICIO
                        </a>
                    </div>
                    <div className="mb-4 lg:mb-12">
                        <a
                            href={`${router.basePath}#informationprofile`}
                            className="text-base font-bold leading-none tracking-tighter text-t5fourth title-font uppercase mx-3 cursor-pointer hover:text-third">
                            SOBRE MÍ
                        </a>
                    </div>
                    <div className="mb-4 lg:mb-12">
                        <a
                            href={`${router.basePath}#galleryprofile`}
                            className="text-base font-bold leading-none tracking-tighter text-t5fourth title-font uppercase mx-3 cursor-pointer hover:text-third"
                        >
                            Galería
                        </a>
                    </div>
                    <div className="mb-4 lg:mb-12">
                        <a
                            href={`${router.basePath}#contactprofile`}
                            className="text-base font-bold leading-none tracking-tighter text-t5fourth title-font uppercase mx-3 cursor-pointer hover:text-third"
                        >
                            CONTACTO
                        </a>
                    </div>
                    <div className="mb-4 lg:mb-12">
                        <text
                            onClick={() => { setActive(false); setShowModal(true); setShow(false) }}
                            className="text-base font-bold leading-none tracking-tighter text-t5fourth title-font uppercase mx-3 cursor-pointer hover:text-third"
                        >
                            COMPARTIR
                        </text>
                    </div>
                    <div className='pl-2 mb-6' >
                        <button className='hover:bg-t5background px-2 rounded-md'
                            onClick={() => {
                                var file = new Blob(
                                    [`BEGIN:VCARD\nVERSION:3.0\nFN;CHARSET=UTF-8:${props.name} ${''} ${''}\nN;CHARSET=UTF-8:${props.name};${''};${''};;\nEMAIL;CHARSET=UTF-8;type=WORK,INTERNET:${props.email}\nTEL;TYPE=WORK,VOICE:${props.phone}\nTEL;TYPE=WORK,VOICE:${props.phone}\nLABEL;CHARSET=UTF-8;TYPE=WORK:${props.address}\nADR;CHARSET=UTF-8;TYPE=WORK:;;;;;;\nROLE;CHARSET=UTF-8:${props.description}\nORG;CHARSET=UTF-8:${''}\nURL;type=WORK;CHARSET=UTF-8:https://wijex-webcard.com/${props.url}\nREV:2020-08-31T03:41:09.870Z\nEND:VCARD`],
                                    { type: "text/vcard;charset=utf-8" }
                                );
                                // var vcf = ` BEGIN:VCARD VERSION:3.0 N:${props.name};${''};;;FN:${props.name}TITLE:${props.description};EMAIL;type=INTERNET;type=pref:${props.email}TEL;type=MAIN:${props.phone}TEL;type=CELL;type=VOICE;type=pref:${props.phone} ADR;type=WORK;type=pref:;;;${props.address};;;END:VCARD`;
                                FileSaver.saveAs(
                                    file,
                                    `${props.name}.vcf`,
                                    true
                                );
                            }}
                        >
                            <div className='flex flex-col items-center'>
                                <img

                                    src={`${router.basePath}/assert/icons/download-t4.png`}
                                    width={16}
                                    alt="logo-linkedin"
                                />
                                <div className='flex flex-col mt-2'>
                                    <text
                                        className="text-base  font-semibold leading-none title-font  text-t5text  text-center"
                                    >
                                        Descargar
                                    </text>
                                    <text
                                        className="text-base  font-semibold leading-none  title-font  text-t5text text-center mt-0.5"
                                    >
                                        Contacto
                                    </text>
                                </div>
                            </div>
                        </button>
                    </div>

                </div>

            </div>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto sticky top-0 inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg relative flex flex-col w-full bg-t5primary dark:bg-t5primary outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-xl font-semibold">
                                        Mi Webcard
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <QRCode
                                        bgColor="#FFFFFF"
                                        fgColor="#000000"
                                        level="Q"
                                        style={{ width: 256 }}
                                        value={window.location.href}
                                    />
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Aceptar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
                </>
            ) : null}
        </div>
    );
};
export { HeaderNavVertical }