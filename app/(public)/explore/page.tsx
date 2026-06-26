"use client";

import React, { useState, useMemo, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { useDebounce } from "@/hooks/useDebounce";
import ServiceCard, { ServiceType } from "@/Components/ServiceLoop/ServiceLoop";
import toast from "react-hot-toast";

export default function ExplorePage() {
  // NEW: State for dynamic data and loading
  const [servicesData, setServicesData] = useState<ServiceType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Existing States
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [sortBy, setSortBy] = useState("recommended");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;
  const debouncedSearch = useDebounce(searchTerm, 500);

  // Fetch Data on Mount using toast.promise
  useEffect(() => {
    const fetchServices = async () => {
      const res = await fetch("/api/services");
      if (!res.ok) throw new Error("Failed to load data");
      return res.json();
    };

    toast.promise(fetchServices(), {
      loading: "Loading services...",
      success: (data) => {
        setServicesData(data);
        setIsLoading(false);
        return "Services loaded successfully!";
      },
      error: (err) => {
        setIsLoading(false);
        return "Error fetching services";
      },
    });
  }, []);

  // Dynamic Categories extraction
  const categories = [
    "All",
    ...Array.from(
      new Set(servicesData.map((s) => s.category || "Uncategorized")),
    ),
  ];

  // Filtering & Sorting Logic
  const filteredAndSortedData = useMemo(() => {
    const result = servicesData.filter((service) => {
      const matchesSearch =
        service.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        service.description
          .toLowerCase()
          .includes(debouncedSearch.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || service.category === selectedCategory;
      const matchesPrice = Number(service.price) <= maxPrice;

      return matchesSearch && matchesCategory && matchesPrice;
    });

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => Number(a.price) - Number(b.price));
        break;
      case "price-desc":
        result.sort((a, b) => Number(b.price) - Number(a.price));
        break;
      case "rating":
        result.sort((a, b) => Number(b.rating) - Number(a.rating));
        break;
      default:
        break;
    }

    return result;
  }, [servicesData, debouncedSearch, selectedCategory, maxPrice, sortBy]);

  const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);
  const paginatedData = filteredAndSortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="w-full bg-base-100 min-h-screen py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-1/4 space-y-8 bg-base-200 p-6 rounded-2xl border border-base-300 h-fit sticky top-24">
          <h2 className="text-xl font-bold text-base-content border-b border-base-300 pb-4">
            Filters
          </h2>
          <div>
            <h3 className="font-semibold text-base-content mb-4">Category</h3>
            <div className="flex flex-col gap-2">
              {isLoading
                ? // Skeleton for categories
                  [1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="skeleton h-4 w-24 bg-base-300 rounded-full"
                    ></div>
                  ))
                : categories.map((cat) => (
                    <label
                      key={cat}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="category"
                        className="radio radio-primary radio-sm"
                        checked={selectedCategory === cat}
                        onChange={() => {
                          setSelectedCategory(cat);
                          setCurrentPage(1);
                        }}
                      />
                      <span className="text-base-content/80">{cat}</span>
                    </label>
                  ))}
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-base-content">Max Price</h3>
              <span className="text-sm font-bold text-primary">
                ${maxPrice}
              </span>
            </div>
            <input
              type="range"
              min="50"
              max="1000"
              value={maxPrice}
              className="range range-primary range-sm"
              onChange={(e) => {
                setMaxPrice(Number(e.target.value));
                setCurrentPage(1);
              }}
            />
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="w-full lg:w-3/4 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-base-200 p-4 rounded-2xl border border-base-300">
            <div className="relative w-full md:w-1/2">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/50" />
              <input
                type="text"
                placeholder="Search services..."
                className="input input-bordered w-full pl-10 rounded-full bg-base-100 focus:outline-primary border-base-300"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <span className="text-sm text-base-content/70 whitespace-nowrap">
                Sort by:
              </span>
              <select
                className="select select-bordered rounded-full bg-base-100 border-base-300 focus:outline-primary w-full md:w-auto"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="recommended">Recommended</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          <div className="text-sm text-base-content/60">
            {isLoading
              ? "Loading..."
              : `Showing ${filteredAndSortedData.length} results`}
          </div>

          {/* Dynamic Grid Layout or Loading Skeleton */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex flex-col gap-4 w-full">
                  <div className="skeleton h-48 w-full bg-base-300"></div>
                  <div className="skeleton h-4 w-28 bg-base-300"></div>
                  <div className="skeleton h-4 w-full bg-base-300"></div>
                  <div className="skeleton h-4 w-full bg-base-300"></div>
                </div>
              ))}
            </div>
          ) : paginatedData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {paginatedData.map((service) => (
                <ServiceCard service={service} key={service.id} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-base-content/50">
              <FiSearch className="w-12 h-12 mb-4 opacity-50" />
              <p className="text-lg font-medium">No services found.</p>
              <p className="text-sm">
                Try adjusting your filters or search term.
              </p>
            </div>
          )}

          {/* Pagination */}
          {!isLoading && totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              <button
                className="btn btn-sm btn-outline rounded-full"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              >
                Prev
              </button>
              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      className={`btn btn-sm rounded-full w-10 ${currentPage === page ? "btn-primary text-white bg-linear-to-br from-[#26003b] to-[#b71056] border-0" : "btn-ghost border border-base-300"}`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  ),
                )}
              </div>
              <button
                className="btn btn-sm btn-outline rounded-full"
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
