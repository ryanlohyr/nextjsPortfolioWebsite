import React, { useEffect } from "react";
import { particlesCursor } from "threejs-toys";
import ParticleCursor from "./particleCursor";
import { Github, Linkedin, Mail } from "lucide-react";
const Hero = () => {
	useEffect(() => {
		if (typeof window !== "undefined") {
			const pc = particlesCursor({
				el: document.getElementById("hero"),
				gpgpuSize: 512,
				colors: [0x00ff00, 0x0000ff],
				color: 0xff0000,
				coordScale: 0.5,
				noiseIntensity: 0.00001,
				noiseTimeCoef: 0.0001,
				pointSize: 0.005,
				pointDecay: 0.0025,
				sleepRadiusX: 50,
				sleepRadiusY: 50,
				sleepTimeCoefX: 0.001,
				sleepTimeCoefY: 0.002,
			});
			pc.uniforms.uColor.value.set(Math.random() * 0xffffff);
			pc.uniforms.uCoordScale.value = 0.001 + Math.random() * 2;
			pc.uniforms.uNoiseIntensity.value = 0.0001 + Math.random() * 0.001;
			pc.uniforms.uPointSize.value = 1 + Math.random() * 10;

			document.body.addEventListener("click", function (event) {
				pc.uniforms.uColor.value.set(Math.random() * 0xffffff);
				pc.uniforms.uCoordScale.value = 0.001 + Math.random() * 2;
				pc.uniforms.uNoiseIntensity.value = 0.0001 + Math.random() * 0.001;
				pc.uniforms.uPointSize.value = 1 + Math.random() * 10;
			});

			return () => {
				// Clean up: remove event listener, etc.
			};
		}
	}, []);

	return (
		<div className="flex items-center justify-center" id="hero">
			<canvas className="-z-10 top-0"></canvas>
			<div>
				<h1 className="w-auto h-auto leading-none my-auto mx-auto text-[60px]">
					Hi
					<br />
					I&lsquo;m Ryan
				</h1>
				<h3>An aspiring software engineer in NUS</h3>
				<div className="flex items-center justify-center">
					<div className="flex justify-between w-32">
						<a target="_blank" href="https://github.com/ryanlohyr">
							<Github />
						</a>
						<a target="_blank" href="https://www.linkedin.com/in/ryanlohyr/">
							<Linkedin />
						</a>
						<a target="_blank" href="ryanloh29@gmail.com">
							<Mail />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
