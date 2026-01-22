import BlogCard from "@/components/modules/homepage/BlogCard";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { blogService } from "@/services/blog.service";
import { userService } from "@/services/user.service";
import { BlogPost } from "@/types/blog.type";
import { cookies } from "next/headers";

export default async function Home() {

const {data} = await blogService.getBlogPosts({isFeatured:false,
  search:"",
},{
  revalidate:10
});

console.log(data)
  return (
    <div className="grid grid-cols-3 max-w-7xl mx-auto px-4 gap-5">
{
  data?.data.map((post:BlogPost)=>(
    <BlogCard key={post.id} post={post}></BlogCard>
  ))
}    </div>
  );
}
