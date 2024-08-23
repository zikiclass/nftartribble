import { z } from "zod";

export const adminSchema = z
  .object({
    email: z.string().min(1, "Email is required"),
    password: z.string().min(4, "Password should be at least 4 characters"),
    confirmPassword: z
      .string()
      .min(4, "Confirm password should be at least 4 characters"),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });
export const nftSchema = z.object({
  title: z.string().min(1, "NFT Title is required"),
  postedby: z.string().min(1, "Author is required"),
  short_description: z.string().min(1, "Short description is required"),
  about_author: z.string().min(1, "About author is required"),
  amount: z.string().min(1, "Amount is required"),
  status: z.string().min(1, "Status is required"),
  period: z.string().min(1, "Period is required"),
});
export const blogSchema = z.object({
  author: z.string().min(1, "Author is required"),
  heading: z.string().min(1, "Heading is required"),
  content1: z.string().min(1, "First paragraph is required"),
  content2: z.string(),
  content3: z.string(),
  content4: z.string(),
});
