import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ShinyButton from "./components/ShinyButton";
import $ from "jquery";
import "./sass/Catalog.scss";
import CemilanBukSu from "./components/Catalog/CemilanBukSu";
import SepatuSandal from "./components/Catalog/SepatuSandal";
import KrupukPuli from "./components/Catalog/KrupukPuli";
import AnekaBoneka from "./components/Catalog/AnekaBoneka";
import JajananJatim from "./components/Catalog/JajananJatim";
import KripikPisangRaja from "./components/Catalog/KripikPisangRaja";
import MaduAsli from "./components/Catalog/MaduAsli";
import RempeyekSG from "./components/Catalog/RempeyekSG";
import BumbuPecel from "./components/Catalog/BumbuPecel";
import JamuManjakaniKunyit from "./components/Catalog/JamuManjakaniKunyit";
import JamuSumbergedang from "./components/Catalog/JamuSumbergedang";
import KrupukPasir from "./components/Catalog/KrupukPasir";
import KripikTalas from "./components/Catalog/KripikTalas";
import KripikTempe from "./components/Catalog/KripikTempe";

export default function Catalog() {
	$("#card-btn").on("click", () => {
		$(".modal-container, .modal").fadeIn("slow");
	});
	$(".close").on("click", () => {
		$(".modal-container, .modal").fadeOut("slow");
	});
	return (
		<div id="catalog" className="catalog">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Katalog UMKM</title>
				<link
					rel="shortcut icon"
					href="/catalog-icon.png"
					type="image/x-icon"
				/>
			</Helmet>
			<div className="flex md:mx-[5rem] items-center">
				<img
					src="/catalog-icon.png"
					className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] m-4"
					alt="umkm-icon"
				/>
				<h1 className="flex-grow page-title font-poppins ml-[-5px] duration-300">
					Katalog Produk UMKM
				</h1>
				<Link
					to={"/"}
					tabIndex={-1}
					onClick={() => {
						$(body).scrollTop(0);
					}}
				>
					<ShinyButton className="btn-home" text="Homepage" />
				</Link>
			</div>
			<div
				id="catalog-products"
				className="container mx-auto flex flex-wrap justify-evenly duration-300"
			>
				<CemilanBukSu />
				<JamuSumbergedang />
				<SepatuSandal />
				<KrupukPuli />
				<AnekaBoneka />
				<JajananJatim />
				<KripikPisangRaja />
				<MaduAsli />
				<RempeyekSG />
				<BumbuPecel />
				<JamuManjakaniKunyit />
				<KrupukPasir />
				<KripikTalas />
				<KripikTempe />
			</div>
		</div>
	);
}
