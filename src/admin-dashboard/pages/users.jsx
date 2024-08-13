import { useEffect, useState } from "react";
import { getAllUsers } from "../../api/getUserDetails"
import User from "../components/users";
import { Bars } from "react-loader-spinner";

function Users() {
    const [user, setUser] = useState([]);
    const[isLoading,setIsLoading]=useState(false);

    useEffect(() => {
        async function allUsers() {
            setIsLoading(true);
            const users = await getAllUsers();
            setUser(users);
            setIsLoading(false);
        }
        allUsers();
    }, [])

    if (isLoading)
        return (
          <div className="absolute top-1/3 left-1/2">
            <Bars
              height="60"
              width="70"
              color="#383C6C"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        );

    const userLength = user.length > 0;
    return (
        userLength ? <User user={user} /> : <p className="text-4xl font-bold p-12">No User Found</p>
    )
}

export default Users
