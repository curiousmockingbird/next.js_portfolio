import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GithubStatsData } from './types'; // Only if you created the separate types file

const GithubStats: React.FC = () => {
  const [stats, setStats] = useState<GithubStatsData>({
    followers: 0,
    following: 0,
    publicRepos: 0,
    publicGists: 0,
    commits: ''
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('https://api.github.com/users/curiousmockingbird', {
          headers: { Authorization: process.env.GITHUB_TOKEN }
        });

        const fetchedStats: GithubStatsData = {
          followers: data.followers,
          following: data.following,
          publicRepos: data.public_repos,
          publicGists: data.public_gists,
          commits: data.commits
        };

        setStats(fetchedStats);
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
        <li>Commits: {stats.commits}</li>
      </ul>
    </div>
  );
};

export default GithubStats;
