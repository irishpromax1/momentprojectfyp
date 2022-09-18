import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    
    image:{
    width: '100%',
    height: '30%',
    },

    title:{
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: "center"
    },
    subtitle:{
        fontSize: 15,
        color: colors.grey,
        textAlign: "center"
    },

    innerTitle:{
        fontSize: 40,
        fontWeight: 'bold', 
        color: colors.orange,
        textAlign: "center"
        
    },

    container:{
        padding:24,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        height:'100%',
        
    },

    footerText:{
        color:'#4f63ac',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 13
    },
    titleContainer:{
        marginVertical: 100,
    },

    login:{
        marginVertical: 20,
    }
})