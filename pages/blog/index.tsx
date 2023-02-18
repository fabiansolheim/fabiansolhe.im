import React, { useEffect, useState } from "react";
import fs from "fs";
import matter from "gray-matter";
import NextLink from "next/link";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";
import {Image} from "@chakra-ui/image";

import { parseISO, format } from "date-fns";
import { Post } from "../../types/post";

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync("posts");

  if (!files) {
    return {
      props: {
        posts: [],
      },
    };
  }


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
      <Heading  mt={15} size={"lg"}>Articles ({posts.length})</Heading>
      <Grid
        mt={50}
        w={"100%"}
        gap={10}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      >
        {posts.length === 0 && (
          <Center>
            <Text>No posts found</Text>
            </Center>
            )}
        {posts.map(({ slug, frontmatter }: Post) => (
          <BlogListPreview
            key={slug}
            slug={slug}
            frontmatter={frontmatter}
          />
        ))}
      </Grid>
    </>
  );
};
const BlogListPreview = ({ slug, frontmatter }: Post) => {
  const date = parseISO(frontmatter.date);
  const formatted = format(date, "LLLL d, yyyy");
  
  return (
    <Box key={slug} w={{ base: "100%" }}>
      <NextLink href={`/blog/post/${slug}`}>
        <a>
          <Image
            src={frontmatter.imageURL}
            alt={frontmatter.title}
            width={"100%"}
            height={"40%"}
            objectFit="cover"
            overflow="hidden"
            borderRadius={8}
          />
          <Box bg="white.500" mt={5}>
            <Text>{formatted}</Text>
            <Heading color="black.500" size="md" className="p-4">
              {frontmatter.title}
            </Heading>
            <Text>Test</Text>
          </Box>
        </a>
      </NextLink>
    </Box>
  );
};

export default Blog;
