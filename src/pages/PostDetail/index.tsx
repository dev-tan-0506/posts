import { Card, Flex, Skeleton } from "antd";
import { useEffect, useState } from "react";
import { Post } from "../../types/Post";
import URL_APIs from "../../consts/URL_APIs";
import api from "../../axios/api";
import IPost from "../../components/IPost";
import DefaultValue from "../../consts/DefaultValue";
import { Params, useParams } from "react-router-dom";

function PostDetail() {
  const [post, setPost] = useState<Post>(DefaultValue.post);
  const [loading, setLoading] = useState<boolean>(true);
  const params: Readonly<Params<string>> = useParams();
  const postId: string = params?.id || "";

  const getPost = async (postId: string) => {
    const urlGetUser = `posts/${postId}/?_embed=user&_embed=react`;
    const res = await api.get(urlGetUser);
    if (res.success) {
      const post = (res?.data?.data as Post) || {};
      setPost(post);
    } else {
      console.log("Get post is failed.");
    }
    setLoading(false);
  };

  useEffect(() => {
    getPost(postId);
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

        <IPost post={post} key={post.id}></IPost>
      </Flex>
    </Flex>
  );
}

export default PostDetail;
