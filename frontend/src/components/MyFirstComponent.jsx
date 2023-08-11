import React from "react";

const ChildComponent = () => {
  return <div>This is a child component.</div>;
};

const MyFirstComponent = ({ includeChild }) => {
  return (
    <div className="my-8 text-bold bg-yellow-200">
      MyFirstComponent
      {includeChild && <ChildComponent />}
    </div>
  );
};

export default MyFirstComponent;
