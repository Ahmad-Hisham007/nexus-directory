"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiStar, FiClock } from "react-icons/fi";
import { servicesData } from "@/lib/data";
import { useDebounce } from "@/hooks/useDebounce";
import ServiceCard from "@/Components/ServiceLoop/ServiceLoop";

export default function ExplorePage() {
  // State Management
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [sortBy, setSortBy] = useState("recommended");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;
  const debouncedSearch = useDebounce(searchTerm, 500);

  // Categories extraction
  const categories = [
    "All",
    ...Array.from(new Set(servicesData.map((s) => s.category))),
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
      const matchesPrice = service.price <= maxPrice;

      return matchesSearch && matchesCategory && matchesPrice;
    });

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // "recommended" keeps original order
        break;
    }

    return result;
  }, [debouncedSearch, selectedCategory, maxPrice, sortBy]);

  // Pagination Logic
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

          {/* Category Filter */}
          <div>
            <h3 className="font-semibold text-base-content mb-4">Category</h3>
            <div className="flex flex-col gap-2">
              {categories.map((cat) => (
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
                      setCurrentPage(1); // Reset page on filter change
                    }}
                  />
                  <span className="text-base-content/80">{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
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
            <div className="flex justify-between text-xs text-base-content/50 mt-2 px-1">
              <span>$50</span>
              <span>$1000</span>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="w-full lg:w-3/4 flex flex-col gap-6">
          {/* Top Bar: Search & Sort */}
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

          {/* Results Info */}
          <div className="text-sm text-base-content/60">
            Showing {filteredAndSortedData.length} results
          </div>

          {/* Grid Layout (Reusing Home Page Card Design) */}
          {paginatedData.length > 0 ? (
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

          {/* Pagination Controls */}
          {totalPages > 1 && (
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
