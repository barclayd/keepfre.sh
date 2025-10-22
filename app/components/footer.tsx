export function Footer() {
  return (
    <footer
      style={{ backgroundColor: 'rgb(51, 51, 51)' }}
      className="w-full py-8"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-8 text-white/80 text-sm">
          <a href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-white transition-colors">
            Terms of Use
          </a>
          <a
            href="mailto:hello@keepfre.sh"
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
        <div
          style={{ backgroundColor: 'rgb(68, 68, 68)' }}
          className="h-[1px] my-6 mx-auto max-w-2xl"
        />
        <div className="text-center text-white/60 text-sm">
          © 2025, Keep Fresh
        </div>
      </div>
    </footer>
  );
}
