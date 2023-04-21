import { loginSchemaResolver } from "@laundry-app/shared/resolvers";
import { useAuthedUser } from "@laundry-app/shared/api/user";
import { useLogin } from "@laundry-app/shared/api/auth";
import { WebRoutes } from "@laundry-app/shared/config/routes";
import { LoginUserDto } from "@laundry-app/shared/openapi";
import type { UnauthedStackParamList } from "@web/containers/Navigation/UnauthedNavigation";
// import {generateTestId} from '@mobile/utils/helpers';
// import {genericStorage, StorageKeys} from '@mobile/utils/localStorage';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Button,
  Center,
  Container,
  FormControl,
  Heading,
  Input,
  Link,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { Controller, useForm } from "react-hook-form";

import styles from "./Login.styles";

const formConfig = {
  defaultValues: {
    email: "karl.revilla.admin@gmail.com",
    password: "Test1234",
  },
  resolver: loginSchemaResolver,
};

const LoginContainer: React.FC = () => {
  const { control, handleSubmit } = useForm<LoginUserDto>(formConfig);
  const { isLoading, onLogin } = useLogin();
  const { isFetching } = useAuthedUser();

  const onSubmit = (form: LoginUserDto) => {
    onLogin(form);
  };

  return (
    <Container
      centerContent={true}
      width="75%"
      style={styles.container}
      alignSelf="center"
    >
      <VStack space={4} width="100%">
        <Heading style={styles.login}>Login</Heading>
        <Controller
          control={control}
          render={({
            formState: { errors },
            field: { onChange, onBlur, value },
          }) => (
            <FormControl isInvalid={!!errors?.email?.message}>
              <Input onBlur={onBlur} value={value} onChangeText={onChange} />
              <FormControl.ErrorMessage>
                {errors?.email?.message ?? ""}
              </FormControl.ErrorMessage>
            </FormControl>
          )}
          name="email"
        />
        <Controller
          control={control}
          render={({
            formState: { errors },
            field: { onChange, onBlur, value },
          }) => (
            <FormControl isInvalid={!!errors?.password?.message}>
              <Input
                secureTextEntry={true}
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
              />
              <FormControl.ErrorMessage>
                {errors?.password?.message}
              </FormControl.ErrorMessage>
            </FormControl>
          )}
          name="password"
        />
        <Button
          isLoading={isLoading || isFetching}
          disabled={isLoading || isFetching}
          onPress={handleSubmit(onSubmit)}
        >
          Login
        </Button>
      </VStack>
    </Container>
  );
};

export default LoginContainer;
