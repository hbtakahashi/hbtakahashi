"use client";

import { useState, useRef } from "react";

export default function Hero() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const preRef = useRef<HTMLPreElement>(null);

  const handleScroll = () => {
    if (textareaRef.current && preRef.current) {
      preRef.current.scrollTop = textareaRef.current.scrollTop;
      preRef.current.scrollLeft = textareaRef.current.scrollLeft;
    }
  };

  const renderHighlightedCSS = (css: string) => {
    // VSCode風のシンタックスハイライト（コメント、クラス名、プロパティ名）
    const regex =
      /(\/\*[\s\S]*?\*\/|\.[a-zA-Z_-][a-zA-Z0-9_-]*|[a-zA-Z0-9-]+(?=\s*:))/g;
    const parts = css.split(regex);

    return parts.map((part, index) => {
      if (!part) return null;
      if (part.startsWith("/*")) {
        // コメント (VS Code風の緑)
        return (
          <span key={index} className="text-[#6A9955]">
            {part}
          </span>
        );
      }
      if (part.match(/^\.[a-zA-Z_-]/)) {
        // クラス名 (ユーザー指定の色)
        return (
          <span key={index} className="text-[#D7BA7D]">
            {part}
          </span>
        );
      }
      if (part.match(/^[a-zA-Z0-9-]+$/)) {
        // プロパティ名 (VS Code風の水色)
        return (
          <span key={index} className="text-[#9CDCFE]">
            {part}
          </span>
        );
      }
      // その他 (記号や値など)
      return <span key={index}>{part}</span>;
    });
  };

  const [customCss, setCustomCss] = useState(`.hero-title {
    color: #FFF;
    }
.hero-subtitle {
  color: #FFF;
}
.hero {
  background: #0D131F;
}
.structure {
/*仕組み*/
  color: #9FCAFF;

}
.playfulness {
/*遊び心*/
  background-image: linear-gradient(150deg, #C1C6D7 0%, #1A202C 100%);
}`);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: customCss }} />
      <section
        id="hero"
        className="hero relative pb-[110px] pt-[120px] lg:pt-[150px]"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            <div className="w-full lg:flex-[3]">
              <div className="hero-content">
                <h1
                  id="main-text"
                  className="hero-title mb-5 text-4xl font-bold leading-[1.2]! sm:text-[42px] lg:text-6xl xl:text-8xl pl-[1em] -indent-[1em]"
                >
                  「<span className="structure">仕組み</span>
                  で支え、
                  <span className="playfulness bg-clip-text text-transparent">
                    遊び心
                  </span>
                  で驚かす。
                </h1>
                <p
                  id="sub-text"
                  className="hero-subtitle mb-9 max-w-160 text-body-color text-xl pl-24"
                >
                  誰かの不便を解消する「仕組み」と、誰かの日常を彩る「遊び心」。自律的な好奇心を原動力に、開発の効率化と最高のユーザー体験を同時に実現します。
                </p>
                <ul className="flex flex-wrap items-center gap-4 pl-24">
                  <li>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center rounded-md bg-[#006BB5] px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-700 lg:px-7"
                    >
                      制作実績を見る
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center rounded-md bg-slate-100 px-6 py-3 text-center text-base font-medium text-slate-700 hover:bg-slate-200 lg:px-7"
                    >
                      プロフィール
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:flex-2 max-w-md h-80 p-6 bg-[#242A36]/60 shadow-2xl border border-[#45474C]/15 rounded-lg rotate-3">
              <div className="flex items-center px-4 py-2 border-b border-slate-700 bg-[#080E1A]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FFB4AB]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#EAB308]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#6BDC96]"></div>
                </div>
              </div>
              <div className="relative w-full h-64 bg-[#080E1A] overflow-hidden rounded-b-md">
                <pre
                  ref={preRef}
                  className="absolute inset-0 w-full h-full m-0 font-mono text-sm text-white px-4 py-2 whitespace-pre-wrap break-words overflow-hidden pointer-events-none"
                  aria-hidden="true"
                >
                  {renderHighlightedCSS(customCss)}
                </pre>
                <textarea
                  ref={textareaRef}
                  id="css-editor"
                  className="absolute inset-0 w-full h-full bg-transparent text-transparent caret-white font-mono text-sm px-4 py-2 focus:outline-none resize-none whitespace-pre-wrap wrap-break-word"
                  spellCheck={false}
                  value={customCss}
                  onChange={(e) => setCustomCss(e.target.value)}
                  onScroll={handleScroll}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
