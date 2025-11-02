import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const updatedBlog = await request.json();
    const blogDataPath = path.join(process.cwd(), 'src', 'lib', 'blogData.ts');

    // Handle image upload
    if (updatedBlog.imageUrl && updatedBlog.imageUrl.startsWith('data:image')) {
      const imageBuffer = Buffer.from(updatedBlog.imageUrl.split(',')[1], 'base64');
      const imageName = `${Date.now()}-${updatedBlog.id}.png`;
      const imagePath = path.join(process.cwd(), 'public', 'uploads', imageName);
      await fs.writeFile(imagePath, imageBuffer);
      updatedBlog.imageUrl = `/uploads/${imageName}`;
    }

    // Read the existing blog data
    let blogDataContent = await fs.readFile(blogDataPath, 'utf8');

    // Find the array and update the blog
    const blogPostsRegex = /export const blogPosts: Blog\[\] = (\[.*\]);/s;
    const match = blogDataContent.match(blogPostsRegex);

    if (match) {
      const existingBlogs = JSON.parse(match[1]);
      const updatedBlogs = existingBlogs.map((blog: any) => 
        blog.id === updatedBlog.id ? updatedBlog : blog
      );
      const updatedBlogData = `export const blogPosts: Blog[] = ${JSON.stringify(updatedBlogs, null, 2)};`;
      blogDataContent = blogDataContent.replace(blogPostsRegex, updatedBlogData);
    } else {
      return NextResponse.json({ message: 'Blog data file not found or is empty' }, { status: 500 });
    }

    await fs.writeFile(blogDataPath, blogDataContent, 'utf8');

    return NextResponse.json({ message: 'Blog post updated successfully' });
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json({ message: 'Error updating blog post' }, { status: 500 });
  }
}