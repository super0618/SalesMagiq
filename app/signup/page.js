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
						<p className="text-base text-[#0A50A4] font-semibold">Create an account</p>
						<p className="text-[#B3B3B3] text-[10px]">Create an account</p>
					</div>
					<div>
						<div>
							<label>Email Address</label>
							<input
								placeholder="Please input here."
								className="mt-3 py-2 pl-8 rounded-lg border-gray-300 border w-full mb-6"
							/>
						</div>
						<div>
							<label>User Password</label>
							<input
								placeholder="Please input here."
								className="mt-3 py-2 pl-8 rounded-lg border-gray-300 border w-full mb-6"
							/>
						</div>
						<button
							className="bg-[#3B368D] hover:bg-[#2a2766] rounded-lg w-full text-[#EBEBF4] py-3 px-6"
							onClick={() => router.push("/")}
						>
							Sign Up
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
						<Link href="/" className="underline text-[#4193F6] font-medium">
							Log in
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}