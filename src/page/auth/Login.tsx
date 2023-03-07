import React from "react";
import { Link } from "react-router-dom";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Layout from "../../components/Layout";
import Chill from "../../assets/Chill.webp";

const Login = () => {
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
                                        <span className="label-text mt-14">Username</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your username"
                                        className="input input-bordered input-primary w-full bg-white"
                                        style={{ border: "4px soluid #F47522" }}
                                    />
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="******"
                                        className="input input-bordered input-primary w-full bg-white"
                                        style={{ border: "4px soluid #F47522" }}
                                    />
                                    <button
                                        className="btn w-full"
                                        style={{
                                        marginTop: "1rem",
                                        backgroundColor: "#F47522",
                                        border: "none",
                                        color: "white",
                                        }}
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
}

export default Login;