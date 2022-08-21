type Post = {
  slug: string;
  frontmatter: {
        title: string
        description: string
        imageURL: string;
        date: string
  };
  content?: string;
};

export { Post };