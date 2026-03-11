import { jsPDF } from "jspdf";
import { committeeData } from "../../pages/LifeAtAnv/TransportAndCommiteeMembers/data";

export const generateCommitteePDF = () => {
	const doc = new jsPDF();

	doc.setFontSize(18);
	doc.text("ANV SCHOOL", 20, 20);

	doc.setFontSize(14);
	doc.text("Transport Committee Members", 20, 30);
	doc.text("Academic Year 2025-2026", 20, 38);

	doc.setFontSize(11);
	doc.text(
		"The Transport Committee ensures safe and reliable transportation for students.",
		20,
		50,
	);

	let startY = 65;

	doc.text("S.No", 20, startY);
	doc.text("Name", 40, startY);
	doc.text("Role", 100, startY);

	startY += 10;

	committeeData.members.forEach((member, index) => {
		doc.text(String(index + 1), 20, startY);
		doc.text(member.name, 40, startY);
		doc.text(member.role, 100, startY);
		startY += 10;
	});

	startY += 20;

	doc.text("Principal Signature", 20, startY);
	doc.text("Transport Manager Signature", 120, startY);

	doc.save("ANV-Transport-Committee.pdf");
};
