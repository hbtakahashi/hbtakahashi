import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Works", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com",
      icon: "devicon-github-original",
    },
    {
      label: "Twitter",
      href: "https://twitter.com",
      icon: "devicon-twitter-original",
    },
  ];

  return (
    <footer className="bg-[#0D131F] border-t border-[#45474C]/20">
      {/* グラデーションライン */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#9FCAFF]/40 to-transparent" />

      <div className="container mx-auto px-8 pt-12 pb-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* ロゴ・キャッチコピー */}
          <div className="flex flex-col gap-2">
            <span className="text-white text-xl font-bold tracking-wide">
              hbtakahashi
            </span>
            <span className="text-[#C6C6CC] text-sm">
              「遊び心を、デプロイする。」
            </span>
          </div>

          {/* ナビゲーション */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#C6C6CC] text-sm hover:text-[#9FCAFF] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* SNSアイコン */}
          <nav aria-label="SNSリンク">
            <ul className="flex flex-row gap-4">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-full border border-[#45474C]/40 bg-[#242A36]/60 text-[#C6C6CC] hover:text-[#9FCAFF] hover:border-[#9FCAFF]/50 hover:bg-[#9FCAFF]/10 transition-all duration-200"
                  >
                    <i className={`${social.icon} text-lg`} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* コピーライト */}
        <div className="mt-10 pt-6 border-t border-[#45474C]/20 text-center">
          <p className="text-[#C6C6CC]/50 text-xs">
            © {currentYear} hbtakahashi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
