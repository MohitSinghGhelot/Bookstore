import { useAppContext } from "@/context/AppContext";
import React from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation"; 

function Logout() {

    const { user , setUser } = useAppContext();
    const router = useRouter();

    const handleLogout = () => {

        try {
            setUser({
                ...user,
                user:null
            })
            localStorage.removeItem("Users")
            toast.success("Logout Successfully")

            setTimeout(()=> 
                window.location.reload()
                 ,100)
          
            router.push("/signup")
        } catch (error) {
            toast.error("Error: " + error.message)
        }
    }


  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;