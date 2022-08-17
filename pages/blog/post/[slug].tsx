import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import {Post} from "../../../types/post";
import {BsArrowLeft} from "react-icons/bs";

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
  const date = parseISO(frontmatter.date);
  const formatted = format(date, 'LLLL d, yyyy');

  const router = useRouter();

  return (
    <Box mt={10}>
      <Flex
        gap={2}
        onClick={() => router.back()}
        cursor="pointer"
        align="center"
      >
        <BsArrowLeft />
        <Text fontWeight={600}>Tilbake</Text>
      </Flex>
      <Heading>{frontmatter.title}</Heading>
      <Text>{formatted}</Text>
    </Box>
  );
}
