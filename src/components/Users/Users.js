import * as config from "config";
import axios from "axios";
import { useEffect } from "react";

export default function Users() {
  let users;

  useEffect(() => {
    console.log("Component First Rendering");
  }, []);
  return (
    <article>
      <h1>Users.js</h1>
    </article>
  );
}
