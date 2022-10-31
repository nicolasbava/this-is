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

export default function HeaderNav(props: Props) {
    const router = useRouter();
    const [active, setActive] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };
    useEffect(() => {
        // window is accessible here.
        console.log("window.innerHeight", window.innerHeight);
    }, []);
    return (
        <header className="bg-gradient-to-r sticky from-fourth to-primary">
            <nav className="container mx-auto px-6 md:px-12 py-4">
                <div className="md:flex justify-between items-center" >
                    <div className="flex justify-between items-center" >
                        <Link href={'https://www.wijex.com'}>
                            <img src="/logo-wijex.png"
                                width={62.5} height={29}
                                loading="lazy"
                                alt="logo-wijex"
                            />
                        </Link>
                        <button
                            className=' inline-flex p-3 rounded md:hidden text-whitecolor ml-auto hover:text-whitecolor outline-none'
                            onClick={handleClick}
                        >
                            <svg
                                className='w-6 h-6'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M4 6h16M4 12h16M4 18h16'
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`${active ? 'hidden' : ''}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
                    >
                        <div className='md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start  flex flex-col md:h-auto'>
                            <div className="lg:pr-10">
                                <a
                                    href={`${router.basePath}`}
                                    className="text-sm font-semibold leading-none tracking-tighter  title-font uppercase mx-3 text-whitecolor cursor-pointer hover:text-third">
                                    INICIO
                                </a>
                            </div>
                            <div className="lg:px-10">
                                <a
                                    href={`${router.basePath}#informationprofile`}
                                    className="text-sm font-semibold leading-none tracking-tighter  title-font uppercase mx-3 text-whitecolor cursor-pointer hover:text-third">
                                    SOBRE MÍ
                                </a>
                            </div>
                            <div className="lg:px-10">
                                <a
                                    href={`${router.basePath}#galleryprofile`}
                                    className="text-sm font-semibold leading-none tracking-tighter  title-font uppercase mx-3 text-whitecolor cursor-pointer hover:text-third"
                                >
                                    Galería
                                </a>
                            </div>
                            <div className="lg:pl-10">
                                <a
                                    href={`${router.basePath}#contactprofile`}
                                    className="text-sm font-semibold leading-none tracking-tighter  title-font uppercase mx-3 text-whitecolor cursor-pointer hover:text-third"
                                >
                                    CONTACTO
                                </a>
                            </div>
                            <div className='lg:pl-10'>
                                <text
                                    onClick={() => { setActive(false); setShowModal(true) }}
                                    className="text-sm font-semibold leading-none tracking-tighter title-font uppercase mx-3 text-whitecolor cursor-pointer hover:text-third"
                                >
                                    COMPARTIR
                                </text>
                            </div>
                            <div className='lg:pl-10 py-1'>
                                <button className='hover:bg-third px-2 rounded-md'
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
                                    <div className='flex flex-row items-center'>
                                        <img
                                            src={`${router.basePath}/assert/icons/download.png`}
                                            width={16}
                                            alt="logo-linkedin"
                                        />
                                        <div className='flex flex-col ml-2'>
                                            <text
                                                className="text-sm leading-none font-semibold  title-font  text-whitecolor  text-left"
                                            >
                                                Descargar
                                            </text>
                                            <text
                                                className="text-sm leading-none font-semibold title-font  text-whitecolor  text-left mt-0.5"
                                            >
                                                Contacto
                                            </text>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            {showModal ? (
                                <>
                                    <div
                                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                    >
                                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                            {/*content*/}
                                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-whitecolor outline-none focus:outline-none">
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
                                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                </>
                            ) : null}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};
export { HeaderNav }