import { Box, Divider, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import {BsArrowLeft} from "react-icons/bs";
import { useEffect, useState } from "react";


type PostPageProps = {
  frontmatter: {
    title: string;
    date: string;
    cover_image: string;
  };
  content: string;
};


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

  console.log(fileName)
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({ frontmatter , content }: PostPageProps) {
 const Router = useRouter()

const date = parseISO(frontmatter.date);
const dateFormatted = format(date, "LLLL d, yyyy");

const calcTimeToRead = (content: string): number => {
    const wordsPerMinute = 200;
    const noOfWords = content.split(/\s/g).length;
    const minutes = noOfWords / wordsPerMinute;
    const readTime = Math.ceil(minutes);
    return readTime;
  };

const timeToRead = calcTimeToRead(content);
  return (
    <>
      <Box mt={10}>
        <Flex
          w={"max-content"}
          gap={2}
          onClick={() => Router.back()}
          cursor="pointer"
          align="center"
        >
          <BsArrowLeft />
          <Text fontWeight={600}>Go back</Text>
        </Flex>
        <Heading>{frontmatter.title}</Heading>
        <Text>
          {dateFormatted} ⋅ {timeToRead} min read
        </Text>
      </Box>
      <Divider my={8}/>
      <Box mt={8}>
        {content}
      </Box>
    </>
  );
}
