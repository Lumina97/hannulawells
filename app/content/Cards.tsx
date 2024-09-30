import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="wrapper mx-auto flex w-full max-w-screen-xl flex-wrap justify-around gap-8 py-12">
      <Card
        image="/dog.png"
        title="The Pitfalls of Cyber Security Marketing"
        description={`“It is not a matter of IF;\n it is a matter of WHEN”\n\nWe have all heard it. We have used it ourselves to explain security, to help sell a solution, and everything in between. However, this statement has hurt us as an industry. It is taking a very complex situation and dumbing it down into a statement that says, “Yes, we are all screwed.”`}
        author="-HannulaWells"
        link="https://www.linkedin.com/pulse/pitfalls-cyber-security-marketing-matt-hannula/"
      />
      <Card
        image="/tablet.png"
        title="Eliminating the Risk of Shadow SaaS"
        description="SaaS applications are dominating the corporate landscape. Their increased use enables organizations to push the boundaries of technology and business. At the same time, these applications also pose a new security risk that security leaders need to address, since the existing security stack does not enable complete control or comprehensive monitoring of their usage..."
        author="-The Hacker News"
        link="https://thehackernews.com/2024/05/new-guide-explains-how-to-eliminate.html"
      />
      <Card
        image="/hands.png"
        title="The State of IT: 5 Things We Need for a Better Future"
        description="What a world we live in. Death by selfie is approximately 90 deaths per year. In other words, on average 90 people die because of the act of taking a selfie on their camera phone. This is the world that we live in today. Scary? Sure, if you think so. Awesome? Yeah, why not? How about extremely complicated but absolutely simplified? I am most curious about..."
        author="-HannulaWells"
        link="https://www.linkedin.com/pulse/state-5-things-we-need-better-future-matt-hannula/"
      />
    </div>
  );
};

export default Cards;
