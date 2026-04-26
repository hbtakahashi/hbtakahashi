export type Blog = {
    id: string;
   createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  summary: string;
  content: string;
  eyecatch?: {
    url: string;
    height: number;
    width: number;
  };
  categorys: {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    name: string;
  }[];
  date: string;
}