export const Navbar = () => (
  <nav className="fixed flex top-0 z-1 py-4 w-full backdrop-blur-[20px] border-b-[3px] border-[rgba(221,226,227,0.5)] bg-gradient-to-b">
    <div className="mx-auto flex w-6/10 max-w-7xl items-center justify-center">
      <div className="flex flex-row gap-x-2 items-end">
        <img
          src="https://images.keepfre.sh/app/icons/AppIcon-iOS-Default-1024x1024%401x.png"
          alt="keepfresh-icon"
          width="50px"
        />
        <div className="text-3xl font-serif text-green-500">Keep Fresh</div>
      </div>
    </div>
  </nav>
);
