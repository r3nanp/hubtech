import Image from 'next/image';

export default function Home() {
	return (
		<div className="flex flex-col md:flex-row md:justify-between md:items-center min-h-screen bg-h-bluish-black px-5 sm:px-6 pt-20 lg:px-16 xl:px-20">
			<main className="flex flex-col justify-center items-start w-full md:w-[40%] h-full mr-4 xl:mr-10">
				<h1 className="mt-7 md:mt-0 text-3xl md:text-6xl font-bold text-h-pink leading-[2rem] md:leading-[4rem]">
					Sua comunidade favorita de tecnologia
				</h1>
				<p className="text-white mt-7 md:mt-10 text-sm md:text-lg">
					Aqui você encontrará os mais diversos assuntos pertinentes ao mundo de
					TI, conhecerá diversas pessoas e se divertirá muito enquanto aprende e
					ensina!
				</p>
				<a
					href="https://ahub.tech/discord"
					target="_blank"
					rel="noreferrer"
					className="mt-7 mb-4 md:mt-10 md:mb-0 text-sm md:text-lg flex items-center py-2 px-8 rounded-3xl text-white bg-discord"
				>
					<Image src="/icons/discord.svg" width={24} height={27} />
					<span className="ml-5 font-bold">Quero fazer parte</span>
				</a>
			</main>
			<div className="flex justify-center items-center w-full md:w-1/2 h-full md:ml-4 xl:ml-10 px-12 md:px-0">
				<Image
					src="/img/amico.png"
					alt=""
					layout="intrinsic"
					width={560}
					height={515}
				/>
			</div>
		</div>
	);
}
