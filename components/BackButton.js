import { TouchableOpacity, Text, Image, StatusBar } from "react-native";
import COLORS from "../assets/colors/colors";

const BackButton = ({ navigation, marginBottom }) => {
    return (
        <TouchableOpacity
            style={{
                borderRadius: 30,
                marginHorizontal: 28,
                marginBottom: marginBottom,
            }}
            onPress={() => navigation.goBack()}
        >
            <Image
                source={require('../assets/images/back_arrow.png')}
                resizeMode="contain"
                style={{ width: 400, height: 24 }}
            />
        </TouchableOpacity>
    )
}

export default BackButton