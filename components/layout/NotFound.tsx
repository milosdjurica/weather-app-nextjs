import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div
      className="
        h-screen text-center space-y-10
        flex flex-col justify-center items-center 
        "
    >
      <h3>The page you are looking for is not found!</h3>
      <Link
        className="shadow-xl shadow-blue-900 p-4 rounded-xl 
            hover:scale-105 duration-200"
        href="/"
      >
        Go back to home page
      </Link>
    </div>
  );
}

export default NotFound;
