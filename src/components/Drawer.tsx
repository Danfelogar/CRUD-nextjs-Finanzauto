import { ReactNode, useEffect } from "react";

interface IPropsDrawer {
  children: ReactNode;
  title: string;
  saveTitle?: string;
  validValues: boolean;
  iconSave?: ReactNode;
  isShowDrawer: boolean;
  saveAction?: () => void;
  changeDrawer: () => void;
  customStyleFooter?: string;
  customStyleHeader?: string;
  customStyleDrawer?: string;
}

export const Drawer = ({
  title,
  children,
  iconSave,
  saveTitle,
  saveAction,
  validValues,
  isShowDrawer,
  changeDrawer,
  customStyleFooter,
  customStyleDrawer,
  customStyleHeader,
}: IPropsDrawer) => {
  useEffect(() => {
    if (isShowDrawer) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isShowDrawer]);

  return (
    <div
      className={
        "fixed overflow-hidden z-50 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out" +
        (isShowDrawer
          ? " transition-opacity opacity-100 duration-500 translate-x-0"
          : " transition-all delay-75 duration-500 opacity-0 translate-x-full")
      }
    >
      <div
        className={`flex flex-col h-full w-screen max-w-2xl right-0 absolute bg-custom-gray-60 shadow-xl duration-500 ease-in-out transition-all transform ${
          isShowDrawer ? "translate-x-0" : "translate-x-full"
        } ${customStyleDrawer}`}
      >
        <div
          className={`flex items-center justify-between px-4 py-4 bg-custom-purple ${customStyleHeader}`}
        >
          <h3 className="text-base font-medium leading-[normal] text-white">
            {title}
          </h3>
          <button
            type="button"
            onClick={changeDrawer}
            className="text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
            data-modal-hide="defaultModal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
        <div className="overflow-y-auto flex-1">{children}</div>
        <div
          className={`flex justify-end items-center p-4 gap-4 bg-white border border-t border-custom-gray-60 ${customStyleFooter}`}
        >
          <div
            onClick={changeDrawer}
            className="transition delay-150 py-2 px-3 rounded-lg flex justify-center items-center hover:bg-custom-purple-light cursor-pointer"
          >
            <span className="text-custom-purple text-sm">Cancelar</span>
          </div>
          {/* <button
            type="button"
            onClick={saveAction}
            disabled={validValues}
            className="cursor-pointer transition delay-150 bg-custom-purple py-2 px-3 rounded-lg flex gap-1 justify-center items-center hover:bg-custom-purple w-full max-w-max disabled:bg-custom-purple disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {iconSave}
            <span className="text-white text-sm font-normal">
              {saveTitle || "Guardar"}
            </span>
          </button> */}
        </div>
      </div>
      <div className="w-screen h-full cursor-pointer" onClick={changeDrawer} />
    </div>
  );
};
