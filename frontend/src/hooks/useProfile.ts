import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../api";

const useProfile = () =>
  useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

export default useProfile;
