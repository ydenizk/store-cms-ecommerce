import React from "react";

interface ContanerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContanerProps> = ({ children }) => {
  return <div className="max-w-7xl mx-auto">{children}</div>;
};

export default Container;
