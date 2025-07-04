function Statistics() {
  return (
    <section className="w-full bg-neutral-400 text-white py-10 md:py-20 center">
      <div className="w-full md:max-w-3xl divide-x-0 md:divide-x-2 divide-neutral-300 grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-3 *:md:pl-3 *:pt-3 first:*:md:pl-0">
        <div className="center flex-col gap-2">
          <p className="uppercase font-light text-sm">courses taught</p>
          <h1 className="text-6xl font-extrabold">40+</h1>
        </div>
        <div className="center flex-col gap-2">
          <p className="uppercase font-light text-sm">years completed</p>
          <h1 className="text-6xl font-extrabold">65+</h1>
        </div>
        <div className="center flex-col gap-2">
          <p className="uppercase font-light text-sm">graduated students</p>
          <h1 className="text-6xl font-extrabold">3000+</h1>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
