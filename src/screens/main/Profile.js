import React from "react";
import { 
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  StatusBar,
  FlatList,
  View,
  Pressable
} from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Profile = () => {
    return(
      <SafeAreaView style={profileStyles.container}>
        <StatusBar
        animated={true}
        backgroundColor="green"
      />
       
       <View style={profileStyles.header}>
            <Image style={profileStyles.userImage} source={require('../../../assets/images/user.png')} />
            <View style={profileStyles.userNameStatus}>
                <Text style={profileStyles.userName}>Joe Jackson</Text>
                <Text style={profileStyles.userStatus}>If you want something, you've..</Text>
            </View>
            <View style={profileStyles.editProfile}>
                <Pressable>
                    <Text style={profileStyles.editProfileText}><MaterialIcons name="edit" style={{fontSize:30}} /></Text>
                </Pressable>
            </View>
       </View>

       <View style={profileStyles.list}>
        <FlatList
            data={[
                {key: 'View Profile', icon:"person"},
                {key: 'Your Orders', icon:"bookmark"},
                {key: 'Change Password', icon:"lock"},
            ]}
            renderItem={({item}) => 
                <Pressable>
                    <View style={profileStyles.listItems}>
                        <MaterialIcons name={item.icon} style={{fontSize:30, paddingRight:5}} />
                        <Text style={profileStyles.listItemText}>{item.key}</Text>
                    </View>
                </Pressable>
            } />
       </View>
        
      </SafeAreaView>
    );
}

export default Profile;

const profileStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#fff",
        padding:10,
    },
    header:{
        display:"flex",
        flexDirection:"row",
    },
    userNameStatus:{
        flexGrow:1
    },
    userImage:{
        resizeMode: 'contain',
        height: 50,
        width: 60,
        alignSelf:"center",
    },
    userName:{
        fontSize:20,
        fontFamily: "Urbanist-Bold",
    },
    userStatus:{
        fontSize:16,
        flexWrap:"wrap",
        color:"lightseagreen",
        fontFamily: "Urbanist-Bold",
    },
    editProfile:{
        display:"flex",
        justifyContent:"center",
        alignItems:"flex-end",
        margin:10,
    },
    editProfileText:{
        fontFamily: "Urbanist-Bold",
        color:"#4992ca"
    },
    list:{
        flex: 1,
        backgroundColor:"#fff",
        margin:10,
    },
    listItems:{
        backgroundColor:"whitesmoke",
        padding:15,
        marginVertical:10,
        borderRadius:20,
        flexDirection:"row",
    },
    listItemText:{
        fontSize:20
    }
 
});


