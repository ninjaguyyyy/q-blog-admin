interface ErrorProps {
  message?: string;
  className?: string;
}

export default function InputError({ message, className }: ErrorProps) {
  if (message) {
    return (
      <div className={`${className} text-red-700 text-[13px] leading-[17px] whitespace-pre-line`}>
        {message}
      </div>
    );
  } else {
    return null;
  }
}
