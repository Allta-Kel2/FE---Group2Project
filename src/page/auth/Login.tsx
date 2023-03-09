import React, {useState, useEffect} from "react";
import withReactContent from "sweetalert2-react-content";
import { Link, useNavigate } from "react-router-dom";
import { useCookies, Cookies } from "react-cookie";
import axios from "axios";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Layout from "../../components/Layout";
import Chill from "../../assets/Chill.webp";
import Swal from "../../utils/Swal";

const Login = () => {
    const [cookies, setCookie] = useCookies(["token", "id", "role"]);
    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    useEffect(() =>{
        if(email && password) {
            setDisabled(false);
        }else{
            setDisabled(true);
        }
    }, [email,password]);

    const token:string = ''

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        setLoading(true);
        e.preventDefault();
        const body = {
            email,
            password,
        };
        await axios
            .post("https://app1.mindd.site/auth/login",{
                email: body.email,
                password: body.password
            },
            {
                headers: {
                    Accept: 'application/json',
                    "Content-Type" : 'application/json'
                }
            } )
            .then((res) =>{
                const { message } = res.data;
                setCookie("token", res.data.data.token, { path: "/" });
                setCookie("id", res.data.data.id, { path: "/" });
                MySwal.fire({
                    title: "Hello!",
                    text: "Login Success!",
                    showCancelButton: false,
                });
                navigate("/dashboard");
            })
            .catch((err) =>{
                const { data } = err.response;
                MySwal.fire({
                    title: "Failed",
                    text: "Wrong Username or Password",
                    showCancelButton: false,
                });
            })
            .finally(() => setLoading(false));
        await axios.get("https://app1.mindd.site/auth/users",{
            headers: {
                Accept: 'application/json',
                "Content-Type" : 'application/json',
                Authorization: `Bearer ${cookies.token}`    
            }
        }
        )
        .then((response)=> {
            console.log(response.data)
            setCookie("role", response.data.data.role, {path: '/'})
            setCookie("id", response.data.data.id, {path: '/'})
            navigate('/dashboard')
        })
        .catch((error) => {
            console.log(error)
        })
    };
    console.log(email)
    return(
        <Layout>
            <div className="w-full h-screen flex flex-col overflow-auto  bg-white">
                <div className="w-full hp-screen">
                    <div className="flex flex-row">
                        <div className="flex-1 bg-white">
                            <div className="flex flex-col">
                                <form className="mx-auto mt-48">
                                    <h2
                                        style={{
                                        fontFamily: "Poppins",
                                        fontSize: "1.75em",
                                        fontWeight: "700",
                                        textAlign: "center",
                                        color: "#053260",
                                        }}
                                    >
                                        Login To You Account
                                    </h2>
                                    <p
                                        style={{
                                        fontFamily: "Poppins",
                                        fontSize: "1em",
                                        fontWeight: "500",
                                        textAlign: "center",
                                        color: "#4A33D9",
                                        }}
                                    >
                                        Please Enter your detail
                                    </p>
                                    <label className="label">
                                        <span className="label-text mt-14">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter your username"
                                        className="input input-bordered input-primary w-full bg-white"
                                        style={{ border: "4px soluid #F47522" }}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="type your Password"
                                        className="input input-bordered input-primary w-full bg-white"
                                        style={{ border: "4px soluid #F47522" }}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button
                                        className="btn w-full"
                                        style={{
                                            marginTop: "1rem",
                                            backgroundColor: "#F47522",
                                            border: "none",
                                            color: "white",
                                        }}
                                        onClick={handleSubmit}
                                    >
                                        Login
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="flex-1 bg-white">
                            <img
                                src={Chill}
                                className="mx-auto alig-center justify-center mt-20"
                                style={{ width: "70%" }}
                            />
                            <h1
                                style={{
                                fontSize: "2.5rem",
                                fontWeight: "700",
                                color: "#4A33D9",
                                }}
                                className="mt-6 ml-20"
                            >
                                Management Data Student
                            </h1>
                            <hr
                                style={{
                                border: "4px solid #F47522",
                                width: "50%",
                                marginLeft: "5rem",
                                }}
                            />
                            <p
                                style={{
                                color: "#4A33D9",
                                fontWeight: "500",
                                marginLeft: "5rem",
                                }}
                            >
                                Take a Look at our site before register
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default Login;
