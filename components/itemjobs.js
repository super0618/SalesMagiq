export default function (props) {
	return (
		<div className="flex gap-3 py-2">
			<div className="basis-10 h-10 bg-[#EBEBF4] border-2 border-[#8986BB] rounded-full grid place-items-center grow-0 shrink-0">
				<img src="/assets/icons/iconoir_shopping-bag.svg" alt="briefcase" />
			</div>
			<div>
				<div className="flex mb-2 justify-between">
					<p className="text-xl leading-5 text-[#4C4C4C]">{props.title}</p>
					<div className="flex gap-2 items-center">
						<img src="/assets/icons/iconoir_coins.svg" alt="coins" />
						<div className="bg-[#B3B3B3] text-white text-[12px] px-4 py-0.5 rounded-xl text-nowrap overflow-hidden">
							{props.salary}
						</div>
					</div>
				</div>
				<div className="flex gap-2">
					<img src="/assets/icons/iconoir_page.svg" alt="coins" />
					<p className="text-[12px] text-[#B3B3B3] text-ellipsis leading-3 font-light">{props.description}</p>
				</div>
			</div>
		</div>
	);
}
