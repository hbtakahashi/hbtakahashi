import React from "react";
import { client } from "@/src/lib/client";
import { Blog } from "@/src/types/blog";
import Image from "next/image";
export default async function LatestPosts() {
  const result = await client.get({ endpoint: "blog" });
  const data: Blog[] = (result.contents || []).slice(0, 3);

  return (
    <>
      <section>
        <div className="py-32 bg-[#0D131F]">
          <div className="flex justify-between mx-8">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-white text-5xl font-medium">
                最新の制作実績
              </h2>
              <div className="text-[#C6C6CC] text-lg font-medium">
                技術的な挑戦と学びの記録
              </div>
            </div>
            <div className="flex items-end gap-1 text-[#9FCAFF] text-sm font-medium">
              <a className="flex flex-low">
                <span>全実績を見る</span>
                <div className="flex items-center">
                  <Image
                    src="/externallinkIcon.svg"
                    alt="実績ページへ移行"
                    width={13.5}
                    height={13.5}
                  />
                </div>
              </a>
            </div>
          </div>

          <div className="mt-20 grid gap-6 p-10 grid-cols-2 md:grid-cols-3">
            {data.map((post) => {
              const formattedDate = new Intl.DateTimeFormat("ja-JP", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              }).format(new Date(post.date));
              return (
                <article
                  key={post.id}
                  className=" bg-[#242A36]/60 border border-[#45474C]/15 rounded-lg hover:border-blue-500 transition-colors"
                >
                  {post.eyecatch && (
                    <Image
                      src={post.eyecatch.url}
                      width={post.eyecatch.width}
                      height={post.eyecatch.height}
                      alt={post.title}
                    />
                  )}
                  <div className="p-8 flex flex-col gap-3.75">
                    <h3 className="text-2xl font-bold text-white">
                      {post.title}
                    </h3>
                    <p className="text-sm font-medium text-[#C6C6CC] h-10 line-clamp-2 leading-relaxed">
                      {post.summary}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.categorys?.map((cat) => (
                        <span
                          key={cat.id}
                          className="text-[10px] uppercase tracking-wider text-[#C6C6CC] bg-[#161C27] px-3 py-1 rounded-lg"
                        >
                          {cat.name}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between">
                      <div className="text-[#C6C6CC]">{formattedDate}</div>
                      <div className="flex items-center ">
                        <a>
                          <Image
                            src="/arrowforward.svg"
                            alt="詳細を見る"
                            width={16}
                            height={12}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
