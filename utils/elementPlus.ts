/**
 @description
 * This file contains utility functions for displaying various types of messages,
   notifications, and message boxes using the Element Plus library.
*/

import { ElMessage, ElMessageBox, ElNotification } from "element-plus";

const showMessage = (
    type: "error" | "success" | "warning" | "info",
    message: string,
    duration = 4000
) => {
    ElMessage({
        type,
        showClose: true,
        duration,
        message,
    });
};

export const showErrorMessage = (message: string, duration = 5000) => {
    showMessage("error", message, duration);
};

export const showInfoMessage = (message: string, duration = 4000) => {
    showMessage("info", message, duration);
};

export const showSuccessMessage = (message: string, duration = 4000) => {
    showMessage("success", message, duration);
};

export const showWarningMessage = (message: string, duration = 4000) => {
    showMessage("warning", message, duration);
};


const showNotification = (
    type: "error" | "success" | "warning" | "info",
    message: string,
    duration = 4000,
    title?: string,
) => {
    ElNotification({
        type,
        message,
        title,
        showClose: true,
        duration,
    });
};

export const showErrorNotification = (message: string, title?: string, duration = 5000) => {
    showNotification("error", message, duration, title);
};

export const showInfoNotification = (message: string, title?: string, duration = 4000) => {
    showNotification("info", message, duration, title);
};

export const showSuccessNotification = (message: string, title?: string, duration = 4000) => {
    showNotification("success", message, duration, title);
};

export const showWarningNotification = (message: string, title?: string, duration = 4000) => {
    showNotification("warning", message, duration, title);
};


export const showMessageBox = (options: {
    message: string,
    title?: string,
    showClose?: boolean,
    confirmButtonText?: string,
    cancelButtonText?: string,
    successCallback?: () => any,
    failureCallback?: () => any,
}) => {
    ElMessageBox.confirm(options.message, options.title, {
        showClose: options.showClose ?? false,
        confirmButtonText: options.confirmButtonText,
        cancelButtonText: options.cancelButtonText,
    })
        .then(options.successCallback ? options.successCallback : () => { })
        .catch(options.failureCallback ? options.failureCallback : () => { })
}
