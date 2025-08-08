import { useLoaderData } from "react-router-dom";

function Github() {
  const userData = useLoaderData();

  return (
    <div className="bg-gray-600 text-white p-4 text-center">
      Github Repo Count: {userData ? userData.public_repos : "Loading..."}
    </div>
  );
}

// export default Github;

//     fetch("https://api.github.com/users/utkarsh-jain13")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setUserData(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching GitHub data:", error);
//       });
//   }, []);

//   return (
//     <div className="bg-gray-600 text-white p-4 text-center">
//       Github Repo Count: {userData ? userData.public_repos : "Loading..."}
//     </div>
//   );
// }

export default Github;
