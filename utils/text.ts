/**
 * Memotong teks menjadi sejumlah kata maksimum.
 * @param {string} text - Teks yang akan dipotong.
 * @param {number} limit - Batas jumlah kata maksimum.
 * @returns {string} Teks yang dipotong.
 */
export const limitWords = (text: string, limit: number): string => {
	return text.split(" ").slice(0, limit).join(" ") + (text.split(" ").length > limit ? "..." : "");
};

/**
 * Memotong teks menjadi sejumlah karakter maksimum.
 * @param {string} text - Teks yang akan dipotong.
 * @param {number} limit - Batas jumlah karakter maksimum.
 * @returns {string} Teks yang dipotong.
 */
export const limitChars = (text: string, limit: number): string => {
	return text.slice(0, limit) + (text.length > limit ? "..." : "");
};

/**
 * Memotong teks menjadi sejumlah baris maksimum.
 * @param {string} text - Teks yang akan dipotong.
 * @param {number} limit - Batas jumlah baris maksimum.
 * @returns {string} Teks yang dipotong.
 */
export const limitLines = (text: string, limit: number): string => {
	return text.split("\n").slice(0, limit).join("\n") + (text.split("\n").length > limit ? "..." : "");
};

/**
 * Memotong teks menjadi sejumlah karakter maksimum.
 * @param {string} text - Teks yang akan dipotong.
 * @param {number} limit - Batas jumlah karakter maksimum.
 * @returns {string} Teks yang dipotong.
 */
export const truncate = (text: string, limit: number): string => {
	return text.slice(0, limit) + (text.length > limit ? "..." : "");
};

/**
 * Mengubah huruf pertama teks menjadi huruf besar.
 * @param {string} text - Teks yang akan diubah.
 * @returns {string} Teks dengan huruf pertama yang diubah menjadi huruf besar.
 */
export const capitalize = (text: string): string => {
	if (text.length === 0) return text;
	return text.charAt(0).toUpperCase() + text.slice(1);
};

/**
 * Mengubah huruf pertama setiap kata dalam teks menjadi huruf besar.
 * @param {string} text - Teks yang akan diubah.
 * @returns {string} Teks dengan huruf pertama setiap kata yang diubah menjadi huruf besar.
 */
export const capitalizeEachWord = (text: string): string => {
	return text.split(' ').map(word => capitalize(word)).join(' ');
};

/**
 * Mengubah semua huruf teks menjadi huruf kecil.
 * @param {string} text - Teks yang akan diubah.
 * @returns {string} Teks dengan semua huruf menjadi huruf kecil.
 */
export const lowerCase = (text: string): string => {
	if (text.length === 0) return text;
	return text.toLowerCase();
};

/**
 * Mengubah semua huruf teks menjadi huruf besar.
 * @param {string} text - Teks yang akan diubah.
 * @returns {string} Teks dengan semua huruf menjadi huruf besar.
 */
export const upperCase = (text: string): string => {
	if (text.length === 0) return text;
	return text.toUpperCase();
};

/**
 * Menghapus spasi kosong dari awal dan akhir teks.
 * @param {string} text - Teks yang akan dipotong.
 * @returns {string} Teks tanpa spasi kosong di awal dan akhir.
 */
export const trim = (text: string): string => {
	return text.trim();
};

// utils/copyUtils.ts

/**
 * Menyalin teks ke clipboard.
 * @param {string} text - Teks yang akan disalin.
 * @returns {Promise<string>} - Promise yang resolve dengan pesan sukses jika penyalinan berhasil.
 * @throws {Error} - Jika penyalinan gagal.
 */
export const copyToClipboard = async (text: string): Promise<string> => {
	try {
		await navigator.clipboard.writeText(text);
		return 'Text copied to clipboard';
	} catch (err) {
		throw new Error('Failed to copy text: ' + (err instanceof Error ? err.message : String(err)));
	}
};

/**
 * Menyalin nilai dari sebuah elemen input ke clipboard.
 * @param {string} inputSelector - Selector dari elemen input yang nilai-nya akan disalin.
 * @returns {Promise<string>} - Promise yang resolve dengan pesan sukses jika penyalinan berhasil.
 * @throws {Error} - Jika elemen input tidak ditemukan atau penyalinan gagal.
 */
export const copyInputValue = async (inputSelector: string): Promise<string> => {
	const inputElement = document.querySelector<HTMLInputElement>(inputSelector);
	if (inputElement) {
		return copyToClipboard(inputElement.value);
	} else {
		throw new Error('Input element not found');
	}
};

/**
 * Menyalin semua konten teks dari elemen target ke clipboard.
 * @param {string} elementSelector - Selector dari elemen yang konten teksnya akan disalin.
 * @returns {Promise<string>} - Promise yang resolve dengan pesan sukses jika penyalinan berhasil.
 * @throws {Error} - Jika elemen tidak ditemukan atau penyalinan gagal.
 */
export const copyFromElement = async (elementSelector: string): Promise<string> => {
	const element = document.querySelector<HTMLElement>(elementSelector);
	if (element) {
		return copyToClipboard(element.textContent || '');
	} else {
		throw new Error('Element not found');
	}
};
