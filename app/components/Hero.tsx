"use client";
import React from "react";
import Image from "next/image";

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
						Hi, I&apos;m <span className="text-[#915EFF] ">Rasun</span>
					</h1>
					<p className="heroSubText">
						A Creative Full Stack Web &nbsp;
						<br className="sm:block hidden" />& Mobile Developer
					</p>
				</div>
				<div className="">
					<Image
					src="https://media.licdn.com/dms/image/v2/D5603AQH_dp4_ZC8SnA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729015852819?e=1735171200&v=beta&t=NQKikNRhMHsRidfr2EPgFMlJ0uwsjmuXbFz2XiCtqV0" // Specify the path to your image
					alt="Description of the image" // Provide an alt text for accessibility
					width={500} // Specify the width of the image
					height={300} // Specify the height of the image
					/>
				</div>
			</div>
			
			
			
			
			
		</section>
	);
};

export default Hero;
