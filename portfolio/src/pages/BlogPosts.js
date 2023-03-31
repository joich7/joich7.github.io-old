import Footer from "../components/layout/Footer";
import Navbarfun from "../components/layout/Navbarfun";
import "../App.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import BlogComp from "../components/generic/BlogComp";

export default function BlogPosts() {
  const content = [
    {
      title: "Blog 1",
      date: "",
      heading: "",
      text: "The first week was not quite what I expected, it was alot more reading that what I had originally thought. I was not expeting to encounter so many issues the first few days just trying to set up my environment for this course. But I guess encountering issues and learning how to solve them is part of learning that I have to get used to in this field.I'm excited to learn more about css and all the tools to create a websites style. I am also looking forward to learning about javascript git/github even though I struggle with them I enjoy the challenge.By reading this blog, you can learn about my journey of learning web developement and the obstacles I encounter and how I will overcome them. You can also get a better feel for the type of person I am.",
    },
    {
      title: "Blog 2",
      text: "HTML is used as the layout for a webpage, CSS is used to style and postion the content on a webpage, and Javascript can be used for inteactivity to make the users experiece better. It's hard to get used to pseudocoding, but I know that it is a skill that I must develope to create structured and organised code. It was nice having someone alsways on standby to help me when I had a question. Not much hindered my progress during onboarding, maybe just not having enough time to catch up on the previose days material.",
    },
    {
      title: "Blog 3",
      text: "Pseudocoding is basically forming out all the logic before even opening an IDE to start programming. Its really hard for me to make myself pseudocode as I am really want to dive in and build something. But I do see through trial and error how having a layed out plan and structure beforehand can inprove efficiency and make things easier in the long run. I hope I can master this skill even more in the future coming weeks as I complete this bootcamp!",
    },
    {
      title: "Blog 4",
      text: "I think it is pretty straightforward. I have had to learn new methods and function in javascript and Frameworks and libraries just seem like more functions that I need to familiarise myself with before I use them. I'm excited to learn more about webix and how to speed up and optimise a website. I dont know much about the stats and speed of how a website loads on the client end, but learning about it and how to improve the performance of a site sounds fascinating to me and I look forward to it. I would like to learn more about the meteor framework. From what I've read it seems to include alot of tools that provide the fastest way to get a javascript app up and running and I think it would be very beneficial to learn this tool.",
    },
    { title: "Blog ", text: "" },
    { title: "Blog ", text: "" },
    { title: "Blog ", text: "" },
    { title: "Blog ", text: "" },
  ];

  return (
    <>
      <Navbarfun />

      <div className="container p-3">
        <div className="row">
          {content.map((blog) => (
            <BlogComp text={blog.text} title={blog.title} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
