import { toast } from "react-toastify";

export const nptify = (text, type) => {
    if (type === "success") {
        toast.success(text)
    } else {
        toast.error(text)
    }
}