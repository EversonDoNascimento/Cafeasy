import React, { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  onBlur: () => void;
  isPassword?: boolean;
  children: React.ReactNode;
};
const Input = ({
  value,
  onChange,
  placeholder,
  onBlur,
  isPassword,
  children,
}: Props) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <View className="bg-subtleHighlight rounded-2xl  py-1 px-4 text-text flex-row items-center justify-between relative">
      <TextInput
        className="flex-1"
        secureTextEntry={isPassword && !passwordVisible}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
      ></TextInput>
      {isPassword && (
        <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
          {passwordVisible ? (
            <FontAwesome name="eye-slash" size={20} color="black" />
          ) : (
            <FontAwesome name="eye" size={20} color="black" />
          )}
        </Pressable>
      )}
      {children}
    </View>
  );
};

export default Input;
