import Image from "next/image";

type ButtonProps = {
  text: string;
  href: string;
  className: string;
  iconSrc?: string;
  iconAlt?: string;
};

type TwoButtonsProps = {
  buttons: ButtonProps[];
};

export default function TwoButtons({ buttons }: TwoButtonsProps) {
  return (
    <div className="flex gap-4 items-center flex-col sm:flex-row">
      {buttons.map((btn, index) => (
        <a
          key={index}
          className={`rounded-full transition-colors flex items-center justify-center font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto ${btn.className}`}
          href={btn.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {btn.iconSrc && (
            <Image
              className="dark:invert"
              src={btn.iconSrc}
              alt={btn.iconAlt || ""}
              width={20}
              height={20}
            />
          )}
          {btn.text}
        </a>
      ))}
    </div>
  );
}
