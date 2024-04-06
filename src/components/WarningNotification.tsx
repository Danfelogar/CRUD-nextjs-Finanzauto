import { useEffect } from "react";

interface Props {
  body: string;
  title: string;
  icon?: JSX.Element;
  btnName: string;
  isShow: boolean;
  verifyAccount?: boolean;
  secondTitle?: string;
  changeModal: () => void;
  btnAction: () => void;
  customStyleWrapper?: string;
  customStyleContent?: string;
  hiddenBtnCancel?: boolean;
  childBody?: JSX.Element;
}

export const WarningNotification = ({
  body,
  btnName,
  changeModal,
  isShow,
  title,
  icon,
  btnAction,
  secondTitle,
  verifyAccount,
  customStyleContent,
  customStyleWrapper,
  hiddenBtnCancel = false,
  childBody,
}: Props) => {
  useEffect(() => {
    if (isShow) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isShow]);

  return (
    <div
      className={`${
        isShow ? "flex" : "hidden"
      } fixed inset-0 z-50 items-center justify-center`}
    >
      <div
        onClick={changeModal}
        className={`fixed inset-0 bg-custom-gray-120 opacity-55 ${customStyleWrapper}`}
      />
      <div
        className={`fixed flex flex-col justify-between items-center gap-2 px-4 pb-4 pt-8 shadow-alcanos-shadow bg-white rounded-md z-50 w-auto max-w-[calc(100%-2rem)]  ${customStyleContent} `}
      >
        <div className="flex flex-col gap-4 justify-center items-center">
          {icon && icon}

          <div>
            <h3 className="text-black text-center text-xl lg:text-2xl font-semibold">
              {title}
            </h3>
            {secondTitle && (
              <h4 className="text-black text-center text-xl lg:text-2xl font-semibold">
                {secondTitle}
              </h4>
            )}
          </div>
          <div className="max-w-[420px]">
            <p className="text-black text-sm font-normal text-justify">
              {body}
            </p>
            {childBody && childBody}
          </div>
        </div>
        <div
          className={`flex w-full items-center gap-5 ${
            verifyAccount ? "justify-center" : "justify-end "
          }`}
        >
          {!hiddenBtnCancel && (
            <span
              onClick={changeModal}
              className="cursor-pointer text-custom-purple text-sm  font-normal"
            >
              Cancelar
            </span>
          )}
          <button
            onClick={btnAction}
            className="transition delay-150 bg-custom-purple py-2 px-3 rounded-lg flex gap-1 justify-center items-center hover:bg-custom-purple-light"
          >
            <span className="text-white text-sm font-normal">{btnName}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
