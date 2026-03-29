export const formData = {
	title: "Enquiry Form",
	description:
		"Complete the form for more information, and our team will contact you soon.",
	state: "Tamilnadu",
	city: "Chennai",
	School: "ANV",
	firstName: "",
	lastName: "",
	grade: [],
	email: "",
	mobileNo: "",
	captcha: "",
};
export const commonFormInputs = [
	{
		type: "text",
		name: "school",
		placeholder: "ANV",
		disabled: true,
		label: "School Name",
	},
	{
		type: "text",
		name: "firstName",
		placeholder: "Student's First Name",
		label: "First Name",
	},
	{
		type: "text",
		name: "lastName",
		placeholder: "Student's Last Name",
		label: "Last Name",
	},
	{
		type: "email",
		name: "email",
		placeholder: "Email",
		label: "Email",
	},
	{
		type: "text",
		name: "mobileNo",
		placeholder: "Mobile Number",
		maxLength: 10,
		inputMode: "numeric",
		pattern: "[0-9]*",
		label: "Mobile Number",
	},
];
