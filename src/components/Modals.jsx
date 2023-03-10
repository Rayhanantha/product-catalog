import React from "react";
import $ from "jquery";
import "./style/Modals.scss";
import { Whatsapp } from "react-bootstrap-icons";

export default function Modals(props) {
	return (
		<div id={props.modalBox} className="modal-container">
			<div className="modal-flex">
				<div id={props.modal} className="modal scrollbar-none">
					<div className="close-box">
						<div
							id="close-modal"
							className="close"
							onClick={() => {
								console.log("modal close");
								$(".modal-container, .modal").fadeOut("slow");
							}}
						>
							<span>&#43;</span>
						</div>
					</div>
					<div className="content">
						<div className="flex w-[250px] md:w-max items-center md:gap-x-5">
							<h2 className="title">{props.title}</h2>
							<img
								src="/catalog-icon.png"
								alt="icon katalog umkm"
								className="w-[100px] md:w-[80px] bg-green-700 rounded-full"
							/>
						</div>
						<div className="flex flex-col">
							<p className="text-lg md:text-xl font-arial mt-4">
								Harga Produk:
							</p>
							<div>{props.details}</div>
						</div>
						{props.additional}
						<div className="modal-btn">
							<div className="phone-number">
								{/* <i class="ri-whatsapp-fill ri-2x"></i> */}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="72"
									height="72"
								>
									<path fill="none" d="M0 0h24v24H0z" />
									<path
										d="M2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 0 0-.371.1 1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 0 0 6.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 0 0 3.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231c.166-.088.244-.132.383-.22 0 0 .043-.028.125-.09.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 0 0-.177-.041.482.482 0 0 0-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 0 1-.368.13 1.416 1.416 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 0 1-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 0 0 .263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z"
										fill="rgba(47,204,113,1)"
									/>
								</svg>
								{props.whatsapp}
							</div>
							<button
								className="contact-btn"
								onClick={() => {
									const whatsappText =
										"Halo, produk apa saja yang dijual disini? Apakah Saya bisa melihat daftar jualnya?";
									if (
										Object.is(
											props.whatsapp,
											"Pilih nomor yang ingin Anda hubungi!"
										)
									) {
										alert("Pilih nomor yang ingin Anda hubungi!");
									} else {
										window.location = `https://api.whatsapp.com/send?phone=${props.whatsapp}&text=${whatsappText}`;
									}
								}}
							>
								Hubungi Seller
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
