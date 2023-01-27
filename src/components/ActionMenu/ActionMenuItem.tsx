import React, {
  ElementType,
  AnchorHTMLAttributes,
  useRef,
  KeyboardEvent,
  ReactNode,
} from "react";

interface ActionMenuItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  as?: ElementType;
  onSelect: () => void;
  leadingVisual?: ReactNode;
  trailingVisual?: ReactNode;
  disabled?: boolean;
}

export const ActionMenuItem: React.FC<ActionMenuItemProps> = ({
  as = "li",
  onSelect,
  children,
  leadingVisual,
  trailingVisual,
  disabled = false,
  ...rest
}) => {
  const itemRef = useRef<HTMLElement>(null);
  const Component = as;

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        (itemRef.current?.nextSibling as HTMLElement)?.focus();
        break;
      case "ArrowUp":
        event.preventDefault();
        (itemRef.current?.previousSibling as HTMLElement)?.focus();
        break;
      case "Enter":
        onSelect();
        break;
      case "Escape":
        onSelect();
        break;
      default:
        break;
    }
  };

  return (
    <Component
      ref={itemRef}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="menuitem"
      aria-disabled={disabled ? true : undefined}
      {...rest}
    >
      {leadingVisual && <span className="leading-visual">{leadingVisual}</span>}
      <span>{children}</span>
      {trailingVisual && (
        <span className="trailing-visual">{trailingVisual}</span>
      )}
    </Component>
  );
};
