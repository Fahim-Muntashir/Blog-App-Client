import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { blogService } from "@/services/blog.service";
import { userService } from "@/services/user.service";
import { cookies } from "next/headers";

export default async function Home() {

const {data} = await blogService.getBlogPosts();

console.log(data)
  return (
    <div>
      <Button variant="outline">Click Here</Button>
    </div>
  );
}
