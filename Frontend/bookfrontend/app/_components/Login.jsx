import React, { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation';


function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

      const router = useRouter()
  

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.email) newErrors.email = "This field is required";
    if (!formData.password) newErrors.password = "This field is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    try {
      const response = await fetch("https://bookstore-backend-kc1u.onrender.com/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      const user = data.user; 
      localStorage.setItem("Users", JSON.stringify(user));

      toast.success("Login successful")
      document.getElementById("my_modal_3").close(); 

      router.push("/")

    setTimeout(()=> 
      window.location.reload()
       ,2500)


    } catch (error) {
      toast.error("Error:" + error.message);

    }

  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit} method="dialog">
            <Link
              href={"#"}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>

            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                value={formData.email}
                onChange={handleChange}
              />
              <br />
              {errors.email && <span className="text-rose-600 font-bold">{errors.email}</span>}
            </div>

            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                value={formData.password}
                onChange={handleChange}
              />
              <br />
              {errors.password && <span className="text-rose-600 font-bold">{errors.password}</span>}
            </div>

            <div className="flex justify-around mt-6">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  href={"/signup"}
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() => document.getElementById("my_modal_3").close()}
                >
                  Signup
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
