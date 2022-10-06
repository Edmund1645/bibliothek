import React from "react";

interface Props {
  view: "list" | "grid";
  setView: React.Dispatch<React.SetStateAction<"list" | "grid">>;
}

const Toolbar = ({}: Props) => {
  return <div>Toolbar</div>;
};

export default Toolbar;
