import React, { ReactNode, useContext, KeyboardEvent } from "react";
import { ActionMenuContext } from "./ActionMenuContext";

interface ComponentProps {
  children?: ReactNode;
  className?: string;
}

export const ActionMenuButton: React.FC<ComponentProps> = ({
  children,
  ...rest
}) => {
  const { isOpen, toggleOpen, buttonRef, id } =
    useContext(ActionMenuContext) ?? {};

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter") {
      toggleOpen && toggleOpen();
    }
    if (event.key === "Escape" && !isOpen) {
      buttonRef?.current?.focus();
    }
  };

  return (
    <button
      onClick={toggleOpen}
      onKeyDown={handleKeyDown}
      role="button"
      aria-haspopup="true"
      aria-expanded={isOpen}
      aria-controls={id}
      aria-label="Open menu"
      ref={buttonRef}
      {...rest}
    >
      {children}
    </button>
  );
};
