import { PiArrowUpRight} from "react-icons/pi";

const CardCertificate = ({ academy, time, month }) => {
  return (
    <a
      href="{link}"
      target="_blank"
      className="border border-neutral-700 bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
    >
      <div>
        <h2 className="font-semibold text-neutral-100">{academy}</h2>
        <p className="text-neutral-400">
          {time} Horas - {month}
        </p>
      </div>
      <PiArrowUpRight  className="text-xl"/>
    </a>
  );
};
export default CardCertificate;
