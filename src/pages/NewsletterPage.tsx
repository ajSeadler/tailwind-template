import React from "react";
import NewsLetterSignUp from "../components/NewsLetterSignUp";

const NewsletterPage: React.FC = () => (
  <div className="min-h-screen bg-neutral-900 text-white flex flex-col justify-center items-center px-6 py-20">
    <div className="max-w-2xl text-center">
      <NewsLetterSignUp />
    </div>
  </div>
);

export default NewsletterPage;
