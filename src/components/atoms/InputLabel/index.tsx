import Asterisk from 'assets/images/asterisk.svg';

type Props = {
  value: string;
  required?: boolean;
  className?: string;
};

export default function InputLabel({ value, className, required = false }: Props) {
  return (
    <label className={`${className} font-normal block`}>
      <div className="flex gap-1">
        <span>{value}</span>
        {required && <img src={Asterisk} alt="stars" />}
      </div>
    </label>
  );
}
