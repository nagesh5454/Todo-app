import React from "react";
import OutputItem from "./OutputItem";
import { useSelector } from "react-redux";

const OutputSection = () => {
  const displayType = useSelector((state) => state.outputTypeHandler.value);
  const objArray = useSelector((state) => state.outputDataHandler);

  let objArrayDisplay = [];

  // useEffect(() => {
  //   if (displayType === "All") objArrayDisplay = objArray;
  //   else objArrayDisplay = objArray.filter((item) => item.type === displayType);
  // });
  if (displayType === "All") objArrayDisplay = objArray;
  else objArrayDisplay = objArray.filter((item) => item.type === displayType);

  return (
    <>
      <div className="bg-gray-200 max-w-[40rem] mx-5 md:mx-auto rounded-xl py-5 flex flex-col items-center px-5 space-y-6">
        {objArrayDisplay.length === 0 && (
          <span className="bg-gray-300 mx-auto text-center rounded-lg px-4 py-1">
            No Todos
          </span>
        )}
        {objArrayDisplay.length !== 0 &&
          objArrayDisplay.map((item, index) => (
            <OutputItem
              key={item.id}
              id={item.id}
              title={item.title}
              type={item.type}
              currentDateTimestamp={item.currentDate}
              index={index}
            />
          ))}
      </div>
    </>
  );
};

export default OutputSection;
