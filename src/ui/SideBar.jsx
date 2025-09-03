function SideBar({ children }) {
  return (
    <div className="bg-secondary-0 lg:row-start-1 lg:row-span-2 p-4 lg:p-4">
      <ul className="flex flex-col gap-y-3 lg:gap-y-4">{children}</ul>
    </div>
  );
}

export default SideBar;
