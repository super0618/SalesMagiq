export default function () {
	return (
		<div className="w-full py-8 relative">
			<div className="listBack absolute top-0 left-0 right-0 bottom-0"></div>
			<div className="container mx-auto px-8 ">
				<div className="flex mb-6">
					<div className="rounded-2xl bg-[#EBEBF4] p-3">
						<img src="/assets/icons/iconoir_add-user-lg.svg" alt="adduser" />
					</div>
					<div className="px-6">
						<p className="text-[32px] leading-8 mb-2">My Jobs</p>
						<p className="text-xs">
							Lorem ipsum dolor sit amet consectetur. Tellus nulla ipsum faucibus consectetur. Felis nunc
							in tempor aenean purus.
						</p>
					</div>
				</div>
				<div className="flex gap-x-2.5">
					<button className="px-6 py-1 bg-[#0A50A4] text-[#E7EEF6] text-[14px] rounded-lg">Dashboard</button>
					<button className="px-6 py-1 bg-[#CEDCED] text-[#0A50A4] text-[14px] rounded-lg">My Jobs</button>
					<button className="px-6 py-1 bg-[#CEDCED] text-[#0A50A4] text-[14px] rounded-lg">Applicants</button>
					<button className="px-6 py-1 bg-[#CEDCED] text-[#0A50A4] text-[14px] rounded-lg">Interviews</button>
				</div>
			</div>
		</div>
	);
}
