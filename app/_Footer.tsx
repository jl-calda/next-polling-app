import { FaVoteYea } from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
  const logoStyle = "w-8 h-8";
  const textStyle = "text-xs text-slate-500";
  return (
    <footer className="flex items-end justify-around border-t-[1px] border-slate-50">
      <div className="flex flex-col p-2 rounded-md">
        <FaVoteYea className={logoStyle} />
        <span className={textStyle}>On-going</span>
        <span className={textStyle}>Polls</span>
      </div>
      <div className="flex flex-col p-2 rounded-md">
        <FaVoteYea className={logoStyle} />
        <span className={textStyle}>On-going</span>
        <span className={textStyle}>Polls</span>
      </div>
      <div className="flex flex-col p-2 rounded-md">
        <FaVoteYea className={logoStyle} />
        <span className={textStyle}>On-going</span>
        <span className={textStyle}>Polls</span>
      </div>
      <div className="flex flex-col p-2 rounded-md">
        <FaVoteYea className={logoStyle} />
        <span className={textStyle}>On-going</span>
        <span className={textStyle}>Polls</span>
      </div>
    </footer>
  );
};

export default Footer;
