import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface GithubStatsData {
  followers: number;
  following: number;
  publicRepos: number;
  publicGists: number;
  commits: number;
}

const GithubStats: React.FC = () => {
  const [stats, setStats] = useState<GithubStatsData>({
    followers: 0,
    following: 0,
    publicRepos: 0,
    publicGists: 0,
    commits: 0
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = 'curiousmockingbird';
        const headers = { Authorization: `token ${process.env.GITHUB_TOKEN}` };

        // Fetch user details
        const { data } = await axios.get(`https://api.github.com/users/${username}`, { headers });

        // Fetch repositories
        const { data: repos } = await axios.get(`https://api.github.com/users/${username}/repos`, { headers });

        // Fetch commits from each repo and sum them
        let totalCommits = 0;

        const commitPromises = repos.map(async (repo: any) => {
          const { data: commits } = await axios.get(
            `https://api.github.com/repos/${username}/${repo.name}/commits`,
            { headers }
          );
          totalCommits += commits.length;
        });

        await Promise.all(commitPromises);

        setStats({
          followers: data.followers,
          following: data.following,
          publicRepos: data.public_repos,
          publicGists: data.public_gists,
          commits: totalCommits
        });

      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex flex-col items-center'>
      <h1 className='bg-black text-white p-2'>GitHub Stats</h1>
      <ul className='text-center'>
        <li>Followers: {stats.followers}</li>
        <li>Following: {stats.following}</li>
        <li>Public Repositories: {stats.publicRepos}</li>
        <li>Public Gists: {stats.publicGists}</li>
        <li>Commits: {stats.commits}</li>
      </ul>
    </div>
  );
};

export default GithubStats;
