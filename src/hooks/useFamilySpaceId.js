import { useQuery } from "@tanstack/react-query";
import axiosInstance from "axios";

const useFamilySpaceId = () => {
  const fetchFamilySpaceId = async () => {
    const { response } = await axiosInstance.get(`/api/v0/family-space`);
    console.log("가족공간아이디", response);
    return response.data.result.familySpaceId;
  };

  const { data: familySpaceId, isLoading, error } = useQuery({
    queryKey: ["familySpaceId"],
    queryFn: fetchFamilySpaceId,
  });

  return {
    familySpaceId,
    isLoading,
    error,
  };
};

export default useFamilySpaceId;