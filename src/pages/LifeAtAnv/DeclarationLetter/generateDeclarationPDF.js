import { jsPDF } from "jspdf";

export const generateDeclarationPDF = (declaration) => {
	const doc = new jsPDF();

	// School Name
	doc.setFontSize(18);
	doc.text("ANV SCHOOL", 20, 20);

	// Title
	doc.setFontSize(15);
	doc.text("DECLARATION LETTER", 20, 32);

	// Academic Year
	doc.setFontSize(12);
	doc.text(`Academic Year: ${declaration.year}`, 20, 42);

	// Declaration Content
	doc.setFontSize(11);

	const splitText = doc.splitTextToSize(declaration.content, 170);

	doc.text(splitText, 20, 60);

	// Signature Section
	let endY = 60 + splitText.length * 6 + 20;

	doc.text("Principal", 20, endY);
	doc.text("ANV School", 20, endY + 8);

	doc.text("School Management", 140, endY);
	doc.text("ANV School", 140, endY + 8);

	doc.save("ANV-Declaration-Letter.pdf");
};
