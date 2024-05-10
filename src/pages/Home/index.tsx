import { Card, Flex, Skeleton } from "antd";
import { useEffect, useState } from "react";
import { Post } from "../../types/Post";
import URL_APIs from "../../consts/URL_APIs";
import api from "../../axios/api";
import IPost from "../../components/IPost";

function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getPosts = async () => {
    const res = await api.get(URL_APIs.GET_POSTS);
    console.log("🚀 ~ getPosts ~ res?.data?.data:", res?.data?.data)

    if (res.success) {
      setPosts(res?.data?.data as Post[]|| []);
    } else {
      console.log("Get posts is failed.");
    }
    setLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Flex gap="middle" align="start" justify="center">
      <Flex gap="middle" align="center" vertical>
        {loading && (
          <Card style={{ width: "50vw" }}>
            <Skeleton paragraph={{ rows: 0 }} round avatar></Skeleton>
            <Skeleton paragraph={{ rows: 3 }} round title={false}></Skeleton>
          </Card>
        )}

        {posts.map((post) => <IPost post={post} key={post.id}></IPost>)}
      </Flex>
    </Flex>
  );
}

export default Home;
