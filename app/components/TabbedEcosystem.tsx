"use client";

import { useState } from "react";
import Link from "next/link";
import { ecosystemItems } from "@/lib/constants";
import FadeIn from "./FadeIn";
import Icon from "./Icon";

const tabs = [
  { id: "core", label: "Ürünler", icon: "Cpu" },
  { id: "panels", label: "Paneller", icon: "LayoutGrid" },
];

export default function TabbedEcosystem() {
  const [activeTab, setActiveTab] = useState("core");

  const getActiveItems = () => {
    switch (activeTab) {
      case "core":
        return ecosystemItems.core;
      case "panels":
        return ecosystemItems.panels;
      default:
        return ecosystemItems.core;
    }
  };

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <FadeIn>
          <div className="text-center mb-4 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold text-eza-text mb-2 md:mb-4">
              EZA Ekosistemi
            </h2>
            <p className="text-sm md:text-xl text-eza-text-secondary max-w-2xl mx-auto mb-2 md:mb-4">
              Teknolojinin etik kullanımı için kapsamlı platform ve araçlar
            </p>
            <div className="inline-flex items-center gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 bg-eza-blue/10 text-eza-blue text-xs font-medium rounded-full border border-eza-blue/20">
              <Icon name="Cpu" size={10} />
              <span className="hidden sm:inline">EZA-Core: Tüm ekosistemin teknolojik motoru</span>
              <span className="sm:hidden">EZA-Core Motoru</span>
            </div>
          </div>
        </FadeIn>

        {/* Tabs */}
        <div className="flex justify-center mb-4 md:mb-12">
          <div className="inline-flex bg-white rounded-lg p-1 border border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 sm:px-6 py-1 sm:py-2 rounded-md font-medium transition-colors flex items-center gap-1 sm:gap-2 text-xs sm:text-base ${
                  activeTab === tab.id
                    ? "bg-eza-blue text-white"
                    : "text-eza-text-secondary hover:text-eza-text hover:bg-eza-gray"
                }`}
              >
                <Icon name={tab.icon} size={14} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="min-h-[250px] md:min-h-[400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {getActiveItems().map((item, index) => {
              const LinkComponent = (item as any).external ? "a" : Link;
              const linkProps = (item as any).external 
                ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
                : { href: item.href };
              const hasItems = (item as any).items && Array.isArray((item as any).items);
              
              return (
                <FadeIn key={item.title} delay={index * 50}>
                  <LinkComponent
                    {...linkProps}
                    className="block bg-white rounded-lg p-3 md:p-6 border border-gray-200 hover:border-eza-blue hover:shadow-md transition-all h-full"
                  >
                    <div className="flex items-start gap-2 md:gap-4 mb-2 md:mb-4">
                      <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-lg bg-eza-blue/10 flex items-center justify-center">
                        <Icon name={item.icon} className="text-eza-blue" size={16} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm md:text-xl font-semibold text-eza-text mb-1 md:mb-2">
                          {item.title}
                        </h3>
                        <p className="text-eza-text-secondary leading-relaxed text-xs md:text-sm mb-1.5 md:mb-3">
                          {item.description}
                        </p>
                        {hasItems && (
                          <ul className="space-y-1.5 mt-3">
                            {(item as any).items.map((subItem: string, subIndex: number) => (
                              <li key={subIndex} className="text-xs text-eza-text-secondary flex items-start gap-1.5">
                                <span className="text-eza-blue mt-0.5">•</span>
                                <span>{subItem}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {(item as any).note && (
                          <p className="text-xs text-eza-text-secondary/60 italic mt-3 pt-3 border-t border-gray-200/50">
                            {(item as any).note}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center text-eza-blue font-medium text-sm mt-4">
                      Daha fazla bilgi
                      <Icon name={(item as any).external ? "ExternalLink" : "ArrowRight"} size={16} className="ml-1" />
                    </div>
                  </LinkComponent>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
