import { useState } from "react";
import { commonFormInputs, formData } from "./data";
import Swal from "sweetalert2";
import "./EnquiryForm.css";

const EnquiryForm = () => {
	const [form, setForm] = useState({
		state: "Tamilnadu",
		city: "Vellakovil",
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
		setErrors((prev) => ({
			...prev,
			[e.target.name]: "",
		}));
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
		// if (!form.captcha) newErrors.captcha = "Captcha required";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (validate()) {
			Swal.fire({
				title: "🎉 Success!",
				html: "<b>Your enquiry has been submitted</b><br/>We will contact you soon.",
				icon: "success",
				showConfirmButton: true,
				confirmButtonText: "Great!",
				background: "#fff",
				color: "#333",
				backdrop: `rgba(0,0,0,0.4)`,
			});

			setForm({
				state: "Tamilnadu",
				city: "Vellakovil",
				school: "ANV",
				firstName: "",
				lastName: "",
				grade: "",
				email: "",
				mobileNo: "",
			});

			setErrors({});
		} else {
			Swal.fire({
				title: "Oops ⚠️",
				text: "Please fill all required fields correctly",
				icon: "error",
				confirmButtonText: "Got it",
				confirmButtonColor: "#d33",
			});
		}
	};
	return (
		<div className="enquiry-wrapper">
			<h2 className="enquiry-title">{formData.title}</h2>
			<p className="enquiry-desc">{formData.description}</p>

			<form className="enquiry-form" onSubmit={handleSubmit}>
				<div className="form-grid">
					<div className="form-inputs-section">
						<span>State</span>
						<select
							name="state"
							value={form.state}
							onChange={handleChange}
						>
							<option>Tamilnadu</option>
							{/* <option>Karnataka</option> */}
						</select>
					</div>

					<div className="form-inputs-section">
						<span>City</span>
						<select
							name="city"
							value={form.city}
							onChange={handleChange}
						>
							<option>Vellakovil</option>
							{/* <option>Bengaluru</option> */}
						</select>
					</div>

					<div className="form-inputs-section">
						<span>Grade</span>
						<select
							name="grade"
							value={form.grade}
							onChange={handleChange}
						>
							<option value="">Select Grade</option>
							<option>LKG</option>
							<option>UKG</option>
							<option>Grade 1</option>
							<option>Grade 2</option>
							<option>Grade 3</option>
							<option>Grade 4</option>
							<option>Grade 5</option>
							<option>Grade 6</option>
							<option>Grade 7</option>
							<option>Grade 8</option>
							<option>Grade 9</option>
						</select>
						{errors.grade && (
							<span className="error">{errors.grade}</span>
						)}
					</div>
					{/* <input
						type="text"
						name="captcha"
						placeholder="Enter Captcha"
						onChange={handleChange}
					/>
					{errors.captcha && (
						<span className="error">{errors.captcha}</span>
					)} */}
					{commonFormInputs.map((ele, i) => {
						return (
							<div className="form-inputs-section" key={i}>
								<span>{ele.label}</span>
								<input
									type={ele.type}
									name={ele.name}
									placeholder={ele.placeholder}
									disabled={ele.disabled}
									onChange={handleChange}
									key={i}
									maxLength={ele.maxLength}
									inputMode={ele.inputMode}
									pattern={ele.pattern}
									value={form[ele.name]}
								/>
								{errors[ele.name] && (
									<span className="error">
										{errors[ele.name]}
									</span>
								)}
							</div>
						);
					})}
				</div>

				<button type="submit" className="submit-btn">
					SEND ENQUIRY
				</button>
			</form>
		</div>
	);
};

export default EnquiryForm;
