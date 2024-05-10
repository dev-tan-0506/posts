import { React } from "./React";
import { User } from "./User";

export type Post = {
    id: number;
    userId: number;
    user?: User;
    content: string;
    createdAt: string;
    react?: React
}