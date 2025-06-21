import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { LoginSchema, LoginSchemaType } from "../../zod/loginSchema";
import Input from "../Input";
import ShowErrorField from "../ShowErrorField";
import { SubmitButton } from "../SubmitButton";

export const LoginForm = () => {
  const router = useRouter();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (data: LoginSchemaType) => {
    console.log(data);
  };
  return (
    <View className="gap-11 w-[400px] px-4">
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
      <View className="w-full gap-2 ">
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              isPassword={true}
              onChange={onChange}
              value={value}
              onBlur={onBlur}
              placeholder="Senha"
            >
              {errors.email && (
                <ShowErrorField
                  text={errors.password?.message}
                ></ShowErrorField>
              )}
            </Input>
          )}
        ></Controller>
        <View className="w-full items-end ">
          <Text className="text-red-700 underline">Esqueci a senha</Text>
        </View>
      </View>

      <SubmitButton
        onPress={() => {
          router.push("/(app)");
        }}
        text="Entrar"
      ></SubmitButton>
    </View>
  );
};
