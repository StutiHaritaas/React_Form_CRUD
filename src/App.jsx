import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";

function App() {
    const [forms, setForms] = useState([]);
    const [updateIndex, setUpdateIndex] = useState(null);
    const [ename, setEname] = useState("");
    const [gender, setGender] = useState("");
    const [department, setDepartment] = useState("");
    const [doj, setDoj] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({});

    const updateFormList = (updatedForms) => {
        setForms(updatedForms);
    };

    const setFormDataToUpdate = (form, index) => {
        setUpdateIndex(index);
        setEname(form.ename);
        setGender(form.gender);
        setDepartment(form.department);
        setDoj(form.doj);
        setEmail(form.email);
    };

    const handleEnameChange = (e) => {
        setEname(e.target.value);
        setErrors((e) => ({ ...e, ename: "" }));
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleDepartmentChange = (e) => {
        setDepartment(e.target.value);
    };

    const handleDojChange = (e) => {
        setDoj(e.target.value);
        setErrors((e) => ({ ...e, doj: "" }));
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmitForm = (e) => {
        e.preventDefault(); // Prevent form submission
        let errors = {};

        if (!ename.trim()) {
            errors.ename = <span style={{ marginLeft: "190px" }}>Please enter your name !</span>;
        }

        if (!doj.trim()) {
            errors.doj = <span style={{ marginLeft: "190px" }}>Please enter your DOJ !</span>;
        }

        if (Object.keys(errors).length !== 0) {
            setErrors(errors);
            return;
        }

        const newForm = { ename: ename, gender: gender, department: department, doj: doj, email: email };

        if (updateIndex !== null) {
            const updatedForms = [...forms];
            updatedForms[updateIndex] = newForm;
            setForms(updatedForms);
            setUpdateIndex(null);
        } else {
            setForms((f) => [...f, newForm]);
        }

        setEname("");
        setGender("");
        setDepartment("");
        setDoj("");
        setEmail("");
        setErrors({});
    };

    const handleResetForm = () => {
        setEname("");
        setGender("");
        setDepartment("");
        setDoj("");
        setEmail("");
        setErrors({});
        setUpdateIndex(null);

        setTimeout(() => {
            setErrors({});
        }, 0);
    };

    return (
        <div>
            <Form
                ename={ename}
                gender={gender}
                department={department}
                doj={doj}
                email={email}
                errors={errors}
                handleEnameChange={handleEnameChange}
                handleGenderChange={handleGenderChange}
                handleDepartmentChange={handleDepartmentChange}
                handleDojChange={handleDojChange}
                handleEmailChange={handleEmailChange}
                handleSubmitForm={handleSubmitForm}
                handleResetForm={handleResetForm}
            />
            <Table
                forms={forms}
                updateFormList={updateFormList}
                setFormDataToUpdate={setFormDataToUpdate}
            />
        </div>
    );
}

export default App;