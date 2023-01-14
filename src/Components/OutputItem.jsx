import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { BsFillPencilFill } from "react-icons/bs";
import { Checkbox } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeItem, editItem } from "./Store/outputDataSlice";
import { showModal } from "./Store/modalShowSlice";

const OutputItem = ({ title, type, currentDateTimestamp, index, id }) => {
  const dispatch = useDispatch();

  const defaultTick = type === "Complete" ? true : false;
  const [isTicked, setIsTicked] = useState(defaultTick);

  const styleComplete = "font-bold line-through decoration-2";
  const styleIncomplete = "font-bold";
  const defaultTypeStyle =
    type === "Complete" ? styleComplete : styleIncomplete;
  const [typeStyle, setTypeStyle] = useState(defaultTypeStyle);

  const tickHandler = (event) => {
    const currentDate = Date.now();
    const typeNew = type === "Complete" ? "Incomplete" : "Complete";
    if (type === "Complete") {
      setIsTicked(false);
      setTypeStyle(styleIncomplete);
    } else {
      setIsTicked(true);
      setTypeStyle(styleComplete);
    }
    const obj = {
      id: id,
      title: title,
      type: typeNew,
      currentDate: currentDate,
    };
    dispatch(
      editItem({
        id: id,
        obj: obj,
      })
    );
  };

  const currentDate = new Date(currentDateTimestamp);

  const dates = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const year = currentDate.getFullYear();
  const dateDisplay = `${dates}/${month}/${year}`;

  const time = currentDate.toLocaleTimeString(undefined, { hour12: true });
  const hours = time.split(":")[0].toString().padStart(2, "0");
  const minutes = time.split(":")[1].toString().padStart(2, "0");
  const ampm = time.split(":")[2].split(" ")[1];
  const timeDisplay = `${hours}:${minutes} ${ampm}`;

  const buttonStyle =
    "p-2 bg-gray-200 hover:bg-gray-300 transition-all duration-300";
  return (
    <>
      <div className="flex flex-row items-center justify-between w-full bg-white rounded-xl">
        <div className="flex flex-row">
          <div onClick={() => tickHandler()}>
            <Checkbox checked={isTicked} onClick={() => tickHandler()} />
          </div>

          <div className="flex flex-col text-sm p-3">
            <div className="flex flex-row"></div>
            <div className={typeStyle}>{title}</div>
            <div>{`${timeDisplay},${dateDisplay}`}</div>
          </div>
        </div>
        <div className="flex flex-row space-x-3 px-3">
          <button
            className={buttonStyle}
            onClick={() => dispatch(removeItem(index))}
          >
            <MdDelete className="text-gray-700 text-xl" />
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              dispatch(
                showModal({
                  type: "update",
                  index: index,
                  id: id,
                })
              );
            }}
          >
            <BsFillPencilFill />
          </button>
        </div>
      </div>
    </>
  );
};

export default OutputItem;
