import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import {Post} from "../../../types/post";


export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: ParsedUrlQuery }) {
  const fileName = fs.readFileSync(`posts/${params.slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }: any) {
  return (
    <div className="prose mx-auto">
      <h1>{frontmatter.title}</h1>
      {content}
    </div>
  );
}
