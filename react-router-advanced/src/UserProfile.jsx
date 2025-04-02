import { useParams } from "react-router-dom";

function UserProfile() {
  let { userId } = useParams();
  return <h2>User Profile: {userId}</h2>;
}

export default UserProfile;
