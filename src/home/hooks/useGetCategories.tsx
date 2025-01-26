import { useState } from "react";
import { getCategories, ICategory } from "../services/getCategories";

export const useGetCategories = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ICategory[]>([]);

  const handle = async () => {
    setLoading(true);
    try {
      const { data } = await getCategories();
      setData(data.data);
      return data.data;
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handle,
    data,
  };
};
