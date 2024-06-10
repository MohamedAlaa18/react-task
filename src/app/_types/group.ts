export interface Group {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    posts: Post[];
}

export interface Post {
    id: string;
    title: string;
    content: string;
    createdAt: string;
}
