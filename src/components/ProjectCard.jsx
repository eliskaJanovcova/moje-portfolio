import React from "react";

function ProjectCard({ id, title, description }) {
  return (
    <div className="mt-6 p-8 bg-card-bg border border-card-border rounded-xl cursor-pointer hover:border-brand-primary transition-all duration-300 w-full max-w-2xl text-left hover:scale-[1.01] shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.2)] group">
      {/* Místo natvrdo napsaného CASE STUDY #01 použijeme dynamickou prop {id} */}
      <p className="text-xs text-brand-primary font-mono mb-2 tracking-wider">CASE STUDY #{id}</p>

      {/* Dynamický titulek */}
      <h3 className="text-xl font-bold text-brand-text group-hover:text-brand-primary transition-colors">
        {title}
      </h3>

      {/* Dynamický popis */}
      <p className="text-sm text-brand-secondary mt-2">
        {description}
      </p>

      <p className="text-xs text-brand-primary mt-6 font-medium flex items-center gap-1 transition-transform">
        Zjistit více <span className="text-xs">→</span>
      </p>
    </div>
  )
}

export default ProjectCard