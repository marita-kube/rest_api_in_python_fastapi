/*
Error message
 */
export function getErrorMessage(error){
    if (typeof error.detail === "string"){
        return error.detail;
    }else if (Array.isArray(error.detail)){
        return error.detail.map((err) => err.msg).join(". ");
    }
    return "You are in error. Try Again!"
}

/**
 * show modal by id from bootstrap
 * 
 */

export function showModal(modalId){
    const modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById(modalId),
    );
    modal.show();
    return modal;
}

/**
 * Hide modal by Id
 */
export function hideModal(modalId){
    const modal = bootstrap.Modal.getInstance(document.getElementById(modalId));
    if (modal) modal.hide()
}
/**
 * Create Post Form
 */

