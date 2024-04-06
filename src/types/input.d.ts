import { HTMLInputTypeAttribute, ReactNode } from "react";

export interface PropsInputGeneric {
  borderColor: string;
  firstIcon?: ReactNode;
  placeholder: string;
  placeholderTextColor: string;
  typeInput: HTMLInputTypeAttribute;
  inputColor: string;
  lastIcon?: ReactNode;
  multilineStyle?: StyleProp<any>;
  //control
  name: string;
  control: any;
}
