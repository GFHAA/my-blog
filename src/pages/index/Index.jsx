import React from "react";
import PostPreview from "../../components/postPreview/PostPreview";
import Sidebar from "../../components/sidebar/Sidebar";
import "./index.css";

const Index = () => {
  return (
    <div className="index-div">
      <main className="container">
        <div className="row post-preview-row  mt-5">
          <section className="post-preview-section">
            <PostPreview />
          </section>
        </div>
        <Sidebar />
      </main>
    </div>
  );
};

export default Index;
