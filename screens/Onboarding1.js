import { View, TextInput, Text, SafeAreaView, Image, StatusBar } from 'react-native'
import COLORS from '../assets/colors/colors'
import BackButton from '../components/BackButton'
import Button from '../components/buttons'

const Onboarding1 = ({ navigation }) => {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.white,
            alignItems: "center",
            justifyContent: "center",
        }}>
            <View style={{ 
                position: "absolute",
                top:StatusBar.currentHeight + 10,
                left:'-45%'
            }}>
                <BackButton navigation={navigation} marginBottom={45} />
            </View>
            <View style={{
                width: '100%',
                position: 'absolute',
                bottom: 0,
                justifyContent: "center",
                alignItems: "center",

            }}>
                <Button color={COLORS.lightYellow} title={'NEXT'} handlePress={() => navigation.navigate("Onboarding2")}/>

            </View>
            <View style={{ width: 328, height: 203.51, position: 'absolute', top: "25%" }}>
                <Image
                    source={require('../assets/images/onboarding1.png')}
                />
            </View>
            <View style={{
                position: "absolute",
                top: '58%',
            }}>
                <Text style={{
                    fontSize: 24,
                }}>Welcome to Fresh Fruits</Text>
            </View>
            <View style={{
                position: "absolute",
                top: '65%',
            }}>
                <Text style={{
                    fontSize: 18
                }}>Grocery application</Text>
            </View>
            <View style={{
                position: "absolute",
                top: '70%',
            }}>
                <Text style={{
                    fontSize: 14,
                    maxWidth: 318,
                    textAlign: "center"
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                position: "absolute",
                top: '80%',
            }}>
                <View style={{ borderRadius: 50, width: 23, height: 6, backgroundColor: COLORS.g5 }}></View>
                <View style={{ borderRadius: 50, width: 23, height: 6, backgroundColor: COLORS.lightGrey, marginHorizontal: 5 }}></View>
                <View style={{ borderRadius: 50, width: 23, height: 6, backgroundColor: COLORS.lightGrey }}></View>
            </View>
        </SafeAreaView>
    )
}

export default Onboarding1
