import React from "react";

export const Footer = () => {
    return (
        <footer className="relative bg-blueGray-200 pt-8   mt-20">
            <section className="pt-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        {/* <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to FashionHere</h1> */}
                        <p className="text-xl text-gray-600">Your Ultimate Destination for Stylish Shoes and Accessories</p>
                    </div>

                    <div className="text-center mb-16 px-4">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Step into Style: Shoes for Every Occasion</h2>
                        <p className="text-lg text-gray-600 mb-8">From everyday comfort to elegant evening wear, our collection of shoes is designed to keep you stylish without compromising on comfort.</p>


                    </div>
                </div>

                <div className="text-center mb-16 px-4">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose FashionHere?</h2>
                    <ul className="text-lg text-gray-600 space-y-4">
                        <li><i className="fas fa-check-circle text-yellow-500 mr-2"></i><span className="font-semibold">Trendy Designs</span>: We keep up with the latest fashion trends so you can stay ahead of the curve.</li>
                        <li><i className="fas fa-check-circle text-yellow-500 mr-2"></i><span className="font-semibold">High-Quality Products</span>: Our shoes and accessories are made with the highest quality materials to ensure long-lasting wear.</li>
                        <li><i className="fas fa-check-circle text-yellow-500 mr-2"></i><span className="font-semibold">Affordable Prices</span>: Look fabulous without breaking the bank. We offer fashionable options at prices you'll love.</li>
                        <li><i className="fas fa-check-circle text-yellow-500 mr-2"></i><span className="font-semibold">Easy Shopping</span>: Browse, shop, and check out with ease. Shopping at FashionHere is convenient and hassle-free.</li>
                        <li><i className="fas fa-check-circle text-yellow-500 mr-2"></i><span className="font-semibold">Fast Shipping</span>: We get your stylish finds to you quickly with fast and reliable shipping.</li>
                    </ul>
                </div>

                <div className="text-center">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Shop with Confidence at FashionHere</h2>
                    <p className="text-lg text-gray-600 mb-8">Your style is our passion. Explore our latest collections and find shoes and accessories that reflect your unique style.</p>
                    {/* <a href="#shop" className="bg-yellow-500 text-white py-3 px-8 rounded-lg text-lg hover:bg-yellow-600 transition duration-300">Start Shopping Now</a> */}
                </div>
                <div className="container mx-auto px-4 py-20 bg-blueGray-200">
                    <div className="flex flex-wrap text-left lg:text-left">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
                            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                                Find us on any of these platforms, we respond 1-2 business days.
                            </h5>
                            <div className="mt-6 lg:mb-0 mb-6">
                                <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fab fa-twitter"></i></button>
                                <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fab fa-facebook-square"></i></button>
                                <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fab fa-dribbble"></i></button>
                                <button href="https://github.com/logesh0dev" target="_blank" className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <a href="https://github.com/logesh0dev" target="_blank" ><i className="fab fa-github"></i></a>
                                </button>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/logesh0dev" target="_blank" >Github</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Free Products</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="bg-gray-800 text-white p-4 text-center">
                    <p>&copy; Copyright © 2025 Fashion here</p>

                </div>
            </section>

        </footer>
    )
}