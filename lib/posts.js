import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");

export const getSortedPostsData = () => {
  const fileNames = fs.readdirSync(postsDir);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/.md$/, "");
    const fullPath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult.data,
    };
  });
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) return 1;
    return -1;
  });
};

export const getPosts = async () => {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error, "error");
    return [];
  }
};

export const getPostIds = async () => {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    const data = await res.json();
    return data.map((item) => ({
      params: { id: item.id.toString() },
    }));
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getPostData = async (postId) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
};
