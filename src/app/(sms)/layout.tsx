"use server";

import { PropsWithChildren } from "react";
import { auth0 } from "@/lib/auth0";

export default async function Layout(props: PropsWithChildren) {
  const session = await auth0.getSession();

  if (!session) {
    // redirect to the log-in / signup page if not authenticated or make a component may be
    // or auto redirects
    return (
      <div>
        <p>
          You are not logged in. Please <a href={`/auth/login`}>login</a> to
          continue.
        </p>
      </div>
    );
  }

  return props.children;
}
