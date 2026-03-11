import { jsPDF } from "jspdf";

export const generateCircularPDF = (circular) => {
	const doc = new jsPDF();

	doc.setFontSize(18);
	doc.text("ANV SCHOOL", 20, 20);

	doc.setFontSize(14);
	doc.text("School Circular", 20, 30);

	doc.setFontSize(12);
	doc.text(`Date: ${circular.date}`, 20, 40);

	doc.setFontSize(14);
	doc.text(circular.title, 20, 55);

	doc.setFontSize(11);

	const splitText = doc.splitTextToSize(circular.description, 170);
	doc.text(splitText, 20, 70);

	doc.save(`${circular.title}.pdf`);
};
