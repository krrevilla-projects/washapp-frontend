import { useQuery } from "@tanstack/react-query";
import { endPoints } from ".";
import { UserApi, UserResponse } from "../openapi";
import { AuthState, useUserStore } from "../zustand";
import { generateAPIConfig } from "./utils";

const mapUserStore = (state: AuthState) => {
  return {
    isLoggedInSuccessful: state.isLoggedInSuccessful,
    accessToken: state.accessToken,
  };
};

const fetchProfileData = async ({ queryKey }: any): Promise<UserResponse> => {
  const [_key, { accessToken }] = queryKey;
  const config = generateAPIConfig({ accessToken: accessToken });

  const userApi = new UserApi(config);
  const response = await userApi.userControllerFindOne();

  return response.data;
};

export const useAuthedUser = () => {
  const { isLoggedInSuccessful, accessToken } = useUserStore(mapUserStore);

  const { data, isFetching, isSuccess, isError, status } = useQuery({
    queryKey: [endPoints.myProfile, { accessToken }],
    queryFn: fetchProfileData,
    onSuccess: isLoggedInSuccessful,
    enabled: !!accessToken,
  });

  return { data, isFetching, isSuccess, isError, status };
};
