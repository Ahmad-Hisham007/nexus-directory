import { FiUserPlus, FiSearch, FiCheckSquare } from "react-icons/fi";

const HowItWorks = () => {
  const steps = [
    {
      icon: FiUserPlus,
      title: "1. Create an Account",
      description:
        "Sign up for free, set up your profile, and join our network of professionals.",
    },
    {
      icon: FiSearch,
      title: "2. Find the Right Fit",
      description:
        "Browse portfolios, compare prices, and read reviews to find your perfect match.",
    },
    {
      icon: FiCheckSquare,
      title: "3. Work & Pay Safely",
      description:
        "Collaborate directly and release payment only when you are 100% satisfied.",
    },
  ];

  return (
    <section className="w-full bg-base-100 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-base-content mb-4">
          How Nexus Works
        </h2>
        <p className="text-base-content/70 max-w-2xl mx-auto mb-16">
          Our platform is designed to make connecting, collaborating, and
          completing projects as seamless as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center relative z-10"
              >
                {/* Connector Line for Desktop */}
                {idx !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-[2px] bg-base-300 -z-10"></div>
                )}

                <div className="w-20 h-20 rounded-full bg-base-200 border border-base-300 flex items-center justify-center mb-6 shadow-sm group-hover:border-primary transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-base-content mb-3">
                  {step.title}
                </h3>
                <p className="text-base-content/70 px-4">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
