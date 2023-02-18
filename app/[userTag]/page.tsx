import React from "react";

type Props = {
  params: {
    userTag: string;
  };
};

const UserPage = ({ params: { userTag } }: Props) => {
  return <div>{userTag}</div>;
};

export default UserPage;
