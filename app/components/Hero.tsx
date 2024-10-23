"use client";
import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div className="paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#915EFF] " />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>
				<div>
					<h1 className="heroHeadText text-white">
						Hi, I&apos;m <span className="text-[#915EFF] ">Om</span>
					</h1>
					<p className="heroSubText">
						A Creative Full Stack Web Developer&nbsp;
						<br className="sm:block hidden" />& UI/UX Designer
					</p>
				</div>
			</div>
			
			
		</section>
	);
};

export default Hero;
