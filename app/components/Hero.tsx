"use client";
import React from "react";
import Image from "next/image";
import myImg from '../../public/myImgbgremove.png';

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div className="paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#915EFF]" />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>
				<div>
					<h1 className="heroHeadText text-white">
						Hi, I&apos;m <span className="text-[#915EFF]">Rasun</span>
					</h1>
					<p className="heroSubText">
						A Creative Full Stack Web &nbsp;
						<br className="sm:block hidden" /> & Mobile Developer
					</p>
				</div>
			</div>

			{/* Image Section with Circular Border */}
			<div className="absolute bottom-0 left-0 right-0 flex justify-center items-center">
				<div className="relative sm:w-[400px] sm:h-[400px] w-[250px] h-[250px] rounded-full border-4 border-[#915EFF] overflow-hidden mx-auto">
					<Image
						src={myImg}
						alt="Rasun's Image"
						width={500}
						height={500}
						className="object-cover w-full h-full"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
