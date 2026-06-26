import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Proof of quality",
      description:
        "Check any pro's work samples, client reviews, and identity verification.",
    },
    {
      title: "No cost until you hire",
      description:
        "Interview potential fits for your job, negotiate rates, and only pay for work you approve.",
    },
    {
      title: "Safe and secure",
      description:
        "Focus on your work knowing we help protect your data and privacy with state-of-the-art security.",
    },
  ];

  return (
    <section className="w-full bg-base-200 py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text & Features */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-base-content mb-4">
              A whole world of freelance talent at your fingertips
            </h2>
            <p className="text-lg text-base-content/70">
              We connect you with the best professionals to execute your
              projects flawlessly, on time, and strictly within budget.
            </p>
          </div>

          <div className="space-y-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <FiCheckCircle className="text-primary w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-base-content">
                    {benefit.title}
                  </h4>
                  <p className="text-base-content/70 mt-1">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual Block */}
        <div className="relative w-full bg-base-100 rounded-3xl border border-base-300 shadow-sm flex flex-col justify-center">
          <Image
            src="/dashboard-img.jpg"
            alt="Nexus Directory"
            width={700}
            height={560}
            className="object-cover w-full h-auto rounded-2xl"
          />

          <div className="absolute -left-8 top-1/4 bg-base-100 p-4 rounded-xl shadow-xl border border-base-300">
            <div className="font-bold text-2xl text-base-content">4.9/5</div>
            <div className="text-sm text-base-content/60">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
