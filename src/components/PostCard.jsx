import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, author, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full h-full bg-white shadow-md rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <div className="flex justify-end">
          <h1 className="text-xs bg-black text-white rounded-lg px-3 py-1 font-mono">
            {author}
          </h1>
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
