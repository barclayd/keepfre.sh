export const Navbar = () => (
  <nav className="fixed flex top-0 z-50 py-4 w-full backdrop-blur-[20px] border-b-[3px] border-[rgba(221,226,227,0.5)] bg-gradient-to-b">
    <div className="mx-auto flex max-w-7xl items-center justify-center">
      <div className="flex flex-row gap-x-1 items-end">
        <img
          src="https://images.keepfre.sh/app/icons/app-icon.webp"
          alt="keepfresh-icon"
          width="50px"
        />
        <div className="text-3xl font-serif text-green-500">KeepFresh</div>
      </div>
    </div>
  </nav>
);
