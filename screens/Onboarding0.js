import { View, TextInput, Button, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import COLORS from '../assets/colors/colors'
import { useNavigation } from "@react-navigation/native"


const Onboarding0 = () => {

    const navigation = useNavigation();
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.lightYellow
            }}

        >
            <TouchableOpacity 
            style={{
                flex: 1,
            }}
            onPress={() => navigation.navigate("Onboarding1")}>

            <Image
                source={require('../assets/images/onboarding0.png')}
                style={{ width: 226, height: 276, position: 'absolute', top: "40%", left: "25%", bottom: "15%", right: "20%" }}
                />
            </TouchableOpacity>
           
        </SafeAreaView>
    )
}

export default Onboarding0
