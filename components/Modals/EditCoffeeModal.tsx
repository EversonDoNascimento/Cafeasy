import { Modal, Pressable, Text, View } from "react-native";

type Props = {
  showModal: boolean;
  onClose: () => void;
};
const EditCoffeeModal = ({ showModal, onClose }: Props) => {
  return (
    <Modal visible={showModal} animationType="slide">
      <View className="flex-1 justify-end bg-black/50">
        <View className="bg-white h-[70%] w-full rounded-t-2xl p-4">
          <Text>ola</Text>
          <Pressable onPress={onClose}>
            <Text>Fechar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default EditCoffeeModal;
