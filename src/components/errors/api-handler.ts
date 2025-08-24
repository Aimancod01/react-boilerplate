import axios from "axios";
import toast from "react-hot-toast";

export const handleApiError = (error: unknown) => {
  if (axios.isAxiosError(error) && error.response) {
    const { status, data } = error.response;
    switch (status) {
      case 400:
        toast.error(data?.message || "Bad Request");
        break;
      case 401:
        toast.error(data?.message || "Unauthorized - Please login again");
        localStorage.removeItem("token");
        window.location.href = "/login";
        break;
      case 403:
        toast.error(data?.message || "Forbidden");
        break;
      case 404:
        toast.error(data?.message || "Not Found");
        break;
      case 500:
        toast.error(data?.message || "Internal Server Error");
        break;
      default:
        toast.error(data?.message || error.message || "Unknown Error");
    }
  } else {
    const err = error as Error;
    toast.error(err.message || "Network Error");
  }
};
