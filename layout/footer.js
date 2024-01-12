export default function () {
	return (
		<div className="bg-[#EBEBF4] py-12 rounded-xl">
			<div className="container mx-auto grid grid-cols-5 px-8 pb-8 gap-x-8">
				<div className="grid-cols-1">
					<img src="/assets/icons/logos.svg" alt="logo" className="pb-2.5" />
					<p>Lorem ipsum dolor sit amet consectetur. Lectus facilisi id bibendum quis consectetur egestas.</p>
				</div>
				<div className="grid-cols-2">
					<p className="text-[18px] font-medium text-[#3B368D] leading-[18px] pb-2.5">Business</p>
					<p className="pb-2.5">Hire</p>
					<p className="pb-2.5">Training</p>
					<p>Scaling</p>
				</div>
				<div className="grid-cols-3">
					<p className="text-[18px] font-medium text-[#3B368D] leading-[18px] pb-2.5">Business</p>
					<p className="pb-2.5">Hire</p>
					<p className="pb-2.5">Training</p>
					<p>Scaling</p>
				</div>
				<div className="grid-cols-4">
					<p className="text-[18px] font-medium text-[#3B368D] leading-[18px] pb-2.5">Business</p>
					<p className="pb-2.5">Hire</p>
					<p className="pb-2.5">Training</p>
					<p>Scaling</p>
				</div>
				<div className="grid-cols-5">
					<p className="text-[18px] font-medium text-[#3B368D] leading-[18px] pb-2.5">Follow us</p>
					<div className="flex sm:gap-4 flex-wrap">
						<img src="/assets/icons/entypo-social_twitter-with-circle.svg" alt="twitter" />
						<img src="/assets/icons/entypo-social_youtube-with-circle.svg" alt="youtube" />
						<img src="/assets/icons/entypo-social_facebook-with-circle.svg" alt="facebook" />
						<img src="/assets/icons/entypo-social_pinterest-with-circle.svg" alt="pinterest" />
					</div>
				</div>
			</div>
			<p className="text-center">
				Copyright © All rights reserved by{" "}
				<a href="#" className="text-[#4193F6] underline">
					Salesmagiq
				</a>
			</p>
		</div>
	);
}
