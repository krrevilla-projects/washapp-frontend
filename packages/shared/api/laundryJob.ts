import { useMutation, useQuery } from "@tanstack/react-query";
import { endPoints, queryClient } from ".";
import {
  LaundryJobApi,
  LaundryJobResponse,
  LaundryJobStatus,
  UserApi,
} from "../openapi";
import { useUserStore } from "../zustand";
import { generateAPIConfig } from "./utils";

const fetchUserLaundryJob = async ({ queryKey }: any) => {
  const [_key, { accessToken }] = queryKey;
  const config = generateAPIConfig({ accessToken: accessToken });

  const userApi = new UserApi(config);
  const response = await userApi.userControllerFindMyLaundryJob();

  return response.data;
};

export const useUserLaundryJob = () => {
  const accessToken = useUserStore((state) => state.accessToken);
  const query = useQuery({
    queryFn: fetchUserLaundryJob,
    queryKey: [endPoints.myLaundry, { accessToken }],
  });

  return query;
};

const createLaundryJob = async (accessToken: string) => {
  const config = generateAPIConfig({ accessToken: accessToken });

  const laundryJobApi = new LaundryJobApi(config);
  // FIX ME: Find a way to make DTO optional instead of passing empty object
  const response = await laundryJobApi.laundryJobControllerCreateOne({});

  queryClient.refetchQueries([endPoints.myLaundry]);

  return response.data;
};

export const useLaundryJobCreate = () => {
  const accessToken = useUserStore((state) => state.accessToken);
  const { isLoading, mutate, isSuccess, data } = useMutation({
    mutationFn: () => createLaundryJob(accessToken),
  });

  return { onCreateLaundryJob: mutate, isLoading, isSuccess, data };
};

const fetchLaundryJob = async ({ queryKey }: any) => {
  const [_key, id, { accessToken }] = queryKey;
  const config = generateAPIConfig({ accessToken: accessToken });

  const laundryJobApi = new LaundryJobApi(config);
  const response = await laundryJobApi.laundryJobControllerFindOne(id);

  return response.data;
};

export const useLaundryJob = (id: number, preData?: LaundryJobResponse) => {
  const accessToken = useUserStore((state) => state.accessToken);
  const query = useQuery({
    queryKey: [endPoints.laundryJob, id, { accessToken }],
    queryFn: fetchLaundryJob,
    placeholderData: preData,
  });

  return query;
};

interface LaundryJobUpdateStatus {
  id: number;
  status: LaundryJobStatus;
}

const updateLaundryJob = async (
  form: LaundryJobUpdateStatus,
  accessToken: string
) => {
  const config = generateAPIConfig({ accessToken: accessToken });

  const laundryJobApi = new LaundryJobApi(config);
  const response = await laundryJobApi.laundryJobControllerUpdateOne(form.id, {
    status: form.status,
  });

  return response.data;
};

export const useLaundryJobUpdateStatus = () => {
  const accessToken = useUserStore((state) => state.accessToken);
  const mutation = useMutation({
    mutationFn: (form: LaundryJobUpdateStatus) =>
      updateLaundryJob(form, accessToken),
  });

  return mutation;
};

const fetchLaundryJobList = async ({ queryKey }: any) => {
  const [_key, { accessToken }] = queryKey;
  const config = generateAPIConfig({ accessToken: accessToken });

  const laundryJobApi = new LaundryJobApi(config);
  const response = await laundryJobApi.laundryJobControllerFindAll();

  return response.data;
};

export const useLaundryJobs = () => {
  const accessToken = useUserStore((state) => state.accessToken);
  const query = useQuery({
    queryKey: [endPoints.laundryJob, { accessToken }],
    queryFn: fetchLaundryJobList,
  });

  return query;
};
