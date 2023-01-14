import React, { useState } from "react";
import { createPortal } from "react-dom";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "./Store/modalShowSlice";
import { addItem, editItem } from "./Store/outputDataSlice";

const Modal = () => {
  const dispatch = useDispatch();

  const headingText = useSelector((state) => state.modalHandler.headingText);
  const buttonText = useSelector((state) => state.modalHandler.buttonText);
  const modalType = useSelector((state) => state.modalHandler.modalType);
  const index = useSelector((state) => state.modalHandler.index);
  const id = useSelector((state) => state.modalHandler.id);
  const objAr = useSelector((state) => state.outputDataHandler);

  const indexReq = objAr.findIndex((item) => item.id === id);

  const defaultTitle = modalType === "default" ? "" : objAr[indexReq].title;
  const defaultType =
    modalType === "default" ? "Complete" : objAr[indexReq].type;
  const [titleValue, setTitleValue] = useState(defaultTitle);
  const [typeValue, setTypeValue] = useState(defaultType);

  const submitHandler = (event) => {
    event.preventDefault();
    const currentDate = Date.now();
    if (titleValue.trim().length === 0) {
      alert("Enter title");
      return;
    }
    const obj = {
      id: Math.random(),
      title: titleValue,
      type: typeValue,
      currentDate: currentDate,
    };
    if (modalType === "default") dispatch(addItem(obj));
    else if (modalType === "update")
      dispatch(
        editItem({
          id: objAr[index].id,
          obj: obj,
        })
      );
    dispatch(hideModal());
  };
  // useEffect(() => {
  //   document.addEventListener("keydown", (event) => {
  //     if (event.key === "Enter") {
  //       event.preventDefault();
  //       submitHandler();
  //     }
  //   });
  // }, []);

  return createPortal(
    <>
      <div
        className="z-50 fixed top-0 left-0 h-screen w-screen"
        style={{ backgroundColor: "rgba(0,0,0,0.7" }}
      ></div>
      <div className="relative">
        <form onSubmit={submitHandler}>
          <div className="bg-violet-100 p-8 z-50 fixed right-[50%] top-[50%] translate-x-1/2 -translate-y-1/2 rounded-2xl">
            <button
              onClick={() => {
                dispatch(hideModal());
                // indexHandler(-1);
              }}
              className="z-50 absolute bg-gray-300 px-3 py-2 right-0 -top-[15%] text-gray-800 font-bold rounded-lg transition-all duration-500 hover:bg-red-600 hover:text-white group"
            >
              <RxCross1 className="text-gray-800 group-hover:text-white" />
            </button>

            <div className="text-xl font-bold text-gray-500">{headingText}</div>
            <div className="mt-6 text-lg">Title</div>
            <input
              type="text"
              className="md:w-[30rem] w-[18rem] py-2 my-2 pl-3"
              value={titleValue}
              onChange={(event) => setTitleValue(event.target.value)}
            />
            <div className="my-3">Status</div>
            <select
              name=""
              id=""
              className="w-full py-3 mb-8 pl-3"
              onChange={(event) => setTypeValue(event.target.value)}
              defaultValue={defaultType}
            >
              <option value="Complete">Complete</option>
              <option value="Incomplete">Incomplete</option>
            </select>
            <div className="flex flex-row space-x-2">
              <button
                type="submit"
                className="text-white bg-buttonColor px-4 py-2 rounded-lg text-lg"
              >
                {buttonText}
              </button>
              <button
                onClick={() => {
                  dispatch(hideModal());
                  //   indexHandler(-1);
                }}
                className="text-white bg-selectBgColor px-4 py-2 rounded-lg text-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </>,
    document.getElementById("modals")
  );
};

export default Modal;
