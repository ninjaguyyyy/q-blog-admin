import Copyright from 'components/molecules/Copyright';
import './index.scss';

export default function Footer() {
  return (
    <div className="footer flex flex-col justify-center items-center xs:py-8 xs:px-6">
      {/* <div className="w-1/3 xs:w-full p-2"> */}
        <Copyright />
      {/* </div> */}
    </div>
  );
}
