"use client";
import React from "react";
import Image from "next/image";
import styles from './hero.module.css'
import myImg from '../../public/myImgbgremove.png'

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
				
			</div>
			<div className={styles.imageSection}>
					<Image
					src={myImg} // Specify the path to your image
					alt="Description of the image" // Provide an alt text for accessibility
					width={500} // Specify the width of the image
					height={400} // Specify the height of the image
					style={{borderRadius: '300px'}}
					/>
				</div>
			
			
			
			
		</section>
	);
};

export default Hero;
