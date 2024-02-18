formbuilder = ()=>{
    let formData = {
        "Loan type": ["Personal", "Business"],
        "personal": ["Email"],
        "Education": ["Email"],
        "Work": ["Email"],
        "Additional": ["Email"],
        "Status": "Pending",
        "Feedback": "Provide more info",
    }
}

submitApplication = (formData)=>{
    formData.email(curl("email"))
}