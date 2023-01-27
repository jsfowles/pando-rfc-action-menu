import React, { useState, useRef, ReactNode } from "react";
import { ActionMenuContext } from "./ActionMenuContext";

interface ComponentProps {
  children?: ReactNode;
  className?: string;
}

interface ActionMenuProviderProps extends ComponentProps {
  label: string;
}

export const ActionMenuProvider: React.FC<ActionMenuProviderProps> = ({
  children,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const id = label.toLowerCase().split(" ").join("-"); // convert label to kebab-case

  return (
    <ActionMenuContext.Provider value={{ isOpen, toggleOpen, buttonRef, id }}>
      {children}
    </ActionMenuContext.Provider>
  );
};
