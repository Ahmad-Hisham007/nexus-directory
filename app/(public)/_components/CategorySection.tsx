import Link from "next/link";
import {
  FiMonitor,
  FiPenTool,
  FiTrendingUp,
  FiVideo,
  FiMusic,
  FiCode,
} from "react-icons/fi";

const CategorySection = () => {
  const categories = [
    { icon: FiMonitor, name: "Development & IT", count: "1,234 skills" },
    { icon: FiPenTool, name: "Design & Creative", count: "842 skills" },
    { icon: FiTrendingUp, name: "Digital Marketing", count: "354 skills" },
    { icon: FiVideo, name: "Video & Animation", count: "299 skills" },
    { icon: FiMusic, name: "Music & Audio", count: "185 skills" },
    { icon: FiCode, name: "Programming & Tech", count: "945 skills" },
  ];

  return (
    <section className="w-full bg-base-200 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-base-content mb-2">
              Browse by category
            </h2>
            <p className="text-base-content/70">
              Find the specific talent you need to accelerate your business.
            </p>
          </div>
          <Link
            href="/explore"
            className="btn btn-outline hidden md:flex rounded-full"
          >
            All Categories
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div
                key={index}
                className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-300 hover:border-primary hover:shadow-md transition-all cursor-pointer group flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-base-200 group-hover:bg-primary/10 flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-6 h-6 text-base-content group-hover:text-primary" />
                </div>
                <h3 className="font-semibold text-base-content mb-1">
                  {cat.name}
                </h3>
                <p className="text-xs text-base-content/60">{cat.count}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
