import { Avatar, Card, Flex } from "antd";
import { Post } from "../types/Post.ts";
import { UserOutlined } from "@ant-design/icons";
import moment from "moment";
import { Link } from "react-router-dom";

type PostProps = {
  post: Post;
};

function IPost({ post }: PostProps) {
  return (
    <Card
      key={post.id}
      style={{ width: "50vw" }}
      actions={[<span>{post?.react?.reactsCount} Like</span>, <span>Comment</span>, <span>Share</span>]}
    >
      <Flex gap="middle">
        <Avatar size={40} icon={<UserOutlined />} />
        <Flex vertical justify="center">
          <strong>{post.user?.userName}</strong>
          <Link to={`/posts/${post.id}`}>
            <div>{moment(post.createdAt, "MM/DD/YYYY").fromNow()}</div>
          </Link>
        </Flex>
      </Flex>
      <div>{post.content}</div>
    </Card>
  );
}

export default IPost;
