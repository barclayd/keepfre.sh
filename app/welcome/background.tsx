export const Background = () => (
  <div
    className="flex justify-center items-center h-[500px] w-full bg-gradient-to-b from-[#c4e0e6] via-[#94c2f2] to-[#66a6ff]"
    style={{
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 15vh))',
    }}
  />
);
