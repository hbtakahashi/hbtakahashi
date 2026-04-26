import Hero from "@/src/components/elements/Hero";
import TechStack from "../../components/elements/TechStack";
import { client } from "@/src/lib/client";
import { Blog } from "@/src/types/blog";

export default async function Home() {
  // コンポーネント内でデータを取得するように変更
  const data = await client.get({ endpoint: "blog" });
  console.log(data);

  return (
    <main>
      <Hero />
      <TechStack />
    </main>
  );
}
