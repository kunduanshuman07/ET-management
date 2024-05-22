import { paymentMethod, purposes, categories, projects } from '../common/expenseUtils';

export const getPayMethod = (paymentId) => {
    const paymentType = paymentMethod.find(pay => pay.id === parseInt(paymentId));
    return paymentType ? paymentType.title : "Unknown Category";
};
export const getPurpose = (purposeId) => {
    const purpose = purposes.find(purp => purp.id === parseInt(purposeId));
    return purpose ? purpose.title : "Unknown Category";
};
export const getCategoryTitle = (categoryId) => {
    const category = categories.find(cat => cat.categoryId === parseInt(categoryId));
    return category ? category.title : "Unknown Category";
};
export const getProjectCode = (projectId) => {
    const project = projects.find(project => project.projectCode === projectId);
    return project ? project.projectName : "Unknown Category";
}

export const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toISOString().slice(0, 10);
};