import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { RegisterSchema, RegisterSchemaType } from "../../zod/registerSchema";
import Input from "../Input";
import ShowErrorField from "../ShowErrorField";
import { SubmitButton } from "../SubmitButton";

const RegisterForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });
  const onSubmit = (data: RegisterSchemaType) => {
    console.log(data);
  };
  return (
    <View className="gap-11 w-[400px] px-4">
      <Controller
        name="fullName"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            placeholder="Nome completo"
          >
            {errors.fullName && (
              <ShowErrorField text={errors.fullName?.message}></ShowErrorField>
            )}
          </Input>
        )}
      ></Controller>
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            placeholder="Email"
          >
            {errors.email && (
              <ShowErrorField text={errors.email?.message}></ShowErrorField>
            )}
          </Input>
        )}
      ></Controller>
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            placeholder="Senha"
            isPassword
          >
            {errors.password && (
              <ShowErrorField text={errors.password?.message}></ShowErrorField>
            )}
          </Input>
        )}
      ></Controller>
      <Controller
        name="confirmPassword"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            placeholder="Confirmar Senha"
            isPassword
          >
            {errors.confirmPassword && (
              <ShowErrorField
                text={errors.confirmPassword?.message}
              ></ShowErrorField>
            )}
          </Input>
        )}
      ></Controller>
      <SubmitButton
        onPress={handleSubmit(onSubmit)}
        text="Cadastrar-se"
      ></SubmitButton>
    </View>
  );
};

export default RegisterForm;
