import React, {
  ElementType,
  useContext,
  useRef,
  useEffect,
  KeyboardEvent,
} from "react";
import { ActionMenuContext } from "./ActionMenuContext";

interface ComponentProps {
  children?: React.ReactNode;
  className?: string;
}

interface ActionMenuListProps extends ComponentProps {
  as?: ElementType;
}

export const ActionMenuList: React.FC<ActionMenuListProps> = ({
  children,
  as = "ul",
  ...rest
}) => {
  const { isOpen, toggleOpen, buttonRef, id } =
    useContext(ActionMenuContext) ?? {};
  const Component = as;
  const listRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isOpen && listRef.current) {
      const firstChild = listRef.current.firstChild;
      (firstChild as HTMLElement)?.focus();
    }
  }, [isOpen]);

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape") {
      toggleOpen && toggleOpen();
      buttonRef?.current?.focus();
    }
  };

  return isOpen ? (
    <Component
      role="menu"
      ref={listRef}
      onKeyDown={handleKeyDown}
      id={id}
      aria-label="Menu"
      {...rest}
    >
      {children}
    </Component>
  ) : null;
};
