import { ViewTransition } from "react";

export default function PageTransition({ children }) {
  return (
    <ViewTransition>
      <div>{children}</div>
    </ViewTransition>
  );
}
