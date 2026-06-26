const StatsSection = () => {
  const stats = [
    { value: "834M", label: "Total Freelancers" },
    { value: "732M", label: "Positive Reviews" },
    { value: "90M", label: "Order Received" },
    { value: "236M", label: "Projects Completed" },
  ];

  return (
    <section className="w-full bg-primary py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center px-4"
          >
            <h3 className="text-3xl lg:text-5xl font-bold text-white mb-2">
              {stat.value}
            </h3>
            <p className="text-white/80 text-sm lg:text-base font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
