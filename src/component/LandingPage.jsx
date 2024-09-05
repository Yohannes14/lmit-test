import React from 'react';
import logo from '../img/logo.png';
import * as Yup from "yup";
import { useFormik } from 'formik';
import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../apollo/auth';
import { useNavigate } from 'react-router-dom';

const formSchema = Yup.object({
    phoneNumbe: Yup.string().required("Phone Number"),
    password: Yup.string().required("Password"),
});


const LandingPage = () => {

    const navigate = useNavigate();

    const [signIn, { data, loading, error }] = useMutation(SIGN_IN, {
        onCompleted: (data) => {
            const { access_token, refresh_token } = data.signIn.tokens;
            localStorage.setItem('token', access_token);
            navigate('/home');
        },
        onError: (error) => {
            console.log("Error:", error)
        },
    });
    //formik
    const formik = useFormik({
        initialValues: {
            phoneNumbe: "",
            password: "",
        },
        onSubmit: async (values) => {
            try {
                await signIn({
                    variables: {
                        phoneNumber: values.phoneNumbe,
                        password: values.password,
                    },
                });
            } catch (err) {
                console.error("Login error:", err);
            }
        },
        validationSchema: formSchema,
    });
    return (
        <div className="flex h-screen">
            {/* Left Section */}
            <div className="xl:w-2/3 bg-gradient-to-b from-[#0575E6] via-[#02298A] to-[#021B79] flex items-center justify-center">
                <div className="flex flex-col items-start w-full ml-[220px]">
                    {/* Container for image and text */}
                    <div className="flex flex-col items-start mb-12 space-y-6">
                        <div className='flex items-center space-x-6'>
                            <img src={logo} alt="log" className="h-[152px] w-[152px]" />
                            <div>
                                <p className='text-base text-white'>ሰራተኛ</p>
                                <p className='text-base text-white'>ቀጣሪ</p>
                                <p className='text-base text-white'>ውሳኔ ሰጪ</p>
                            </div>
                        </div>
                        <h1 className="text-white text-6xl text-left leading-[90px]">
                            Ethiopia Labor Market Information System
                        </h1>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="xl:w-1/3 bg-white flex items-center justify-center">
                <div className="w-full max-w-xs">
                    <h2 className="text-[40px] leading-[60px] mb-6 font-medium text-gray-800">Login</h2>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="relative">
                            <input
                                value={formik.values.phoneNumbe}
                                onChange={formik.handleChange("phoneNumbe")}
                                onBlur={formik.handleBlur("phoneNumbe")}
                                type="tel"
                                placeholder="Phone number"
                                className="rounded-[36px] border-[1.2px] w-full py-5 px-7 text-grey-1 text-sm focus:outline-none focus:shadow-outline border-grey-1"
                            />
                            <i className="fas fa-phone absolute left-3 top-1/2 transform -translate-y-1/2 text-grey-1"></i>
                        </div>
                        {/* Error msg */}
                        <div className="text-red-500 pl-3 italic text-xs mb-5">
                            {formik.touched.phoneNumbe && formik.errors.phoneNumbe}
                        </div>
                        <div className="relative">
                            <input
                                value={formik.values.password}
                                onChange={formik.handleChange("password")}
                                onBlur={formik.handleBlur("password")}
                                type="password"
                                placeholder="Password"
                                className="rounded-[36px] border-[1.2px] w-full py-5 px-7 text-grey-1 text-sm focus:outline-none focus:shadow-outline border-grey-1"
                            />
                            <i className="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-grey-1"></i>
                        </div>
                        {/* Error msg */}
                        <div className="text-red-500 pl-3 italic text-xs mb-10 ">
                            {formik.touched.password && formik.errors.password}
                        </div>
                        <div className="flex items-center justify-between mb-6">
                            <button
                                type="submit"
                                className="w-full bg-blue-1 text-white font-normal text-[18px] leading-6 py-5 px-7 rounded-[36px] focus:outline-none focus:shadow-outline"
                            >
                                {loading ? "Loading" : "Login"}
                            </button>
                        </div>
                        <div className="flex items-center justify-center">
                            <a href='#' className='text-grey-1 text-[16] text-center leading-6 font-normal'>Forgot Password</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
