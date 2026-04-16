export default function Hero() {
  return (
    <section className="relative bg-white pb-[110px] pt-[120px] lg:pt-[150px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full px-4 lg:w-5/12">
            <div className="hero-content">
              <h1 className="mb-5 text-4xl font-bold !leading-[1.2] text-dark sm:text-[42px] lg:text-[40px] xl:text-[42px]">
                あなたのアイデアを、<br />
                最高の形で世界に届ける。
              </h1>
              <p className="mb-9 max-w-[480px] text-base text-body-color">
                Next.js、TypeScript、Tailwind CSSを駆使して、高速で美しいWebサイトを構築します。
              </p>
              <ul className="flex flex-wrap items-center gap-4">
                <li>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-700 lg:px-7"
                  >
                    今すぐ始める
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-slate-100 px-6 py-3 text-center text-base font-medium text-slate-700 hover:bg-slate-200 lg:px-7"
                  >
                    詳しく知る
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden px-4 lg:block lg:w-7/12">
            <div className="relative z-10 lg:ml-auto">
              <div className="w-full h-[400px] bg-blue-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-blue-200">
                <span className="text-blue-300 font-bold">ここに画像を配置</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}