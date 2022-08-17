import React, { useEffect, useState } from "react";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import { parseISO, format } from "date-fns";
import { Post } from "../../types/post";
import { useRouter } from "next/router";

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync("posts");

  const posts = files.map(fileName => {
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
      <Grid
        mt={50}
        w={"100%"}
        gap={10}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      >
        {posts.map(({ slug, frontmatter, content }: Post) => (
          <BlogListPreview
            content={content}
            key={slug}
            slug={slug}
            frontmatter={frontmatter}
          />
        ))}
      </Grid>
    </>
  );
};
const BlogListPreview = ({ slug, frontmatter, content }: any) => {
  const date = parseISO(frontmatter.date);
  const formatted = format(date, "LLLL d, yyyy");

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const numberOfWords = content.split(/\s/g).length;
    return Math.ceil(numberOfWords / wordsPerMinute);
  };

  return (
    <Box key={slug} w={{ base: "100%" }}>
      <Link href={`/blog/post/${slug}`}>
        <a>
          <Image
            src={frontmatter.socialImage}
            alt={frontmatter.title}
            width={"100%"}
            height={"40%"}
            objectFit="cover"
            overflow="hidden"
            borderRadius={8}
          />
          <Box bg="white.500" mt={5}>
            <Text>{formatted}</Text>
            <Text></Text>
            <Heading color="black.500" size="md" className="p-4">
              {frontmatter.title}
            </Heading>
            <Text>Test</Text>
          </Box>
        </a>
      </Link>
    </Box>
  );
};

export default Blog;
