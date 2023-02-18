"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
type Props = {};

const PollViewCard = (props: Props) => {
  const [pollId, setPollId] = useState<string>("");
  const [userPhoto, setUserPhoto] = useState<string>(
    "https://dummyimage.com/100x100/b3b3b3.png"
  );
  const [userName, setUserName] = useState<string>("User Name");
  const [userTag, setUserTag] = useState<string>("@userTag");
  const [pollQuestion, setPollQuestion] = useState<string>(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente ratione omnis impedit expedita odio tenetur rerum debitis saepe nisi magnam!"
  );
  const [pollOptions, setPollOptions] = useState<string[]>([]);
  return (
    <div className="p-2">
      <div className="flex items-center space-x-2">
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
      </div>
      <p>{pollQuestion}</p>
    </div>
  );
};

export default PollViewCard;
