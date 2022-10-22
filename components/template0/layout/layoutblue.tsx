
import HeaderNav from '../header/headerblue';
import FooterNav from "../footer/footer";

type Props = {
  name: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  number: string;
  locality: string;
  province: string;
  country: string;
  avatar: string;
  url: string;
  children: any;
};

export default function LayoutBlue(props: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderNav
        name={props.name}
        description={props.description}
        email={props.email}
        phone={props.phone}
        address={props.address + ' ' + props.number + ', ' + props.locality}
        avatar={props.avatar}
        url={props.url}
      />
      <main className="flex-1 mt-20 md:mt-10">
        {props.children}
      </main>
      <FooterNav />
    </div>
  );
}