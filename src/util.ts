/**
 * Helper function for handling fetch API sanely.
 * Throws if the response is not in 2XX range.
 */
export const request = async (...args: Parameters<typeof fetch>) => {
  const response = await fetch(...args);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const content = await response.json();

  return content;
};
