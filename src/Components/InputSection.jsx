import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { showModal } from "./Store/modalShowSlice";
import { setOutputType } from "./Store/outputTypeSlice";

const InputSection = () => {
  const dispatch = useDispatch();

  const typeRef = useRef();

  return (
    <>
      <div className="my-5 max-w-[45rem] mx-auto max px-10">
        <div className="text-headingColor text-5xl font-bold text-center">
          TODO LIST
        </div>
        <div className="flex flex-row justify-between mt-10">
          <button
            onClick={() =>
              dispatch(
                showModal({
                  type: "default",
                  index: null,
                })
              )
            }
            className="text-white bg-buttonColor px-4 py-2 rounded-lg text-lg"
          >
            Add Task
          </button>
          <select
            name=""
            id=""
            className="bg-selectBgColor px-4 py-2 rounded-lg text-lg cursor-pointer"
            ref={typeRef}
            onChange={() => dispatch(setOutputType(typeRef.current.value))}
          >
            <option value="All">All</option>
            <option value="Complete">Complete</option>
            <option value="Incomplete">Incomplete</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default InputSection;
