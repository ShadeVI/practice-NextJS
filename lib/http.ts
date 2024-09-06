const url = "https://www.course-api.com/react-tours-project";

export type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

export const fetchTours = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(url);
  const data: Tour[] = await response.json();
  return data;
};