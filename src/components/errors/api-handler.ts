import axios from "axios";

export const handleApiError = (error: unknown) => {
  if (axios.isAxiosError(error) && error.response) {
    const { status, data } = error.response;

    switch (status) {
      case 400:
        console.error("Bad Request:", data?.message);
        break;
      case 401:
        console.error("Unauthorized:", data?.message);
        break;
      case 403:
        console.error("Forbidden:", data?.message);
        break;
      case 404:
        console.error("Not Found:", data?.message);
        break;
      case 500:
        console.error(
          "Server Error:",
          data?.message || "Internal Server Error"
        );
        break;
      default:
        console.error("Unknown Error:", data?.message || error.message);
    }
  } else {
    const err = error as Error;
    console.error("Network Error:", err.message);
  }
};
