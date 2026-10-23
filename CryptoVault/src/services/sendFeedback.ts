import api from "./apiInstance";

export async function sendFeedback(
  feedbackType: string,
  title: string,
  description: string
) {
  const response = await api.post("feedback/create/", {
    type: feedbackType,
    title,
    description,
  });
  return response;
}
