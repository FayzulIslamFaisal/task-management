import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="">
		<div className="container lg:px-20 mx-auto">
			<div className="grid items-center gap-6 md:grid-cols-2">
				<div className="flex justify-center md:order-2">
					<Image className="max-md:w-full" src="/images/banner1.png"  width={700} height={300} alt="frame" />
				</div>
				<div>
					<h1 className="mb-1.5 text-[56px] font-bold leading-none text-[#414240] lg:text-[73px]">
						Tasker
					</h1>
					<p className="text-lg my-3 text-[#414240]">
						Effortlessly Organize, Prioritize, and Conquer Tasks with Tasker - Your Personal Productivity Ally for
						Seamless Goal Achievement and Stress-Free Task Management.
					</p>
				</div>
			</div>
		</div>
	</section>
  )
}

export default HeroSection