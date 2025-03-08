"use client";

import NewsCard from "./NewsCard";

const News = () => {
  return (
    <div className="container space-y-5 py-4">
      <div>
        <h2 className="text-3xl font-bold">Latest News</h2>
        <p className="text-lg text-muted-foreground">
          Read the latest news on campus.
        </p>
      </div>
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {[...new Array(17)].map((_, idx) => (
            <NewsCard key={idx} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default News;
