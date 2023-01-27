import {
  ActionMenuProvider,
  ActionMenuButton,
  ActionMenuList,
  ActionMenuItem,
} from "../src/components/ActionMenu";

export function App() {
  const handleClick = (item: string) => {
    alert(`You clicked on ${item}`);
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-black p-[7vw] text-white">
      <ActionMenuProvider label="unique-action-menu-label">
        <ActionMenuButton>Toggle Menu</ActionMenuButton>
        <ActionMenuList as="ul">
          <ActionMenuItem
            className="cursor-pointer space-x-2 "
            onSelect={() => handleClick("Item 1")}
            leadingVisual="👋"
            trailingVisual="⌘C"
          >
            Item 1
          </ActionMenuItem>
          <ActionMenuItem
            className="cursor-pointer space-x-2"
            onSelect={() => handleClick("Item 2")}
            leadingVisual="🔗"
            trailingVisual="⌘D"
          >
            Item 2
          </ActionMenuItem>
          
          {/* disabled */}
          <ActionMenuItem
            className="cursor-pointer space-x-2"
            onSelect={() => handleClick("Item 2")}
            leadingVisual="🔗"
            trailingVisual="⌘D"
            disabled
          >
            Item 3
          </ActionMenuItem>
        </ActionMenuList>
      </ActionMenuProvider>
    </div>
  );
}
