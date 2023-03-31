import { useMutation, useQuery } from "@tanstack/react-query";
import { endPoints, queryClient } from ".";
import { AddressApi, AddressDto } from "../openapi";
import { useUserStore } from "../zustand";
import { generateAPIConfig } from "./utils";

const fetchAddress = async ({ queryKey }: any) => {
  const [_key, { accessToken }] = queryKey;
  const config = generateAPIConfig({ accessToken: accessToken });

  const addressApi = new AddressApi(config);
  const response = await addressApi.addressControllerFindByUser();

  return response.data;
};

export const useAddressList = () => {
  const accessToken = useUserStore((state) => state.accessToken);
  const query = useQuery({
    queryKey: [endPoints.address, { accessToken }],
    queryFn: fetchAddress,
  });

  return query;
};

const createAddress = async (form: AddressDto, accessToken: string) => {
  const config = generateAPIConfig({ accessToken: accessToken });

  const addressApi = new AddressApi(config);
  const response = await addressApi.addressControllerCreateOne(form);

  queryClient.invalidateQueries([endPoints.address]);

  return response.data;
};

export const useAddressCreate = () => {
  const accessToken = useUserStore((state) => state.accessToken);
  const { data, isLoading, mutate, isSuccess, isError } = useMutation({
    mutationFn: (form: AddressDto) => createAddress(form, accessToken),
  });

  return { data, isLoading, onCreateAddress: mutate, isSuccess, isError };
};
