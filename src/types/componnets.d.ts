import { ButtonHTMLAttributes, ReactNode } from "react";

export interface CustomBtnProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isDisabled?: boolean;
  spinnerClass?: string;
}

export interface TableVideosGeneric {
  id: number;
  name: ReactNode;
  videos: number;
  size: string;
  lastModified: string;
  selected: boolean;
}

export interface TableVideoDetailsGeneric {
  id: number;
  name: ReactNode;
  size: string;
  time: string;
  lastModified: string;
  selected: boolean;
}

export interface HeaderTableGeneric {
  id: number;
  title: string;
  className?: string;
}
