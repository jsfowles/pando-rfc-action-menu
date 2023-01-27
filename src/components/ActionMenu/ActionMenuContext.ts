import { createContext, useContext, RefObject } from "react";

interface IActionMenuContext {
  isOpen: boolean;
  toggleOpen: () => void;
  buttonRef: RefObject<HTMLButtonElement>;
  id: string;
}

const defaultActionMenuContext: IActionMenuContext = {
  isOpen: false,
  toggleOpen: () => {}, 
  buttonRef: { current: null }, 
  id: "",
};

export const ActionMenuContext = createContext<IActionMenuContext>(
  defaultActionMenuContext
);

export const useActionMenuContext = (): IActionMenuContext =>
  useContext(ActionMenuContext);
