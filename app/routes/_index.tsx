import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";

export const loader = async () => {
  const userCount = await db.user.count();
  return json({ userCount });
};

export const meta: MetaFunction = () => {
  return [
    { title: "Remix + Bun + Prisma" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { userCount } = useLoaderData<typeof loader>();
  return (
    <>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>User Count: {userCount}</li>
      </ul>
    </>
  );
}
