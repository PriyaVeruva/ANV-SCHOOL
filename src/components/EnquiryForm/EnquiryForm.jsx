import { useState } from "react";
import { formData } from "./data";
import "./EnquiryForm.css";

const EnquiryForm = () => {
	const [form, setForm] = useState({
		state: "Tamilnadu",
		city: "Chennai",
		school: "ANV",
		firstName: "",
		lastName: "",
		grade: "",
		email: "",
		mobileNo: "",
		captcha: "",
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const validate = () => {
		const newErrors = {};

		if (!form.firstName.trim())
			newErrors.firstName = "First name is required";
		if (!form.lastName.trim())
			newErrors.lastName = "Last name is required";

		if (!form.email) {
			newErrors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(form.email)) {
			newErrors.email = "Invalid email address";
		}

		if (!form.mobileNo) {
			newErrors.mobileNo = "Mobile number is required";
		} else if (!/^[6-9]\d{9}$/.test(form.mobileNo)) {
			newErrors.mobileNo = "Enter valid 10 digit mobile number";
		}

		if (!form.grade) newErrors.grade = "Please select grade";
		if (!form.captcha) newErrors.captcha = "Captcha required";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validate()) {
			alert("Enquiry submitted successfully ✅");
			console.log(form);
		}
	};

	return (
		<div className="enquiry-wrapper">
			<h2 className="enquiry-title">{formData.title}</h2>
			<p className="enquiry-desc">{formData.description}</p>

			<form className="enquiry-form" onSubmit={handleSubmit}>
				<div className="form-grid">
					<select
						name="state"
						value={form.state}
						onChange={handleChange}
					>
						<option>Tamilnadu</option>
						<option>Karnataka</option>
					</select>

					<select
						name="city"
						value={form.city}
						onChange={handleChange}
					>
						<option>Chennai</option>
						<option>Bengaluru</option>
					</select>

					<input
						type="text"
						name="school"
						value={form.school}
						placeholder="School Name"
						onChange={handleChange}
						disabled
					/>

					<input
						type="text"
						name="firstName"
						placeholder="Student's First Name"
						onChange={handleChange}
					/>
					{errors.firstName && (
						<span className="error">{errors.firstName}</span>
					)}

					<input
						type="text"
						name="lastName"
						placeholder="Student's Last Name"
						onChange={handleChange}
					/>
					{errors.lastName && (
						<span className="error">{errors.lastName}</span>
					)}

					<select name="grade" onChange={handleChange}>
						<option value="">Select Grade</option>
						<option>Grade 1</option>
						<option>Grade 2</option>
						<option>Grade 3</option>
					</select>
					{errors.grade && (
						<span className="error">{errors.grade}</span>
					)}

					<input
						type="email"
						name="email"
						placeholder="Email"
						onChange={handleChange}
					/>
					{errors.email && (
						<span className="error">{errors.email}</span>
					)}

					<input
						type="text"
						name="mobileNo"
						placeholder="Mobile Number"
						onChange={handleChange}
					/>
					{errors.mobileNo && (
						<span className="error">{errors.mobileNo}</span>
					)}

					{/* <input
						type="text"
						name="captcha"
						placeholder="Enter Captcha"
						onChange={handleChange}
					/>
					{errors.captcha && (
						<span className="error">{errors.captcha}</span>
					)} */}
				</div>

				<button type="submit" className="submit-btn">
					SEND ENQUIRY
				</button>
			</form>
		</div>
	);
};

export default EnquiryForm;
