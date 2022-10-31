import React from "react";
import emailjs from "emailjs-com";

type FormContactProps = {
    name: string;
    email: string;
};
const FormContact = (props: FormContactProps) => {
    const [name, setName] = React.useState<string>(props.name);
    const [email, setEmail] = React.useState<string>(props.email);
    const [subject, setSubject] = React.useState<string>('');
    const [userName, setUserName] = React.useState<string>('');
    const [userEmail, setUserEmail] = React.useState<string>('');
    const [userPhone, setUserPhone] = React.useState<string>('');
    const [userMessage, setUserMessage] = React.useState<string>('');
    const sendEmail = (e: any) => {
        e.preventDefault();
        let template_params: any = {
            'name': name,
            'email': email,
            'userName': userName,
            'subject': subject,
            'userEmail': userEmail,
            'userPhone': userPhone,
            'userMessage': userMessage
        }
        console.log(template_params);
        if (isFormValid()) {
            emailjs.sendForm(
                'service_uaspm8b',
                'template_515111c',
                e.target,
                'WSCfrih77YZvBQ-QY').then(res => {
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                });
            restInput();
        } else {
            console.log('Datos Incorrectos')
        }

    }
    const isFormValid = () => {
        return (
            userName !== '' &&
            subject !== '' &&
            userEmail !== '' &&
            userPhone !== '' &&
            userMessage !== ''
        )
    }

    const restInput = () => {
        setUserName('');
        setUserEmail('');
        setSubject('');
        setUserPhone('');
        setUserMessage('');
    }
    return (
        <section className="lg:container px-10 py-6 mx-auto text-center sm:text-left" >
            <form onSubmit={sendEmail}>
                <div className="grid grid-cols-1 gap-8 mt-4 sm:grid-cols-2 md:grid-cols-4">
                    <div hidden>
                        <input
                            id="name"
                            name='name'
                            type="text"
                            value={name}
                            onChange={(value: any) => setName(value.currentTarget.value)}
                            className="block w-full  px-4 py-2 mt-2 text-t1labelcolor bg-t1inputcolor border border-t1inputcolor rounded-md dark:bg-t1inputcolor dark:text-t1primary dark:border-t1inputcolor focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                    </div>
                    <div hidden>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={(value: any) => setEmail(value.currentTarget.value)}
                            className="block w-full px-4 py-2 mt-2 text-t1labelcolor bg-t1inputcolor border border-t1inputcolor rounded-md dark:bg-t1inputcolor dark:text-t1primary dark:border-t1inputcolor focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label htmlFor="userName" className="sm:pl-4 text-t1labelcolor dark:text-t1secondary">Nombre</label>
                        <input
                            id="username"
                            name='userName'
                            type="text"
                            value={userName}
                            onChange={(value: any) => setUserName(value.currentTarget.value)}
                            className="block w-full  px-4 py-2 mt-2 text-t1labelcolor bg-t1inputcolor border border-t1inputcolor rounded-md dark:bg-t1inputcolor dark:text-t1primary dark:border-t1inputcolor focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="sm:pl-4 text-t1labelcolor dark:text-t1secondary">Asunto</label>
                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            value={subject}
                            onChange={(value: any) => setSubject(value.currentTarget.value)}
                            className="block w-full px-4 py-2 mt-2 text-t1labelcolor bg-t1inputcolor border border-t1inputcolor rounded-md dark:bg-t1inputcolor dark:text-t1primary dark:border-t1inputcolor focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="sm:pl-4 text-t1labelcolor dark:text-t1secondary" >E-mail</label>
                        <input
                            id="userEmail"
                            name="userEmail"
                            type="email"
                            value={userEmail}
                            onChange={(value: any) => setUserEmail(value.currentTarget.value)}
                            className="block w-full px-4 py-2 mt-2 text-t1labelcolor bg-t1inputcolor border border-t1inputcolor rounded-md dark:bg-t1inputcolor dark:text-t1primary dark:border-t1inputcolor focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="sm:pl-4 text-t1labelcolor dark:text-t1secondary">Teléfono</label>
                        <input
                            id="userPhone"
                            name="userPhone"
                            type="text"
                            value={userPhone}
                            onChange={(value: any) => setUserPhone(value.currentTarget.value)}
                            className="block w-full px-4 py-2 mt-2 text-t1labelcolor bg-t1inputcolor border border-t1inputcolor rounded-md dark:bg-t1inputcolor dark:text-t1primary dark:border-t1inputcolor focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-8 mt-4">
                    <div className="relative mb-4">
                        <label className="sm:pl-4 text-t1labelcolor dark:text-t1secondary">Dejá tu consulta</label>
                        <textarea
                            id="userMessage"
                            name="userMessage"
                            value={userMessage}
                            onChange={(value: any) => setUserMessage(value.currentTarget.value)}
                            className="block w-full px-4 py-2 mt-2 text-t1labelcolor bg-t1inputcolor border border-t1inputcolor rounded-md dark:bg-t1inputcolor dark:text-t1primary dark:border-t1inputcolor focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring duration-200 ease-in-out"></textarea>
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    <button
                        type='submit'
                        className="px-8 py-3 pt-4 leading-5 transition-colors duration-200 transform bg-t1secondary rounded-md hover:bg-primary focus:outline-none focus:bg-t1btncolor shadow-lg" style={{ color: 'white' }}>
                        <h1 className="mx-auto text-base font-semibold leading-none tracking-tighter text-whitecolor title-font">
                            ENVIAR
                        </h1>
                    </button>
                </div>
            </form>
        </section>
    );
};

export default FormContact;