import BlogCard from "../../components/cards/BlogCard"
import { blogData } from "../../components/data/blogData"

export default function Blog() {
  return (
    <div className="py-24 max-w-7xl lg:px-20 px-6 mx-auto ">
      <h2 className="text-2xl font-semibold my-4">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {
          blogData.map((blog, index) =>
            <BlogCard key={index} blog={blog} />
          )}

      </div>
    </div>
  )
}
