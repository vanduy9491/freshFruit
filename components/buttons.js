import { TouchableOpacity, Text, Image } from "react-native";
import COLORS from "../assets/colors/colors";

const Button = ({color, title, handlePress}) => {
    return (
        <TouchableOpacity
            style={{ 
                backgroundColor: color,
                borderRadius: 30,
                marginHorizontal: 28,
                marginBottom: 45
            }}
            onPress={handlePress}
        >
            <Text 
            style={{ 
                color: color == COLORS.black ? COLORS.white : COLORS.black,
                fontSize: 16, 
                paddingHorizontal: 138, 
                paddingVertical:18,
            }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button