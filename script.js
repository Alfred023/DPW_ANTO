// Nomor tujuan WhatsApp (format internasional, tanpa +, 0, atau spasi)
const NOMOR_WA = "6282155428214";

const form = document.getElementById("form-kontak");

form.addEventListener("submit", function (event) {
	// Mencegah halaman reload
	event.preventDefault();

	// Ambil data dari form
	const nama = document.getElementById("nama").value.trim();
	const email = document.getElementById("email").value.trim();
	const telepon = document.getElementById("telepon").value.trim();
	const minat = document.getElementById("minat").value;
	const pesan = document.getElementById("pesan").value.trim();

	// Susun isi pesan
	const isiPesan =
`Halo, saya menghubungi melalui website CV kamu.

Nama Lengkap : ${nama}
Email        : ${email || "-"}
No. Telepon  : ${telepon || "-"}
Bidang Minat : ${minat}
Pesan        : ${pesan}`;

	// Ubah ke format URL
	const teks = encodeURIComponent(isiPesan);

	// Link WhatsApp Web
	const urlWhatsApp = `https://web.whatsapp.com/send?phone=${NOMOR_WA}&text=${teks}`;

	// Buka WhatsApp Web di tab baru
	window.open(urlWhatsApp, "_blank");
});