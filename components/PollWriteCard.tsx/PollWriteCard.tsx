"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const PollWriteCard = (props: Props) => {
  const [userPhoto, setUserPhoto] = React.useState<string>(
    "https://dummyimage.com/100x100/b3b3b3.png"
  );
  const [userName, setUserName] = React.useState<string>("User Name");
  const [userTag, setUserTag] = React.useState<string>("@userTag");

  return (
    <div className=" pb-4 px-2 rounded-md flex items-center space-x-2 w-full border-b-[1px] border-slate-100 max-h-min">
      {/* userPhoto */}
      <Image
        src={userPhoto}
        alt="userPhoto"
        width={50}
        height={50}
        className="rounded-full cursor-pointer"
      />
      {/* userTag */}
      <Link href={`/${userTag}`} className="cursor-pointer">
        <div className="flex flex-col">
          <span className="text-sm">{userName}</span>
          <span className="text-xs text-slate-500 font-bold tracking-wide">
            {userTag}
          </span>
        </div>
      </Link>
      <Link href={`/${userTag}/poll`} className="flex-1 cursor-pointer">
        <div className="pl-6 w-full">
          <input
            type="text"
            placeholder="Ask a poll..."
            className="w-full px-6 py-2  rounded-full focus:outline-none bg-slate-50 transition duration-150 italic placeholder:text-sm"
          />
        </div>
      </Link>
    </div>
  );
};

export default PollWriteCard;
