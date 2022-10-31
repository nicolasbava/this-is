import Link from 'next/link';

export default function FooterNav() {
    return (
        <footer className="lg:ml-32" style={{backgroundColor:'#dc7650a6'}}>
            <div className="container mx-auto px-6 md:px-12 py-8 p ">
                <div className="flex flex-row justify-between item-center">
                    <Link href={'https://www.wijex.com'}>
                        <img
                            src="/logo-wijex-footer.png"
                            width={93.75} height={43.5}
                            alt="logo-wijex.png"
                        />
                    </Link>
                    <div className="hidden md:flex flex-row justify-between items-center pt-3">
                        <p className="text-whitecolor text-xs md:text-base">Creado por <Link href={'https://www.wijex.com'}>Wijex</Link> © 2021 Todos los derechos reservados</p>
                    </div>
                    <div className="flex flex-col justify-center item-center md:hidden">
                        <p className="text-whitecolor text-xs">Creado por  <Link href={'https://www.wijex.com'}>Wijex</Link> © 2021</p>
                        <p className="text-whitecolor text-xs">Todos los derechos reservados</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}