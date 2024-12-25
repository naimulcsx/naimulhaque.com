import { notFound } from "next/navigation";

import { showAdminUI } from "../../../keystatic.config";
import KeystaticApp from "./keystatic";

export default function RootLayout() {
  if (showAdminUI === false) {
    notFound();
  }
  return <KeystaticApp />;
}
