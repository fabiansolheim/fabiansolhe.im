import React from 'react'
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Box, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';

import { parseISO, format } from "date-fns";

type Post = {
  slug: string;
  frontmatter: {
    title: string;
    excerpt: string;
    cover_image: string;
    date: string;
    socialImage: string;
  };
};


export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync("posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
};

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {


  return (
    <>
      <Flex
        mt={50}
        border="2px red solid"
        justifyContent="space-between"
        gap={6}
      >
        {posts.map(({ slug, frontmatter }: Post) => (
         <BlogListPreview key={slug} slug={slug} frontmatter={frontmatter} />
        ))}
      </Flex>
    </>
  );
};
const BlogListPreview = ({slug, frontmatter}: any) => {

const date = parseISO(frontmatter.date);
const formatted = format(date, "LLLL d, yyyy");

  return (
    <Box key={slug}>
      <Link href={`/blog/post/${slug}`}>
        <a>
          <Image
            src={frontmatter.socialImage}
            alt={frontmatter.title}
            width={300}
            height={200}
          />
          <Box bg="white.500" mt={5}>
            <Text>{formatted}</Text>
            <Heading color="black.500" size="md" className="p-4">
              {frontmatter.title}
            </Heading>
          </Box>
        </a>
      </Link>
    </Box>
  );
}


export default Blog;