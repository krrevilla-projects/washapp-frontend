import { useMutation } from "@tanstack/react-query";
import {
  LoginUserDto,
  AuthenticationApi,
  AuthResponse,
  RegisterDto,
} from "../openapi";
import { useUserStore } from "../zustand";

const authApi = new AuthenticationApi();

const onLogin = async (form: LoginUserDto) => {
  const response = await authApi.authControllerLogin(form);

  return response.data;
};

interface AuthHookInterface {
  onSuccess?: (data: AuthResponse) => void;
}

export const useLogin = (props?: AuthHookInterface) => {
  const setAccessToken = useUserStore((state) => state.setAccessToken);
  const { data, isLoading, mutate, isSuccess, isError } = useMutation({
    mutationFn: onLogin,
    onSuccess: (data) => {
      setAccessToken(data.access_token);

      if (props?.onSuccess) {
        props.onSuccess(data);
      }
    },
  });

  return { data, isLoading, onLogin: mutate, isSuccess, isError };
};

const onRegister = async (form: RegisterDto) => {
  const response = await authApi.authControllerRegister(form);

  return response.data;
};

export const useRegister = (props?: AuthHookInterface) => {
  const setAccessToken = useUserStore((state) => state.setAccessToken);
  const { data, isLoading, mutate, isSuccess, isError } = useMutation({
    mutationFn: onRegister,
    onSuccess: (data) => {
      setAccessToken(data.access_token);

      if (props?.onSuccess) {
        props.onSuccess(data);
      }
    },
  });

  return { data, isLoading, onRegister: mutate, isSuccess, isError };
};
