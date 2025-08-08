export const githubLoader = async () => {
  const response = await fetch("https://api.github.com/users/utkarsh-jain13");
  if (!response.ok) {
    throw new Error("Failed to fetch GitHub data");
  }
  const data = await response.json();
  return data;
};
