const purposes = [
    { id: 1, title: "Travel" },
    { id: 2, title: "Training" },
    { id: 3, title: "Office Supplies" },
    { id: 4, title: "Client Entertainment" },
    { id: 5, title: "Marketing" },
    { id: 6, title: "Maintenance" },
    { id: 7, title: "Utilities" },
    { id: 8, title: "Software" },
    { id: 9, title: "Consultation" },
    { id: 10, title: "Miscellaneous" }
];

const categories = [
    { categoryId: 1, purposeId: 1, title: "Airfare" },
    { categoryId: 2, purposeId: 1, title: "Accommodation" },
    { categoryId: 3, purposeId: 1, title: "Local Transport" },
    { categoryId: 4, purposeId: 2, title: "Course Fees" },
    { categoryId: 5, purposeId: 2, title: "Materials" },
    { categoryId: 6, purposeId: 3, title: "Stationery" },
    { categoryId: 7, purposeId: 3, title: "Furniture" },
    { categoryId: 8, purposeId: 4, title: "Meals" },
    { categoryId: 9, purposeId: 4, title: "Entertainment Tickets" },
    { categoryId: 10, purposeId: 5, title: "Advertising" },
    { categoryId: 11, purposeId: 5, title: "Promotional Materials" },
    { categoryId: 12, purposeId: 6, title: "Repairs" },
    { categoryId: 13, purposeId: 6, title: "Servicing" },
    { categoryId: 14, purposeId: 7, title: "Electricity" },
    { categoryId: 15, purposeId: 7, title: "Water" },
    { categoryId: 16, purposeId: 7, title: "Internet" },
    { categoryId: 17, purposeId: 8, title: "Software Licenses" },
    { categoryId: 18, purposeId: 8, title: "Subscription Fees" },
    { categoryId: 19, purposeId: 9, title: "Consultant Fees" },
    { categoryId: 20, purposeId: 9, title: "Travel Expenses" },
    { categoryId: 21, purposeId: 10, title: "Other Expenses" }
];

const currency = [
    { id: 1, title: "INR" }
]

const paymentMethod = [
    { id: 1, title: "Cash" },
    { id: 2, title: "Online" },
    { id: 3, title: "Cheque" }
]

export { purposes, categories, currency, paymentMethod };