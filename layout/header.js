import Image from "next/image";

export default function () {
	return (
		<div className="xl:container mx-auto">
			<div className="px-8 py-3.5 flex gap-x-8 items-center">
				<div className="grow-0 shrink-0 hidden md:block">
					<img src="/assets/icons/logos.svg" alt="logo" />
				</div>
				<div className="grow shrink flex justify-start md:justify-end items-center text-[20px] flex-nowrap overflow-hidden">
					<div className="lg:px-6 md:px-4 flex items-center my-2 round">
						<img src="/assets/icons/iconoir_add-user.svg" alt="hire" className="pr-1" />
						Hire
					</div>
					<div className="lg:px-6 px-4 flex items-center">
						<img src="/assets/icons/iconoir_reports.svg" alt="lead" className="pr-1" />
						Lead
					</div>
					<div className="lg:px-6 px-4 flex items-center">
						<img src="/assets/icons/iconoir_train.svg" alt="train" className="pr-1" />
						Train
					</div>
					<div className="lg:px-6 px-4 flex items-center">
						<img src="/assets/icons/iconoir_message.svg" alt="community" className="pr-1" />
						Community
					</div>
				</div>
				<div className="relative hidden xl:block">
					<input type="text" className="w-full bg-[#EBEBF4] rounded-3xl px-9 py-1.5" placeholder="Search" />
					<div className="absolute top-0 left-3 bottom-0 grid place-items-center">
						<img src="/assets/icons/iconoir_search.svg" alt="search" />
					</div>
				</div>
				<div className="grow-0 shrink-0 hidden xl:block">
					<img src="/assets/icons/iconoir_bell-notification.svg" alt="notification" />
				</div>
				<div className="lg:flex hidden items-center justify-between grow-0 shrink-0">
					<Image src="/assets/img/avatar.png" alt="avatar" width={40} height={40} className="rounded-full" />
					<div className="pl-2">
						<p className="text-[20px] font-medium text-[#4C4C4C] text-nowrap overflow-hidden">John Doe</p>
						<p className="text-[#B3B3B3] text-nowrap overflow-hidden">Hiring Manager</p>
					</div>
				</div>
			</div>
		</div>
	);
}
