"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function () {
	const router = useRouter();

	return (
		<main className="h-screen bg-[#EBEBF4] grid place-items-center">
			<div className="w-11/12 max-w-[720px] p-6 flex bg-white rounded-xl gap-x-6">
				<div className="basis-[246px] hidden sm:block">
					<img src="/assets/img/img1.png" alt="leftimg" className="object-cover rounded-md h-full" />
				</div>
				<div className="grow bg-white space-y-6 text-[14px] leading-[14px]">
					<div className="pt-6">
						<img src="/assets/icons/logos.svg" alt="logo" className="mx-auto" />
					</div>
					<div className="text-center">
						<p className="text-base text-[#0A50A4] font-semibold">Welcome to back</p>
						<p className="text-[#B3B3B3] text-[10px]">Sign in to continue</p>
					</div>
					<div>
						<div>
							<label>Email Address</label>
							<div className="relative mt-3 mb-6">
								<input
									placeholder="Please input here."
									value="Aiden Roy"
									className="py-2 pl-8 rounded-lg border-gray-300 border w-full"
								/>
								<div className="absolute top-0 left-2 bottom-0 grid place-items-center">
									<img src="/assets/icons/iconoir_search.svg" alt="search" />
								</div>
							</div>
						</div>
						<div>
							<label>User Password</label>
							<div className="relative mt-3 mb-6">
								<input
									type="password"
									placeholder="Please input here."
									className="py-2 pl-4 pr-8 rounded-lg border-gray-300 border w-full"
								/>
								<div className="absolute top-0 right-2 bottom-0 grid place-items-center cursor-pointer">
									<img src="/assets/icons/iconoir_eye.svg" alt="search" />
								</div>
							</div>
						</div>
						<button
							className="bg-[#3B368D] hover:bg-[#2a2766] rounded-lg w-full text-[#EBEBF4] py-3 px-6"
							onClick={() => router.push("/jobs")}
						>
							Login
						</button>
					</div>
					<div className="flex items-center">
						<div className="grow h-px bg-gray-400"></div>
						<div className="px-2 text-gray-400">or</div>
						<div className="grow h-px bg-gray-400"></div>
					</div>
					<div>
						<button className="rounded-lg w-full text-[#3B368D] py-2 border border-gray-300 flex items-center justify-center mb-3">
							<img src="/assets/icons/logos_google-icon.svg" alt="logos_google-icon" className="px-2" />
							Google
						</button>
						<button className="rounded-lg w-full text-[#3B368D] py-2 border border-gray-300 flex items-center justify-center">
							<img src="/assets/icons/logos_facebook.svg" alt="logos_facebook" className="px-2" />
							Facebook
						</button>
					</div>
					<div className="text-center">
						Don't you have an account? &nbsp;
						<Link href="/signup" className="underline text-[#4193F6] font-medium">
							Sign up
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
