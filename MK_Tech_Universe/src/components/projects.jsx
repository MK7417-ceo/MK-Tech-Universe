import { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/MK7417-ceo/repos")
      .then((res) => res.json())
      .then((data) => {
        const sortedRepos = data.sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        );

        setRepos(sortedRepos);
      });
  }, []);

  return (
    <section className="py-24 px-8">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
        GitHub Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {repos.slice(0, 6).map((repo) => (
          <div
            key={repo.id}
            className="border border-cyan-400 rounded-xl p-6 hover:scale-105 transition"
          >
            <h3 className="text-2xl font-bold mb-4">
              {repo.name}
            </h3>

            <p className="text-gray-400 mb-4">
              {repo.description || "No description available"}
            </p>

            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400"
            >
              View Repository →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}